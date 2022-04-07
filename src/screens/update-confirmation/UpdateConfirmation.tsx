import { ReactElement } from 'react';
import { Container, Stack } from '@mui/material';
import PageTitle from 'components/page-title';
import TrusteeInformation from './trustee-information';
import SchemeInformation from './scheme-information';

const UpdateConfirmation = (): ReactElement => {
  return (
    <Container>
      <Stack spacing={3}>
        <PageTitle>Update Trustee & Scheme Information</PageTitle>
        <TrusteeInformation />
        <SchemeInformation />
      </Stack>
    </Container>
  );
};

export default UpdateConfirmation;
