import type { CellProps, Column } from 'react-table';
import { SchemeApproval } from 'models';
import { ReactNode } from 'react';
import { Button, Stack } from '@mui/material';

export const data: SchemeApproval[] = [
  {
    nmDocs: 'Consolidated reports',
    vrsDocs: 'Consolidate Reports v3',
    asOfDt: '-',
    effctvDt: '15/12/2021',
    preparer: 'Supervisor 1',
  },
  {
    nmDocs: 'Consolidated reports',
    vrsDocs: 'Consolidate Reports v3',
    asOfDt: '-',
    effctvDt: '15/12/2021',
    preparer: 'Supervisor 2',
  },
];

export const columns: Column<SchemeApproval>[] = [
  { Header: 'Name of Document', accessor: 'nmDocs' },
  { Header: 'Version of the Document', accessor: 'vrsDocs' },
  { Header: 'As of Date', accessor: 'asOfDt' },
  { Header: 'Effective Date', accessor: 'effctvDt' },
  { Header: 'Preperare', accessor: 'preparer' },
  {
    Header: 'Action',
    disableSortBy: true,
    Cell: (_cellProps: CellProps<SchemeApproval>): ReactNode => {
      return (
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            View
          </Button>
          <Button variant="contained" color="error">
            Reject
          </Button>
          <Button variant="contained" color="success">
            Approve
          </Button>
        </Stack>
      );
    },
  },
];
