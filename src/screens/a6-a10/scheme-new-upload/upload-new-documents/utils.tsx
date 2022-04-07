import type { CellProps, Column } from 'react-table';
import { SchemeUpload } from 'models';
import { ReactNode } from 'react';
import { Button, Stack } from '@mui/material';

export const data: SchemeUpload[] = [
  {
    nmDocs: 'Consolidated reports',
    vrsDocs: 'Consolidate Reports v3',
    asOfDt: '-',
    effctvDt: '15/12/2021',
  },
  {
    nmDocs: 'Consolidated reports',
    vrsDocs: 'Consolidate Reports v3',
    asOfDt: '-',
    effctvDt: '15/12/2021',
  },
];

export const columns: Column<SchemeUpload>[] = [
  { Header: 'Name of Document', accessor: 'nmDocs' },
  { Header: 'Version of the Document', accessor: 'vrsDocs' },
  { Header: 'As of Date', accessor: 'asOfDt' },
  { Header: 'Effective Date', accessor: 'effctvDt' },
  {
    Header: 'Action',
    disableSortBy: true,
    Cell: (_cellProps: CellProps<SchemeUpload>): ReactNode => {
      return (
        <Stack spacing={2} direction="row">
          <Button variant="outlined" sx={{ borderColor: '#f73378', color: '#f73378' }}>
            Delete
          </Button>
          <Button variant="contained" color="warning">
            View
          </Button>
        </Stack>
      );
    },
  },
];
