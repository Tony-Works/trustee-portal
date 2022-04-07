import type { ReactElement, ReactNode } from "react";

import Typography from "@mui/material/Typography";

type PropsWithChildren<T = object> = T & {
  children?: ReactNode;
};

type PageTitleProps = PropsWithChildren;

const PageTitle = (props: PageTitleProps): ReactElement => {
  const { children } = props;

  return (
    <Typography variant="h4" color="primary" textTransform="uppercase">
      {children}
    </Typography>
  );
};

export default PageTitle;
