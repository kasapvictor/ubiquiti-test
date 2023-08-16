import axios from 'axios';

import { BASE_API_URL } from '@shared/config/constants';

export const api = axios.create({
  baseURL: BASE_API_URL as string,
});

export const apiPrivate = axios.create({
  baseURL: BASE_API_URL as string,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
