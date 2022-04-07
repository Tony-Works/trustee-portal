import type { ReactElement } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Container = styled(Box)({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const PageLoader = (): ReactElement => {
  return (
    <Container>
      <CircularProgress aria-label="loading..." />
    </Container>
  );
};

export default PageLoader;
