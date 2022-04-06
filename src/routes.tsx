import type { ReactElement } from 'react';

import { Routes, Route } from 'react-router-dom';

import NotFound from 'screens/not-found';

const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
