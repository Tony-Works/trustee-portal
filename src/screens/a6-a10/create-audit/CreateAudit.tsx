import Card from 'components/card';
import { ReactElement } from 'react';

import { useForm } from 'react-hook-form';
import Form from 'components/form';
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
} from '@mui/material';
import PageTitle from 'components/page-title';
import DefinitionList, { DefinitionItem } from 'components/definition-list';

type Sample = {
  sample: string;
};

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const CreateAudit = (): ReactElement => {
  const dualInputForm = useForm<Sample>({
    shouldUnregister: false,
  });

  return (
    <Container>
      <Stack spacing={3}>
        <PageTitle>Update of Audit / Investigation That Prohibits Tranfer</PageTitle>
        <Card title="Create Audit / Investigation Record">
          <Form<Sample> onSubmit={() => {}} {...dualInputForm}>
            <FormContainer>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <DefinitionList xs={12}>
                    <DefinitionItem term="Name of Scheme">MPF Scheme Name</DefinitionItem>
                  </DefinitionList>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <FormControl fullWidth>
                    <InputLabel id="select">Audit / Investigation</InputLabel>
                    <Select labelId="select" id="select" label="Audit / Investigation">
                      <MenuItem value="Submitted">Audit1</MenuItem>
                      <MenuItem value="Pending">Audit2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3}>
                  <Form.DatePicker
                    label="Date of Commencement Audit / Investigation"
                    name="range"
                    helperText="DDMMYYYY"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Form.DatePicker
                    label="Date range request"
                    name="range"
                    helperText="DDMMYYYY"
                  />
                </Grid>
                <Grid item xs={3}>
                  <FormControl fullWidth>
                    <InputLabel id="select">Status</InputLabel>
                    <Select labelId="Status" id="select" label="Audit / Investigation">
                      <MenuItem value="Submitted">Submitted</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </FormContainer>
          </Form>
        </Card>
      </Stack>
    </Container>
  );
};

export default CreateAudit;
