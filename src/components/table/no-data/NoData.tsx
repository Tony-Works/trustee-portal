import type { ReactElement } from 'react';

import { styled } from '@mui/material/styles';

const Container = styled('div')({
  position: 'absolute',
  top: '65%',
  left: '50%',
  transform: 'translate(-65%, -50%)',
  whiteSpace: 'nowrap',
});

type NoDataProps = {
  isVisible?: boolean;
};

const NoData = (props: NoDataProps): ReactElement | null => {
  const { isVisible = false } = props;

  if (!isVisible) return null;

  return <Container>No data found</Container>;
};

export default NoData;
