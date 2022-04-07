import { ReactElement } from 'react';
import Table from 'components/table';
import { columns, data } from './utils';
import { Scheme } from 'models';
// import styled from '@emotion/styled';
// import { Box } from '@mui/system';

// const Container = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '2rem',
// });

const CasesAction = (): ReactElement => {
  return (
    <Table<Scheme>
      name="Cases Result"
      title="Cases for your Action"
      columns={columns}
      data={data}
    />
  );
};

export default CasesAction;
