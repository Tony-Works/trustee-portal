import { ReactElement } from 'react';
import { Stack, Container } from '@mui/material';
import PageTitle from 'components/page-title';
import SchemeDocumentsDetails from './scheme-documents-details';
import UploadNewDocuments from './upload-new-documents';

const SchemeNewUpload = (): ReactElement => {
  return (
    <Container>
      <Stack spacing={3}>
        <PageTitle>Upload Scheme Documents</PageTitle>
        <UploadNewDocuments />
        <SchemeDocumentsDetails />
      </Stack>
    </Container>
  );
};

export default SchemeNewUpload;
