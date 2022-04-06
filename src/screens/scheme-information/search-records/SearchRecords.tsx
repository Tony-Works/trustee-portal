import { ReactElement } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from 'components/card';
import Table from 'components/table';
import { HistoryChangeRequest } from 'models';
import { columns, data } from './utils';

import { useForm } from 'react-hook-form';
import { styled, Box, Grid, Button } from '@mui/material';
import Form from 'components/form';

type SchemeInformation = {
  memberNameInEnglish: string;
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

const SearchRecords = (): ReactElement => {
  const dualInputForm = useForm<SchemeInformation>({
    shouldUnregister: false,
  });

  return (
    <Card title="Search Records" action={<ExpandMoreIcon />}>
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
            <Grid item xs={3}>
              <Form.TextField label="Reference Number" name="refNo" />
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
      <Table<HistoryChangeRequest>
        name="Cases Result"
        title="History of Change Request"
        columns={columns}
        data={data}
      />
    </Card>
  );
};

export default SearchRecords;
