import { ReactElement } from 'react';
import { Stack, Container } from '@mui/material';
import PageTitle from 'components/page-title';
import SchemeAuditInvestigation from './scheme-audit-investigation';
import RecordAuditInvestigation from './record-audit-investigation';

const SchemeAudit = (): ReactElement => {
  return (
    <Container>
      <Stack spacing={3}>
        <PageTitle>Update Trustee & Scheme Information</PageTitle>
        <SchemeAuditInvestigation />
        <RecordAuditInvestigation />
      </Stack>
    </Container>
  );
};

export default SchemeAudit;
