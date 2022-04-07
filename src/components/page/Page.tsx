import { styled } from '@mui/material/styles';

import type { ReactNode, ReactElement } from 'react';

type PropsWithChildren<T = object> = T & {
  children?: ReactNode;
};

type PageProps = PropsWithChildren;

const Main = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
}));

const Page = (props: PageProps): ReactElement => {
  const { children } = props;

  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

export default Page;
