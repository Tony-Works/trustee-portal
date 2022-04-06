import type { ReactElement } from 'react';

import { useController } from 'react-hook-form';
import MuiTextField from '@mui/material/TextField';

import { useMetaError } from 'hooks';

interface TextFieldProps {
  name: string;
  label?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  helperText?: string;
  placeholder?: string;
  defaultValue?: string;
}

const TextField = (props: TextFieldProps): ReactElement => {
  const {
    name,
    label,
    helperText,
    type = 'text',
    placeholder = 'Please Select',
    defaultValue = '',
  } = props;
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({ name, defaultValue });
  const { hasError, errorMessage } = useMetaError(fieldState);

  return (
    <MuiTextField
      {...field}
      id={name}
      inputRef={ref}
      label={label}
      type={type}
      placeholder={placeholder}
      error={hasError}
      helperText={hasError ? errorMessage : helperText}
    />
  );
};

export default TextField;
