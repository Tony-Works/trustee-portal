import type { CellProps, Column } from 'react-table';
import { Scheme } from 'models';
import { ReactNode } from 'react';
import { Button, Stack } from '@mui/material';

export const data: Scheme[] = [
  {
    requestDt: '13/12/2021 09:23:12',
    referenceNo: '66373384848788',
    status: 'Pending',
    preparerId: 'Preparer A',
    supervisorId: 'Supervisor A',
  },
];

export const columns: Column<Scheme>[] = [
  { Header: 'Request Date', accessor: 'requestDt' },
  { Header: 'Reference Number', accessor: 'referenceNo' },
  { Header: 'Status', accessor: 'status' },
  { Header: 'Preparer User ID', accessor: 'preparerId' },
  { Header: 'Supervisor  User ID', accessor: 'supervisorId' },
  {
    Header: 'Action',
    disableSortBy: true,
    Cell: (_cellProps: CellProps<Scheme>): ReactNode => {
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
