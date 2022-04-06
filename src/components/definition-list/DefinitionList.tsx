import type { ReactElement } from 'react';

import flattenChildren from 'react-keyed-flatten-children';
import Grid from '@mui/material/Grid';

type DefinitionListProps = PropsWithChildren<{
  xs?: number;
  spacing?: number;
}>;

const DefinitionList = (props: DefinitionListProps): ReactElement => {
  const { xs = 3, spacing = 2, children } = props;

  return (
    <Grid container component="dl" spacing={spacing}>
      {flattenChildren(children).map((child, index) => {
        return (
          <Grid item key={index} xs={xs}>
            {child}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DefinitionList;
