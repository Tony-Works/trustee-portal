import type { ReactNode, Ref, ReactElement } from 'react';
import type { TransitionProps } from '@mui/material/transitions/transition';

import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(
  (transitionProps: TransitionProps & { children: ReactElement }, ref: Ref<unknown>) => {
    const { in: slideIn, children } = transitionProps;

    return (
      <Slide direction="up" ref={ref} in={slideIn}>
        {children}
      </Slide>
    );
  }
);

const DialogTitle = styled(MuiDialogTitle)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  };
});

const DialogActions = styled(MuiDialogActions)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(3, 2),
  };
});

type ModalProps = {
  open: boolean;
  title?: string;
  maxWidth?: 'sm' | 'md' | 'lg';
  dividers?: boolean;
  onClose?: () => void;
  onEnter?: () => void;
  onExited?: () => void;
  actions?: ReactNode;
  children: ReactNode;
};

const Modal = (props: ModalProps): ReactElement => {
  const {
    open,
    title,
    dividers,
    actions,
    children,
    maxWidth = 'sm',
    onClose,
    onEnter,
    onExited,
  } = props;

  return (
    <Dialog
      TransitionComponent={Transition}
      TransitionProps={{
        onEnter,
        onExited,
      }}
      maxWidth={maxWidth}
      keepMounted={false}
      fullWidth
      open={open}
      onClose={onClose}>
      {title ? (
        <DialogTitle>
          {title}
          <IconButton color="inherit" edge="end" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      ) : null}
      <DialogContent dividers={dividers}>{children}</DialogContent>
      {actions}
    </Dialog>
  );
};

Modal.Actions = DialogActions;

export default Modal;
