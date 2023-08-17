import { useQuery } from '@tanstack/react-query';

import { apiRequest } from '@shared/api';
import { BASE_API_URL, METHOD, QUERY_KEY } from '@shared/config/constants';
import { ErrorType } from '@shared/types';

import { QueryDataProps } from './types';

export const useQueryProducts = () => {
  return useQuery<QueryDataProps, ErrorType>({
    queryKey: [QUERY_KEY.DEVICES],
    queryFn: () =>
      apiRequest({
        url: BASE_API_URL,
        method: METHOD.GET,
      }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    networkMode: 'always',
    staleTime: Infinity,
    cacheTime: Infinity,
    retry: 1,
  });
};
