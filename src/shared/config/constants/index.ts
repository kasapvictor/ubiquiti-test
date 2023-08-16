/* eslint-disable no-unused-vars */
export const BASE_API_URL = import.meta.env.VITE_API_BASE_URL as string;

export enum METHOD {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
