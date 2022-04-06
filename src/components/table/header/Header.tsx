import type { ReactElement } from 'react';
import type { HeaderGroup } from 'react-table';

import { styled } from '@mui/material/styles';
import MuiTableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

const TableCell = styled(MuiTableCell)({
  border: 0,
  paddingBottom: 0,
});

type HeaderProps<Type extends object> = {
  headerGroups: HeaderGroup<Type>[];
};

const Header = <Type extends object>(props: HeaderProps<Type>): ReactElement => {
  const { headerGroups } = props;

  return (
    <MuiTableHead>
      {headerGroups.map((headerGroup) => {
        const { key: headerGroupKey, ...restHeaderGroupProps } =
          headerGroup.getHeaderGroupProps();

        return (
          <TableRow {...restHeaderGroupProps} key={headerGroupKey}>
            {headerGroup.headers.map((column) => {
              const { key: headerKey, ...resetHeaderProps } =
                column.id === 'selection'
                  ? column.getHeaderProps()
                  : column.getHeaderProps(column.getSortByToggleProps());

              return (
                <TableCell {...resetHeaderProps} key={headerKey}>
                  {column.render('Header')}
                  {column.canSort && column.id !== 'selection' && (
                    <TableSortLabel
                      active={column.isSorted}
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </MuiTableHead>
  );
};

export default Header;
