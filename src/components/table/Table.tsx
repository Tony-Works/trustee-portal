import type { ReactElement } from 'react';
import type { Column } from 'react-table';

import { useEffect } from 'react';
import { useSticky } from 'react-table-sticky';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import { styled } from '@mui/material/styles';
import MuiTable from '@mui/material/Table';
import Box from '@mui/material/Box';

import Card from 'components/card';

import NoData from './no-data';
import DefaultCell from './default-cell';
import Header from './header';
import Body from './body';
import QuickSearch from './quick-search';
import Pagination from './pagination';
import Scrollbar from './scrollbar';
import Spinner from './spinner';

const TableContainer = styled(MuiTable, {
  shouldForwardProp: (prop) => {
    return prop !== 'isLoading';
  },
})<{ isLoading?: boolean }>(({ isLoading, theme }) => {
  return {
    '& [data-sticky-td]': {
      position: !isLoading ? 'sticky' : undefined,
    },
    '& [data-sticky-last-left-td]': {
      backgroundColor: !isLoading ? theme.palette.common.white : undefined,
    },
    '& [data-sticky-first-right-td]': {
      backgroundColor: !isLoading ? theme.palette.common.white : undefined,
    },
    '& > thead > tr > th, td': {
      whiteSpace: 'nowrap',
      '&:first-of-type': {
        paddingLeft: 0,
      },
      '&:last-of-type': {
        paddingRight: 0,
      },
    },
  };
});

type TableProps<Type extends object> = {
  name: string;
  type?: 'client' | 'server';
  title?: string;
  striped?: boolean;
  columns: Column<Type>[];
  data?: Type[];
  isLoading?: boolean;
  totalRows?: number;
  rowsPerPage?: number;
  fetchData?: (params: { pageIndex: number; pageSize: number }) => void;
};

const Table = <Type extends object>(props: TableProps<Type>): ReactElement => {
  const {
    name,
    title,
    striped,
    columns,
    data = [],
    isLoading,
    totalRows,
    fetchData,
    type = 'client',
    rowsPerPage = 50,
  } = props;

  const isServerSide = type === 'server';
  const rowsCount = isServerSide ? totalRows : data.length;

  if (isServerSide && (!totalRows || !fetchData))
    throw new Error(
      'Table with type of `server` must implement totalRows and fetchData props'
    );

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable<Type>(
    {
      columns,
      data,
      manualGlobalFilter: true,
      defaultColumn: {
        Cell: DefaultCell,
      },
      initialState: {
        pageIndex: 0,
        pageSize: rowsPerPage,
      },
      manualPagination: isServerSide,
      pageCount: rowsCount,
    },
    useGlobalFilter,
    useSortBy,
    useSticky,
    usePagination
  );

  useEffect(() => {
    if (isServerSide && fetchData) {
      fetchData({ pageIndex, pageSize });
    }
  }, [fetchData, isServerSide, pageIndex, pageSize]);

  return (
    <Card
      title={title}
      action={
        <Box display="flex" alignItems="center" gap="1rem">
          <QuickSearch setGlobalFilter={setGlobalFilter} />
          <Pagination
            pageIndex={pageIndex}
            rowsPerPage={pageSize}
            totalRows={rowsCount}
            isNextEnabled={canNextPage}
            isPreviousEnabled={canPreviousPage}
            onNext={nextPage}
            onPrevious={previousPage}
          />
        </Box>
      }>
      <Box position="relative">
        <Scrollbar>
          <TableContainer {...getTableProps()} aria-label={name} isLoading={isLoading}>
            <Header<Type> headerGroups={headerGroups} />
            <Body<Type>
              striped={isLoading ? false : striped}
              page={page}
              prepareRow={prepareRow}
            />
          </TableContainer>
        </Scrollbar>
        <Spinner isVisible={isLoading} />
        <NoData isVisible={page.length === 0} />
      </Box>
    </Card>
  );
};

export default Table;
