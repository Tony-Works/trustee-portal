import type { ReactElement } from 'react';

import { useController } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MuiCheckbox from '@mui/material/Checkbox';

import { useMetaError } from 'hooks';

interface CheckboxProps {
  name: string;
  label?: string;
  helperText?: string;
  defaultValue?: boolean;
}

const Checkbox = (props: CheckboxProps): ReactElement => {
  const { name, helperText, label = '', defaultValue = false } = props;
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({ name, defaultValue });
  const { hasError, errorMessage } = useMetaError(fieldState);

  return (
    <FormControl component="fieldset" error={hasError}>
      <FormControlLabel
        label={label}
        control={
          <MuiCheckbox
            {...field}
            inputRef={ref}
            inputProps={{
              'aria-label': name,
            }}
            checked={field.value}
          />
        }
      />
      {(helperText || hasError) && (
        <FormHelperText>{hasError ? errorMessage : helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default Checkbox;
