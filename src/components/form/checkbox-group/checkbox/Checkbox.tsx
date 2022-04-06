import { forwardRef } from 'react';
import type { ReactElement, ChangeEvent } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';

interface CheckboxProps {
  label: string | ReactElement;
  checked?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref): ReactElement => {
    const { label, checked, value, onChange } = props;
    return (
      <FormControlLabel
        label={label}
        value={value}
        control={<MuiCheckbox inputRef={ref} checked={checked} onChange={onChange} />}
      />
    );
  }
);

export default Checkbox;
