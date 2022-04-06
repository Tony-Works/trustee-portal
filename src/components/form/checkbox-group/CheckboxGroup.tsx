import type { ChangeEvent, ReactElement } from 'react';

import { xor } from 'lodash';
import { useController } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';

import { useMetaError } from 'hooks';

import { getOption } from '../utils';

import Checkbox from './checkbox';

interface CheckboxGroupProps<Type> {
  name: string;
  row?: boolean;
  label?: string;
  helperText?: string;
  defaultValue?: string[];
  options: Type[];
  optionLabelKey?: keyof Type | 'label';
  optionValueKey?: keyof Type | 'value';
}

const CheckboxGroup = <Type extends object>(
  props: CheckboxGroupProps<Type>
): ReactElement => {
  const {
    name,
    label,
    row,
    helperText,
    defaultValue = [],
    options,
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    field.onChange({
      target: {
        name: field.name,
        value: xor(field.value, [event.target.value]),
      },
    });
  };

  return (
    <FormControl component="fieldset" error={hasError}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup row={row}>
        {options.map((option) => {
          return (
            <Checkbox
              key={getOptionValue(option)}
              ref={ref}
              checked={field.value.includes(getOptionValue(option))}
              label={getOptionLabel(option)}
              value={getOptionValue(option)}
              onChange={handleChange}
            />
          );
        })}
      </FormGroup>
      {(helperText || hasError) && (
        <FormHelperText>{hasError ? errorMessage : helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default CheckboxGroup;
