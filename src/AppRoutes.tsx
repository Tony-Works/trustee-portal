import type { ReactElement } from 'react';

import { Routes, Route } from 'react-router-dom';

import NotFound from 'screens/not-found';
import SchemeInformation from 'screens/scheme-information';

const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="scheme">
        <Route index element={<SchemeInformation />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
