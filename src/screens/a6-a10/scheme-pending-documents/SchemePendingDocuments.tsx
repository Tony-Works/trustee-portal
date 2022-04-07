import { ReactElement } from 'react';
import { Stack, Container } from '@mui/material';
import PageTitle from 'components/page-title';
import UploadPendingApproval from './upload-pending-approval';
import SchemeDocumentsDetails from './scheme-documents-details';

const SchemePendingDocuments = (): ReactElement => {
  return (
    <Container>
      <Stack spacing={3}>
        <PageTitle>Update Trustee & Scheme Information</PageTitle>
        <UploadPendingApproval />
        <SchemeDocumentsDetails />
      </Stack>
    </Container>
  );
};

export default SchemePendingDocuments;
