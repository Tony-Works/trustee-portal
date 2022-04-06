import type { ReactElement } from 'react';

import { useController } from 'react-hook-form';
import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { useMetaError } from 'hooks';

import { getOption } from '../utils';

interface AutocompleteProps<Type> {
  name: string;
  label?: string;
  multiple: boolean;
  helperText?: string;
  placeholder?: string;
  options: Type[];
  disableCloseOnSelect: boolean;
  defaultValue?: string | string[];
  optionValueKey?: keyof Type | 'value';
  optionLabelKey?: keyof Type | 'label';
}

const Autocomplete = <Type extends object>(
  props: AutocompleteProps<Type>
): ReactElement => {
  const {
    name,
    options,
    multiple,
    helperText,
    defaultValue = '',
    optionLabelKey = 'label',
    disableCloseOnSelect = true,
    placeholder = 'Please Select',
  } = props;
  const {
    field: { ref, ...field },
    fieldState,
  } = useController({
    name,
    defaultValue: multiple ? [] : defaultValue,
  });
  const { hasError, errorMessage } = useMetaError(fieldState);

  const getOptionLabel = getOption<Type>(optionLabelKey);

  return (
    <MuiAutocomplete
      {...field}
      disableCloseOnSelect={disableCloseOnSelect}
      multiple={multiple}
      options={options}
      getOptionLabel={(option) => {
        return getOptionLabel(option);
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            inputRef={ref}
            error={hasError}
            placeholder={placeholder}
            helperText={hasError ? errorMessage : helperText}
          />
        );
      }}
    />
  );
};

export default Autocomplete;
