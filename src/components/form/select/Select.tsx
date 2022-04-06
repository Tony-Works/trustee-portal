import type { ReactElement, ReactNode } from 'react';

import { keyBy } from 'lodash';
import { useController } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MuiSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useMetaError } from 'hooks';

import { getOption } from '../utils';

const Placeholder = styled(MenuItem)({
  height: '1.4375rem',
  padding: '0.25rem 0 0.3125rem 0',
});

const MultipleSelectedContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

const CustomSelectedContainer = styled(Box)({
  height: '1.5rem',
  padding: '0.25rem 0.5rem',
  backgroundColor: '#f5f5f5',
  border: '1px solid #f0f0f0',
  borderRadius: '0.5rem',
});

interface SelectProps<Type> {
  name: string;
  label?: string;
  multiple?: boolean;
  helperText?: string;
  placeholder?: string;
  options?: Type[];
  defaultValue?: string | string[];
  optionValueKey?: keyof Type | 'value';
  optionLabelKey?: keyof Type | 'label';
  isDisabled?: boolean;
}

const Select = <Type extends object>(props: SelectProps<Type>): ReactElement => {
  const {
    name,
    label,
    multiple,
    helperText,
    options = [],
    defaultValue = '',
    optionValueKey = 'value',
    optionLabelKey = 'label',
    placeholder = 'Please Select',
    isDisabled,
  } = props;

  const {
    field: { ref, ...field },
    fieldState,
  } = useController({ name, defaultValue: multiple ? [] : defaultValue });
  const { hasError, errorMessage } = useMetaError(fieldState);

  const getOptionValue = getOption<Type>(optionValueKey);
  const getOptionLabel = getOption<Type>(optionLabelKey);

  const renderSelectIcon = (): ReactElement => {
    return <ExpandMoreIcon />;
  };

  const renderSelectValue = (selected: string | string[]): ReactNode => {
    if (!selected || !(selected as string[]).length) {
      return (
        <Placeholder disabled>
          <em>{placeholder}</em>
        </Placeholder>
      );
    }

    if (multiple) {
      const selectedItems = selected as string[];

      return (
        <MultipleSelectedContainer>
          {selectedItems.map((item) => {
            return (
              <CustomSelectedContainer key={item}>
                {getOptionLabel(keyBy(options, getOptionValue)[item])}
              </CustomSelectedContainer>
            );
          })}
        </MultipleSelectedContainer>
      );
    }

    return getOptionLabel(keyBy(options, getOptionValue)[selected as string]);
  };

  const renderNoneOption = (): ReactNode => {
    if (multiple) return null;

    return (
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
    );
  };

  const renderOptions = (): ReactNode[] => {
    return options.map((option) => {
      return (
        <MenuItem key={getOptionValue(option)} value={getOptionValue(option)}>
          {getOptionLabel(option)}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl error={hasError} fullWidth>
      <InputLabel id={name}>{label}</InputLabel>
      <MuiSelect
        {...field}
        displayEmpty
        id={name}
        inputRef={ref}
        multiple={multiple}
        labelId={name}
        IconComponent={renderSelectIcon}
        renderValue={renderSelectValue}
        disabled={isDisabled}>
        {renderNoneOption()}
        {renderOptions()}
      </MuiSelect>
      {(helperText || hasError) && (
        <FormHelperText>{hasError ? errorMessage : helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default Select;
