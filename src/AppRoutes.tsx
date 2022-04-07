import type { ReactElement } from 'react';

import { Routes, Route } from 'react-router-dom';
import CreateAudit from 'screens/a6-a10/create-audit';
import PrincipalBrochure from 'screens/a6-a10/principal-brochure';
import SchemeAudit from 'screens/a6-a10/scheme-audit';
import SchemeNewUpload from 'screens/a6-a10/scheme-new-upload';
import SchemePendingDocuments from 'screens/a6-a10/scheme-pending-documents';

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
      <Route path="upload">
        <Route index element={<SchemeAudit />} />
        <Route path="create-audit" element={<CreateAudit />} />
        <Route path="new-upload" element={<SchemeNewUpload />} />
        <Route path="scheme-pending" element={<SchemePendingDocuments />} />
        <Route path="brochure" element={<PrincipalBrochure />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
