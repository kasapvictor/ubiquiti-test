import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Container } from '@widgets/container';
import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';
import { Main } from '@widgets/main';

import { ErrorBoundary, ProgressBarInit } from '@shared/lib';

export const BaseTemplate = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Suspense fallback={<ProgressBarInit />}>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </Main>
      <Footer />
    </Container>
  );
};
