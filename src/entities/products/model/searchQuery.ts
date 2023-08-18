import { createApi, createStore } from 'effector';

export const $searchQuery = createStore<string>('');

export const { setQuerySearch } = createApi($searchQuery, {
  setQuerySearch: (_, payload: string) => payload,
});
