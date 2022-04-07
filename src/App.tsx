import type { ReactElement } from 'react';
import AppRoutes from 'AppRoutes';
import Page from 'components/page';

const App = (): ReactElement => {
  return (
    <Page>
      <AppRoutes />
    </Page>
  );
};

export default App;
