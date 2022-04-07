import React, { ReactElement } from 'react';
import Card from 'components/card';
import { SchemeInvestigation } from 'models';
import { columns, data } from './utils';
import Table from 'components/table';

import { useForm } from 'react-hook-form';
import {
  styled,
  Box,
  Grid,
  Button,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';
import Form from 'components/form';

type Sample = {
  sample: string;
};

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const Divider = styled(Box)({
  width: '100%',
  height: '0.0625rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  backgroundColor: '#676766',
});

const RecordAuditInvestigation = (): ReactElement => {
  const dualInputForm = useForm<Sample>({
    shouldUnregister: false,
  });

  return (
    <Card title="Record of MPF Scheme Under Audit / Investigation">
      <Form<Sample> onSubmit={() => {}} {...dualInputForm}>
        <FormContainer>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="select">Age</InputLabel>
                <Select labelId="select" id="select" label="Audit / Investigation">
                  <MenuItem value="Submitted">Submitted</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <Form.TextField label="Reference Number" name="refNo" />
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
          <Card.Footer>
            <Button sx={{ borderColor: '#f73378', color: '#f73378' }} variant="outlined">
              Clear
            </Button>
            <Button color="primary" variant="outlined" type="submit">
              Search
            </Button>
          </Card.Footer>
        </FormContainer>
      </Form>
      <Divider />
      <Typography variant="h5" color="primary" fontWeight="bold">
        Search Results
      </Typography>
      <Table<SchemeInvestigation>
        name="Cases Result"
        title="MPF Scheme A"
        columns={columns}
        data={data}
      />
    </Card>
  );
};

export default RecordAuditInvestigation;
