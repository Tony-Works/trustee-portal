import type { ReactElement } from 'react';
import type { CellValue } from 'react-table';

import { toString } from 'lodash';
import Box from '@mui/material/Box';

type DefaultCellProps = {
  value: CellValue;
  state: {
    globalFilter: string;
  };
};

const DefaultCell = ({ value, state }: DefaultCellProps): ReactElement => {
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: toString(value).replace(new RegExp(state.globalFilter, 'gi'), (match) => {
          return `<mark>${match}</mark>`;
        }),
      }}
    />
  );
};

export default DefaultCell;
