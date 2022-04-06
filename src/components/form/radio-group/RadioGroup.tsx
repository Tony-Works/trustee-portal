import type { ReactElement } from 'react';

import { useController } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MuiRadioGroup from '@mui/material/RadioGroup';

import { useMetaError } from 'hooks';

import { getOption } from '../utils';

import Radio from './radio';

interface RadioGroupProps<Type> {
  name: string;
  row?: boolean;
  label?: string;
  helperText?: string;
  defaultValue?: string;
  options: Type[];
  optionValueKey?: keyof Type | 'value';
  optionLabelKey?: keyof Type | 'label';
}

const RadioGroup = <Type extends object>(props: RadioGroupProps<Type>): ReactElement => {
  const {
    name,
    label,
    options,
    helperText,
    row = true,
    defaultValue = '',
    optionValueKey = 'value',
    optionLabelKey = 'label',
  } = props;
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({ name, defaultValue });
  const { hasError, errorMessage } = useMetaError(fieldState);

  const getOptionValue = getOption<Type>(optionValueKey);
  const getOptionLabel = getOption<Type>(optionLabelKey);

  return (
    <FormControl component="fieldset" error={hasError}>
      <FormLabel component="legend">{label}</FormLabel>
      <MuiRadioGroup {...field} row={row}>
        {options.map((option) => {
          return (
            <Radio
              key={getOptionValue(option)}
              ref={ref}
              value={getOptionValue(option)}
              label={getOptionLabel(option)}
            />
          );
        })}
      </MuiRadioGroup>
      {helperText || hasError ? (
        <FormHelperText>{hasError ? errorMessage : helperText}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default RadioGroup;
