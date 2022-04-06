import type { ReactElement } from 'react';

import { useController } from 'react-hook-form';
import MuiTextField from '@mui/material/TextField';

interface TextFieldProps {
  name: string;
  label?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  placeholder?: string;
  defaultValue?: string;
}

const TextField = (props: TextFieldProps): ReactElement => {
  const {
    name,
    label,
    type = 'text',
    placeholder = 'Please Input',
    defaultValue = '',
  } = props;
  const {
    field: { ref, ...field },
  } = useController({ name, defaultValue });

  return (
    <MuiTextField
      {...field}
      id={name}
      inputRef={ref}
      label={label}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default TextField;
