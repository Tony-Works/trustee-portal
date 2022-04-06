import { Container, Stack } from '@mui/material';
import PageTitle from 'components/page-title';
import { ReactElement } from 'react';
import EffectiveDate from './effective-date';
import TrusteeInformation from './trustee-information';

const SectionInformation = (): ReactElement => {
  return (
    <Container>
      <Stack spacing={3}>
        <PageTitle>Update Trustee & Scheme Information</PageTitle>
        <TrusteeInformation />
        <EffectiveDate />
      </Stack>
    </Container>
  );
};

export default SectionInformation;
