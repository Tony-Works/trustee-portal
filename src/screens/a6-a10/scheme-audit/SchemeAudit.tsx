import { ReactElement } from 'react';
import { Stack, Container, Button, styled } from '@mui/material';
import PageTitle from 'components/page-title';
import SchemeAuditInvestigation from './scheme-audit-investigation';
import RecordAuditInvestigation from './record-audit-investigation';

const CreateButton = styled(Button)({
  display: 'flex',
  justifyContent: 'flex-start',
  width: '30%',
});

const SchemeAudit = (): ReactElement => {
  return (
    <Container>
      <Stack spacing={3}>
        <PageTitle>Update Trustee & Scheme Information</PageTitle>
        <CreateButton variant="contained" color="primary">
          CREATE AUDIT / INVESTIGATION RECORD
        </CreateButton>
        <SchemeAuditInvestigation />
        <RecordAuditInvestigation />
      </Stack>
    </Container>
  );
};

export default SchemeAudit;
