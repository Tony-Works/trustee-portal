import type { ReactElement } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import HiddenLoadingText from 'components/hidden-loading-text';

const OverlayContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  whiteSpace: 'nowrap',
  background: '#f6fcff',
  height: '100%',
  width: '100%',
  opacity: '.5',
  zIndex: 99999,
});

const LoadingContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

type SpinnerProps = {
  isVisible?: boolean;
};

const Spinner = (props: SpinnerProps): ReactElement | null => {
  const { isVisible = false } = props;

  if (!isVisible) return null;

  return (
    <OverlayContainer>
      <LoadingContainer>
        <CircularProgress />
        <HiddenLoadingText isLoading />
      </LoadingContainer>
    </OverlayContainer>
  );
};

export default Spinner;
