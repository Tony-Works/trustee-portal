import { Stack, Container } from '@mui/material';
import { ReactElement } from 'react';
import CasesAction from './cases-action';
import TrusteeInformation from './trustee-information';
import PageTitle from 'components/page-title';
import SearchRecords from './search-records';

const SchemeInformation = (): ReactElement => {
  return (
    <Container>
      <Stack spacing={3}>
        <PageTitle>Update Trustee & Scheme Information</PageTitle>
        <CasesAction />
        <TrusteeInformation />
        <SearchRecords />
      </Stack>
    </Container>
  );
};

export default SchemeInformation;
