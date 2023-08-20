import { createApi, createStore } from 'effector';

import { log } from '@shared/lib';

export const $selectedProductId = createStore<string | null>(null);

export const { addProductSelectedId } = createApi($selectedProductId, {
  addProductSelectedId: (_, payload: string | null) => payload,
});

$selectedProductId.watch((state) => {
  log('$selectedProductId', state);
});
