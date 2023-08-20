import { createApi, createStore } from 'effector';

import { log } from '@shared/lib';

export const $filterBy = createStore<string[]>([]);

export const { addFilterBy } = createApi($filterBy, {
  addFilterBy: (_, payload: string[]) => payload,
});

$filterBy.watch((state) => {
  log('$filterBy', state);
});
