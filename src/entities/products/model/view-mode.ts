import { createApi, createStore } from 'effector';

import { ProductsViewMode } from './types';

export const $viewMode = createStore<ProductsViewMode>(ProductsViewMode.List);

export const { setViewMode } = createApi($viewMode, {
  setViewMode: (_, payload: ProductsViewMode) => payload,
});
