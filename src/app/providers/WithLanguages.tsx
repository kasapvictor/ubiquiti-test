import { FC, PropsWithChildren, Suspense } from 'react';

import { I18nextProvider } from 'react-i18next';

import i18n from '@shared/config/i18n';
import { ProgressBarInit } from '@shared/lib';

export const WithLanguages: FC<PropsWithChildren> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<ProgressBarInit />}>{children}</Suspense>
    </I18nextProvider>
  );
};
