import type { CellProps, Column } from 'react-table';
import { SchemeInvestigation } from 'models';
import { ReactNode } from 'react';
import { Button, Stack } from '@mui/material';

export const data: SchemeInvestigation[] = [
  {
    audit: 'Audit',
    referenceNo: '2625e636336',
    dateCmm: '18/12/2021',
    endDtAudt: '20/21/2021',
    status: 'Pending',
    preparer: 'Preparer A',
    supervsor: 'Preparer A',
  },
];

export const columns: Column<SchemeInvestigation>[] = [
  { Header: 'Audit / Investigation', accessor: 'audit' },
  { Header: 'Reference Number', accessor: 'referenceNo' },
  { Header: 'Date of Commencement Of the Audit / Investigation', accessor: 'dateCmm' },
  { Header: 'End Date of Audit Investigation', accessor: 'endDtAudt' },
  { Header: 'Status', accessor: 'status' },
  { Header: 'Preparer User ID', accessor: 'preparer' },
  { Header: 'Supervisor  User ID', accessor: 'supervsor' },
  {
    Header: 'Action',
    disableSortBy: true,
    Cell: (_cellProps: CellProps<SchemeInvestigation>): ReactNode => {
      return (
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            View
          </Button>
        </Stack>
      );
    },
  },
];
