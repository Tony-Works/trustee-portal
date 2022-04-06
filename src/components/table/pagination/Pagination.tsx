import type { ReactElement, ReactNode } from 'react';
import type { PaginationRenderItemParams } from '@mui/material';
import type { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';

import { styled } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import MuiPagination from '@mui/material/Pagination';
import MuiPaginationItem from '@mui/material/PaginationItem';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const PaginationItem = styled(MuiPaginationItem)(({ theme, type }) => {
  return {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    lineHeight: 'inherit',
    height: 25,
    ...(type === 'page' && {
      backgroundColor: 'transparent !important',
      color: theme.palette.grey[400],
      fontWeight: theme.typography.fontWeightBold,
      border: '1px solid',
      borderColor: theme.palette.grey[400],
      pointerEvents: 'none',
    }),
    '&:hover': {
      backgroundColor: theme.palette.grey[400],
    },
  };
});

type PaginationProps = {
  pageIndex: number;
  totalRows?: number;
  rowsPerPage: number;
  isNextEnabled: boolean;
  isPreviousEnabled: boolean;
  onNext: () => void;
  onPrevious: () => void;
};

const Pagination = (props: PaginationProps): ReactElement => {
  const {
    pageIndex,
    rowsPerPage,
    isNextEnabled,
    isPreviousEnabled,
    totalRows = 0,
    onPrevious,
    onNext,
  } = props;

  const renderPaginationAction = (
    actionProps: TablePaginationActionsProps
  ): ReactElement => {
    const { onPageChange } = actionProps;

    const renderPageItem = (item: PaginationRenderItemParams): ReactNode => {
      const page = pageIndex + 1;

      if (item.type === 'previous') {
        return (
          <PaginationItem {...item} onClick={onPrevious} disabled={!isPreviousEnabled}>
            <ArrowLeftIcon />
          </PaginationItem>
        );
      }

      if (item.type === 'next') {
        return (
          <PaginationItem {...item} onClick={onNext} disabled={!isNextEnabled}>
            <ArrowRightIcon />
          </PaginationItem>
        );
      }

      if (item.type === 'page' && item.selected === true) {
        return <PaginationItem {...item} page={page} />;
      }

      if (item.page === 1 && item.page === page) {
        return <PaginationItem {...item} page={1} />;
      }

      return null;
    };

    return (
      <MuiPagination
        count={totalRows}
        page={pageIndex}
        onChange={(_event, page) => {
          onPageChange(null, page);
        }}
        renderItem={renderPageItem}
      />
    );
  };

  return (
    <TablePagination
      component="div"
      labelDisplayedRows={({ to, count }) => {
        return `${to} of ${count}`;
      }}
      count={totalRows}
      rowsPerPage={rowsPerPage}
      page={pageIndex}
      onPageChange={() => {}}
      ActionsComponent={renderPaginationAction}
    />
  );
};

export default Pagination;
