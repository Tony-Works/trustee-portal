import { ReactElement } from 'react';

import Card from 'components/card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useForm } from 'react-hook-form';
import { styled, Box, Grid } from '@mui/material';
import Form from 'components/form';

type SchemeInformation = {
  memberNameInEnglish: string;
};

const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const EffectiveDate = (): ReactElement => {
  const dualInputForm = useForm<SchemeInformation>({
    shouldUnregister: false,
  });
  return (
    <Card title="Effective Date of Scheme Changes" action={<ExpandMoreIcon />}>
      <Form<SchemeInformation> onSubmit={() => {}} {...dualInputForm}>
        <FormContainer>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Form.DatePicker
                label="Date range request"
                name="range"
                helperText="DDMMYYYY"
              />
            </Grid>
          </Grid>
        </FormContainer>
      </Form>
    </Card>
  );
};

export default EffectiveDate;
