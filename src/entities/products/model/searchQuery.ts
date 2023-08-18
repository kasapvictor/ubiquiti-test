import { createApi, createStore } from 'effector';

import { log } from '@shared/lib';

export const $searchQuery = createStore<string>('');

export const { setQuerySearch } = createApi($searchQuery, {
  setQuerySearch: (_, payload: string) => payload,
});

$searchQuery.watch((state) => {
  log('$searchQuery', state);
});
