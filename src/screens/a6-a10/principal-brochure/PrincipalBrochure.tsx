import { ReactElement } from 'react';
import { Box, Button, Container, Grid, Stack, styled, Typography } from '@mui/material';
import PageTitle from 'components/page-title';
import { BrochureAddendum } from 'models';
import Table from 'components/table';
import { columns, data } from './utils';
import Card from 'components/card';
import DefinitionList, { DefinitionItem } from 'components/definition-list';

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const SchemeDocumentContent = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  color: '#2196f3',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  paddingTop: '6rem',
  textAlign: 'center',
});

const PrincipalBrochure = (): ReactElement => {
  return (
    <Container>
      <Stack spacing={3}>
        <PageTitle>Upload Scheme Documents</PageTitle>
        <Card>
          <Table<BrochureAddendum>
            name="Cases Result"
            title="Latest Principal Brochure and addendum"
            columns={columns}
            data={data}
          />
          <FormContainer>
            <Typography color="primary" variant="h6">
              Contact Person of Trustee
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <DefinitionList xs={12}>
                  <DefinitionItem term="Contact Person Name">
                    Chain Tai Man
                  </DefinitionItem>
                </DefinitionList>
              </Grid>
              <Grid item xs={4}>
                <DefinitionList xs={12}>
                  <DefinitionItem term="Phone Number">(+852) 9987 5342</DefinitionItem>
                </DefinitionList>
              </Grid>
              <Grid item xs={4}>
                <DefinitionList xs={12}>
                  <DefinitionItem term="Email Address">
                    ChainTaiMan@abc.com
                  </DefinitionItem>
                </DefinitionList>
              </Grid>
            </Grid>
          </FormContainer>
          <Box
            sx={{
              border: 1,
              borderColor: 'primary.main',
              width: '100%',
              height: '120vh',
              borderRadius: 1,
              borderWidth: '.3rem',
            }}>
            <SchemeDocumentContent>Scheme Document Content</SchemeDocumentContent>
          </Box>
        </Card>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button color="warning" variant="contained">
            Back
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default PrincipalBrochure;
