import type { CellProps, Column } from 'react-table';
import { SchemeDocuments } from 'models';
import { ReactNode } from 'react';
import { Stack, Tooltip } from '@mui/material';
import ViewIcon from 'assets/img/view_btn.svg';

export const data: SchemeDocuments[] = [
  {
    nmDocs: 'Pending',
    vrsDocs: 'Pending',
    asOfDt: '13/12/2021',
    effctvDt: '13/12/2021',
    status: 'Pending',
    preparer: 'Preparer A',
    supervsor: 'Supervisor A',
  },
  {
    nmDocs: 'Pending',
    vrsDocs: 'Pending',
    asOfDt: '13/12/2021',
    effctvDt: '13/12/2021',
    status: 'Pending',
    preparer: 'Preparer A',
    supervsor: 'Supervisor A',
  },
  {
    nmDocs: 'Pending',
    vrsDocs: 'Pending',
    asOfDt: '13/12/2021',
    effctvDt: '13/12/2021',
    status: 'Pending',
    preparer: 'Preparer A',
    supervsor: 'Supervisor A',
  },
  {
    nmDocs: 'Pending',
    vrsDocs: 'Pending',
    asOfDt: '13/12/2021',
    effctvDt: '13/12/2021',
    status: 'Pending',
    preparer: 'Preparer A',
    supervsor: 'Supervisor A',
  },
  {
    nmDocs: 'Pending',
    vrsDocs: 'Pending',
    asOfDt: '13/12/2021',
    effctvDt: '13/12/2021',
    status: 'Pending',
    preparer: 'Preparer A',
    supervsor: 'Supervisor A',
  },
  {
    nmDocs: 'Pending',
    vrsDocs: 'Pending',
    asOfDt: '13/12/2021',
    effctvDt: '13/12/2021',
    status: 'Pending',
    preparer: 'Preparer A',
    supervsor: 'Supervisor A',
  },
];

export const columns: Column<SchemeDocuments>[] = [
  { Header: 'Name of Document', accessor: 'nmDocs' },
  { Header: 'Version of the Document', accessor: 'vrsDocs' },
  { Header: 'As of Date', accessor: 'asOfDt' },
  { Header: 'Effective Date', accessor: 'effctvDt' },
  { Header: 'Status', accessor: 'status' },
  { Header: 'Preparer User ID', accessor: 'preparer' },
  { Header: 'Supervisor  User ID', accessor: 'supervsor' },
  {
    Header: 'Action',
    disableSortBy: true,
    Cell: (_cellProps: CellProps<SchemeDocuments>): ReactNode => {
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
