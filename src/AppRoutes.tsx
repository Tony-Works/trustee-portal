import type { ReactElement } from 'react';

import { Routes, Route } from 'react-router-dom';

import NotFound from 'screens/not-found';
import SchemeInformation from 'screens/scheme-information';
import SectionInformation from 'screens/section-information';
import UpdateConfirmation from 'screens/update-confirmation';

const AppRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="scheme">
        <Route index element={<SchemeInformation />} />
        <Route path="section" element={<SectionInformation />} />
        <Route path="confirmation" element={<UpdateConfirmation />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
