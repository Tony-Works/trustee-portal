import { ReactElement } from 'react';

import Card from 'components/card';

import { useForm } from 'react-hook-form';
import { styled, Box, Grid, Typography, Button } from '@mui/material';
import Form from 'components/form';
import Table from 'components/table';
import { SchemeInformation } from 'models';
import { columns, data } from './utils';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type SectionInfo = {
  memberNameInEnglish: string;
};

const Divider = styled(Box)({
  width: '100%',
  height: '0.0625rem',
  marginTop: '2rem',
  marginBottom: '2rem',
  backgroundColor: '#676766',
});

const SchemeBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

const FormContainer = styled(Box)({
  display: 'flex',
  gap: '1rem',
  flexDirection: 'column',
});

const SectionInformation = (): ReactElement => {
  const dualInputForm = useForm<SectionInfo>({
    shouldUnregister: false,
  });
  return (
    <Card title="Section 1 - Trustee Information" action={<ExpandMoreIcon />}>
      <Form<SectionInfo> onSubmit={() => {}} {...dualInputForm}>
        <FormContainer>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Form.TextField label="Trustee's Name (English)" name="ename" />
            </Grid>
            <Grid item xs={6}>
              <Form.TextField label="Trustee's Name (Chinese)" name="cname" />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Form.TextField label="Principal Business Address" name="pba" />
            </Grid>
            <Grid item xs={6}>
              <Form.TextField label="Chinese Principal Business Address" name="cpba" />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Form.TextField label="Principal Business Telephone Number" name="pbtn" />
            </Grid>
            <Grid item xs={3}>
              <Form.TextField label="Principal Business Fax Number" name="pbfn" />
            </Grid>
            <Grid item xs={3}>
              <Form.TextField label="Business Email Address" name="buss" />
            </Grid>
            <Grid item xs={3}>
              <Form.TextField label="Trustee's Website" name="webst" />
            </Grid>
          </Grid>
        </FormContainer>
      </Form>
      <Divider />
      <SchemeBox>
        <Typography variant="h5" color="primary">
          Section - 2 Scheme Information
        </Typography>
        <Button variant="contained">CHANGE SCHEME NAME</Button>
      </SchemeBox>
      <Table<SchemeInformation>
        name="Cases Result"
        title="MPF Scheme A  |  強積⾦優選計劃甲"
        columns={columns}
        data={data}
      />
    </Card>
  );
};

export default SectionInformation;
