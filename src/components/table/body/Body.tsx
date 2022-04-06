import type { ReactElement } from 'react';
import type { Row } from 'react-table';

import { styled } from '@mui/material/styles';
import MuiTableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const StripedTableRow = styled(TableRow, {
  shouldForwardProp: (prop) => {
    return prop !== 'striped';
  },
})<{ striped?: boolean }>(({ striped }) => {
  return {
    '&:nth-of-type(odd)': {
      backgroundColor: striped ? '#F9FCFF' : 'inherit',
    },
  };
});

type BodyProps<Type extends object> = {
  striped?: boolean;
  page: Row<Type>[];
  prepareRow: (row: Row<Type>) => void;
};

const Body = <Type extends object>(props: BodyProps<Type>): ReactElement => {
  const { striped, page, prepareRow } = props;

  return (
    <MuiTableBody>
      {page.map((row) => {
        prepareRow(row);
        const { key: rowKey, ...restRowProps } = row.getRowProps();

        return (
          <StripedTableRow {...restRowProps} key={rowKey} striped={striped}>
            {row.cells.map((cell) => {
              const { key: cellKey, ...restCellProps } = cell.getCellProps();

              return (
                <TableCell {...restCellProps} key={cellKey}>
                  {cell.render('Cell')}
                </TableCell>
              );
            })}
          </StripedTableRow>
        );
      })}
    </MuiTableBody>
  );
};

export default Body;
