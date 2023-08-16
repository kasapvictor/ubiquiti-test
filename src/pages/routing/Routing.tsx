import { Route, Routes } from 'react-router-dom';

import { Home, NotFound } from '@pages/content';
import { BaseTemplate } from '@pages/template';

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route element={<BaseTemplate />}>
          <Route path={'/'} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
