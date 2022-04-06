import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from 'components/card';

import DefinitionList, { DefinitionItem } from 'components/definition-list';
import { ReactElement } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from 'components/table';
import { SchemeInformation } from 'models';
import { columns, data } from './utils';

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

const Action = styled(Box)({
  alignItems: 'right',
  justifyContent: 'right',
});

const TrusteeInformation = (): ReactElement => {
  return (
    <Card
      title="Section - 1 Trustee Information"
      action={
        <Action>
          <ExpandMoreIcon sx={{ ml: 15 }} />
          <Button variant="contained" color="primary" sx={{ display: 'block' }}>
            Edit Information
          </Button>
        </Action>
      }>
      <DefinitionList xs={6}>
        <DefinitionItem term="Trustee's Name(English)">MPF Trustee Name</DefinitionItem>
        <DefinitionItem term="Trustee's Name(Chinese)">XXXXXXXXX</DefinitionItem>
      </DefinitionList>
      <DefinitionList xs={6}>
        <DefinitionItem term="Principal Business Address">
          Rm1101, 11/F, ABC Tower, Hong Kong.
        </DefinitionItem>
        <DefinitionItem term="Employer Account Number">
          ⾹港 中環 商業中⼼ 11樓 1101室
        </DefinitionItem>
      </DefinitionList>
      <DefinitionList xs={3}>
        <DefinitionItem term="Principal Business Telephone Number">
          ( + 852 ) 2233 1234
        </DefinitionItem>
        <DefinitionItem term="Principal Business Fax Number">
          ( + 852 ) 2233 2345
        </DefinitionItem>
        <DefinitionItem term="Business Email Address">info@abc.com</DefinitionItem>
        <DefinitionItem term="Trustee’s Website">https://www.abc.com/</DefinitionItem>
      </DefinitionList>
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

export default TrusteeInformation;
