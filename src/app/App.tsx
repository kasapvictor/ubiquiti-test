import { BrowserRouter } from 'react-router-dom';

import { Routing } from '@pages/routing';

import { WithLanguages, WithTheme, WithQuery } from './providers';

export const App = () => {
  return (
    <WithTheme>
      <WithQuery>
        <WithLanguages>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </WithLanguages>
      </WithQuery>
    </WithTheme>
  );
};
