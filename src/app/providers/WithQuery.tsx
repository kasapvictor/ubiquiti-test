import { FC, PropsWithChildren } from 'react';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
/**
 * Prevent re-render
 * notifyOnChangeProps
 * https://tkdodo.eu/blog/react-query-render-optimizations#tracked-queries
 */
const client = new QueryClient({
  defaultOptions: {
    queries: {
      // notifyOnChangeProps: 'tracked',
      // suspense: true,
    },
  },
});

export const WithQuery: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
