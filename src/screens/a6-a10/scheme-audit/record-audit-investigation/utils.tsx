import type { CellProps, Column } from 'react-table';
import { SchemeInvestigation } from 'models';
import { ReactNode } from 'react';
import { Stack, Checkbox, Tooltip } from '@mui/material';
import ViewIcon from 'assets/img/view_btn.svg';

export const data: SchemeInvestigation[] = [
  {
    audit: 'Audit',
    referenceNo: '7374124123123',
    dateCmm: '18/12/2021',
    endDtAudt: '20/21/2021',
    status: 'Submitted',
    preparer: 'Preparer A',
    supervsor: 'Preparer A',
  },
  {
    audit: 'Audit',
    referenceNo: '7374124123123',
    dateCmm: '18/12/2021',
    endDtAudt: '20/21/2021',
    status: 'Submitted',
    preparer: 'Preparer A',
    supervsor: 'Preparer A',
  },
  {
    audit: 'Audit',
    referenceNo: '7374124123123',
    dateCmm: '18/12/2021',
    endDtAudt: '20/21/2021',
    status: 'Submitted',
    preparer: 'Preparer A',
    supervsor: 'Preparer A',
  },
];

export const columns: Column<SchemeInvestigation>[] = [
  {
    Header: 'Select',
    disableSortBy: true,
    Cell: (_cellProps: CellProps<SchemeInvestigation>): ReactNode => {
      return <Checkbox />;
    },
  },
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
          <Tooltip title="Scheme Information" arrow>
            <img
              src={ViewIcon}
              alt=""
              style={{
                cursor: 'pointer',
              }}
            />
          </Tooltip>
        </Stack>
      );
    },
  },
];
