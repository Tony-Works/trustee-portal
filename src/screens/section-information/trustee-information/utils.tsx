import type { CellProps, Column } from 'react-table';
import { SchemeInformation } from 'models';
import { ReactNode } from 'react';
import { Button, Stack } from '@mui/material';

export const data: SchemeInformation[] = [
  {
    fundEnName: 'Fund Name 01',
    fundChName: '基⾦⼀',
    fundDesc: 'Equity Fund',
    riskClass: '1',
  },
  {
    fundEnName: 'Fund Name 02',
    fundChName: '基⾦⼀',
    fundDesc: 'Equity Fund',
    riskClass: '2',
  },
  {
    fundEnName: 'Fund Name 03',
    fundChName: '基⾦⼀',
    fundDesc: 'Equity Fund',
    riskClass: '3',
  },
  {
    fundEnName: 'Fund Name 04',
    fundChName: '基⾦⼀',
    fundDesc: 'Equity Fund',
    riskClass: '4',
  },
  {
    fundEnName: 'Fund Name 05',
    fundChName: '基⾦⼀',
    fundDesc: 'Equity Fund',
    riskClass: '5',
  },
  {
    fundEnName: 'Fund Name 06',
    fundChName: '基⾦⼀',
    fundDesc: 'Equity Fund',
    riskClass: '6',
  },
  {
    fundEnName: 'Fund Name 07',
    fundChName: '基⾦⼀',
    fundDesc: 'Equity Fund',
    riskClass: '7',
  },
  {
    fundEnName: 'Fund Name 08',
    fundChName: '基⾦⼀',
    fundDesc: 'Equity Fund',
    riskClass: '8',
  },
];

export const columns: Column<SchemeInformation>[] = [
  { Header: 'Fund English Name', accessor: 'fundEnName' },
  { Header: 'Fund Chinese Name', accessor: 'fundChName' },
  { Header: 'Fund Descriptor', accessor: 'fundDesc' },
  { Header: 'Risk Class', accessor: 'riskClass' },
  {
    Header: 'Action',
    disableSortBy: true,
    Cell: (_cellProps: CellProps<SchemeInformation>): ReactNode => {
      return (
        <Stack spacing={1} direction="row">
          <Button variant="contained" color="primary">
            Edit
          </Button>
        </Stack>
      );
    },
  },
];
