import type { ReactElement } from 'react';

import Typography from '@mui/material/Typography';

type PageTitleProps = PropsWithChildren;

const PageTitle = (props: PageTitleProps): ReactElement => {
  const { children } = props;

  return (
    <Typography variant="h4" color="primary">
      {children}
    </Typography>
  );
};

export default PageTitle;
