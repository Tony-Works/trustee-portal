import type { ReactElement } from 'react';

import Typography from '@mui/material/Typography';

type DefinitionItemProps = PropsWithChildren<{
  term?: string;
}>;

const DefinitionItem = (props: DefinitionItemProps): ReactElement => {
  const { term, children } = props;

  return (
    <>
      <Typography component="dt" variant="caption" color="textSecondary">
        {term}
      </Typography>
      <Typography component="dd" aria-label={term} fontWeight="fontWeightMedium">
        {children}
      </Typography>
    </>
  );
};

export default DefinitionItem;
