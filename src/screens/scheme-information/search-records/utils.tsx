import type { CellProps, Column } from 'react-table';
import { HistoryChangeRequest } from 'models';
import { ReactNode } from 'react';
import { Checkbox, Tooltip } from '@mui/material';
import ViewIcon from 'assets/img/view_btn.svg';

export const data: HistoryChangeRequest[] = [
  {
    requestDt: '13/12/2021 09:23:12',
    referenceNo: '66373384848788',
    effctiveDt: '13/12/2021',
    status: 'Pending',
    preparerId: 'Preparer A',
    supervisorId: 'Supervisor A',
  },
  {
    requestDt: '13/12/2021 09:23:12',
    referenceNo: '66373384848788',
    effctiveDt: '13/12/2022',
    status: 'Pending',
    preparerId: 'Preparer B',
    supervisorId: 'Supervisor B',
  },
  {
    requestDt: '13/12/2021 09:23:12',
    referenceNo: '66373384848788',
    effctiveDt: '13/12/2023',
    status: 'Pending',
    preparerId: 'Preparer C',
    supervisorId: 'Supervisor C',
  },
];

export const columns: Column<HistoryChangeRequest>[] = [
  {
    Header: 'Select',
    disableSortBy: true,
    Cell: (_cellProps: CellProps<HistoryChangeRequest>): ReactNode => {
      return <Checkbox />;
    },
  },
  { Header: 'Request Date', accessor: 'requestDt' },
  { Header: 'Reference Number', accessor: 'referenceNo' },
  { Header: 'Effictive Date', accessor: 'effctiveDt' },
  { Header: 'Status', accessor: 'status' },
  { Header: 'Preparer User ID', accessor: 'preparerId' },
  { Header: 'Supervisor  User ID', accessor: 'supervisorId' },
  {
    Header: 'Action',
    disableSortBy: true,
    Cell: (_cellProps: CellProps<HistoryChangeRequest>): ReactNode => {
      return (
        <Tooltip title="Scheme Information" arrow>
          <img
            src={ViewIcon}
            alt=""
            style={{
              cursor: 'pointer',
            }}
          />
        </Tooltip>
      );
    },
  },
];
