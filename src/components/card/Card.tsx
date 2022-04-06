import type { ReactElement, ReactNode } from 'react';
import type { SxProps } from '@mui/system';

import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import MuiCardHeader from '@mui/material/CardHeader';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardActions from '@mui/material/CardActions';

const CardHeader = styled(MuiCardHeader)(({ theme }) => {
  return {
    color: theme.palette.primary.main,
  };
});

const CardActions = styled(MuiCardActions)({
  padding: '1rem',
  justifyContent: 'flex-end',
});

type CardProps = {
  sx?: SxProps;
  title?: string;
  action?: ReactNode;
  children: ReactNode;
};

const Card = (props: CardProps): ReactElement => {
  const { sx, title, action, children } = props;

  return (
    <MuiCard sx={sx}>
      <CardHeader title={title} action={action} />
      <MuiCardContent>{children}</MuiCardContent>
    </MuiCard>
  );
};

Card.Footer = CardActions;

export default Card;
