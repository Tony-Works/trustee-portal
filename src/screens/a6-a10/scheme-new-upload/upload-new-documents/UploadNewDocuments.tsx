import { ReactElement } from 'react';
import Card from 'components/card';
import Table from 'components/table';
import { SchemeUpload } from 'models';
import { columns, data } from './utils';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
} from '@mui/material';
import Form from 'components/form';
import { useForm } from 'react-hook-form';

type Sample = {
  sample: string;
};

const Divider = styled(Box)({
  width: '100%',
  height: '0.0625rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  backgroundColor: '#676766',
});

const BlueDivider = styled(Box)({
  width: '100%',
  height: '.3rem',
  marginTop: '1rem',
  marginBottom: '1rem',
  backgroundColor: '#2196f3',
});

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const UploadButton = styled(Button)({
  display: 'flex',
  justifyContent: 'center',
  width: '30%',
  height: '5rem',
  alignContent: 'center',
  alignItems: 'center',
});

const UploadNewDocuments = (): ReactElement => {
  const dualInputForm = useForm<Sample>({
    shouldUnregister: false,
  });

  return (
    <Card>
      <Table<SchemeUpload>
        name="Cases Result"
        title="Upload New Scheme Documents"
        columns={columns}
        data={data}
      />
      <BlueDivider />
      <UploadButton variant="contained" color="warning">
        UPLOAD
      </UploadButton>
      <Divider />
      <Form<Sample> onSubmit={() => {}} {...dualInputForm}>
        <FormContainer>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <FormControl fullWidth>
                <InputLabel id="select">Name of Document</InputLabel>
                <Select labelId="select" id="select" label="Audit / Investigation">
                  <MenuItem value="Submitted">Submitted</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="select">Name of the Document</InputLabel>
                <Select labelId="select" id="select" label="Audit / Investigation">
                  <MenuItem value="Submitted">Document 01</MenuItem>
                  <MenuItem value="Pending">Document 02</MenuItem>
                  <MenuItem value="Pending">Document 03</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <Form.TextField label="Verification of the Document" name="refNo" />
            </Grid>
            <Grid item xs={3}>
              <Form.DatePicker label="As of Date" name="range" helperText="DDMMYYYY" />
            </Grid>
            <Grid item xs={3}>
              <Form.DatePicker
                label="Effective Date"
                name="range"
                helperText="DDMMYYYY"
              />
            </Grid>
          </Grid>
          <Typography variant="h6" color="primary">
            Contact Person of Trustee
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Form.TextField label="Contact Person Name" name="refNo" />
            </Grid>
            <Grid item xs={4}>
              <Form.TextField label="Phone Number" name="refNo" />
            </Grid>
            <Grid item xs={4}>
              <Form.TextField label="Email Address" name="refNo" />
            </Grid>
          </Grid>
        </FormContainer>
      </Form>
    </Card>
  );
};

export default UploadNewDocuments;
