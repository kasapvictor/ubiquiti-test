import { useState } from 'react';

import axios, { Method } from 'axios';

import { apiPrivate } from '@shared/config/api';
import { log } from '@shared/lib';

interface ServerError {
  code?: string;
  error?: string;
  message?: string;
  status?: number;
}

export interface ApiRequestState<D = Record<string, unknown>> {
  isLoading: boolean;
  error: string | number | null;
  success: boolean | null;
  data: D | null | unknown;
}

interface ApiRequestOptions<D> {
  data?: D;
  params?: D;
  url?: string;
  debug?: boolean;
  method?: Method;
  withThrowError?: boolean;
}

// Common Api Request
export const apiRequest = async <D = Record<string, unknown>>({
  debug = false,
  withThrowError = false,
  ...props
}: ApiRequestOptions<D>) => {
  try {
    const { method = 'post', ...options } = props;
    const response = await apiPrivate({ method, ...options });

    if (debug) {
      log(response);
    }

    return response.data;
  } catch (err) {
    if (debug) {
      log(err);
    }

    let errorMessage;

    if (axios.isAxiosError(err)) {
      const serverError = err.response?.data as ServerError;
      // FIXME переделать на свои кода
      //  return i18n.t(`error.${err.response.data.code}`);
      errorMessage = serverError?.code || serverError?.error || serverError?.message || err.response?.status || err.message;
    } else {
      errorMessage = (err as Error).message;
    }

    if (withThrowError) {
      throw new Error(String(errorMessage));
    }

    if (!withThrowError) {
      throw errorMessage;
    }
  }
};

// Api Request with local state
export const useApiRequest = <D = unknown>(defaultOptions: Omit<ApiRequestOptions<D>, 'data'>) => {
  const initialState = {
    data: null,
    error: null,
    success: null,
    isLoading: false,
  };

  const [state, setState] = useState<ApiRequestState<D>>(initialState);
  const reset = {
    success: () => setState((prev) => ({ ...prev, success: null })),
    error: () => setState((prev) => ({ ...prev, error: null })),
    data: () => setState((prev) => ({ ...prev, data: null })),
  };

  const request = async (options: Omit<ApiRequestOptions<D>, 'url' | 'method'> = {}) => {
    setState({ ...initialState, isLoading: true });

    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const response = await apiRequest({ ...defaultOptions, ...options });

      setState({
        isLoading: false,
        error: null,
        success: true,
        data: response,
      });

      return response;
    } catch (error) {
      log('useApiRequest error', error);

      const errMessage = error as string | number;

      setState({
        isLoading: false,
        success: false,
        data: null,
        error: errMessage,
      });

      throw new Error(String(errMessage));
    }
  };

  return { ...state, reset, request };
};
