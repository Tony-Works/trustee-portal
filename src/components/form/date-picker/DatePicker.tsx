import type { ReactElement } from 'react';

import type { InputProps as MuiInputProps } from '@mui/material';
import type { Moment } from 'moment';

import { useController } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MuiDesktopDatePicker from '@mui/lab/DesktopDatePicker';

interface InputProps extends MuiInputProps {
  'data-testid': string;
}

type DateFormat = 'MM/DD/YYYY' | 'YYYY/MM/DD';

interface DatePickerProps {
  name: string;
  mask?: string;
  label?: string;
  helperText?: string;
  format?: DateFormat;
  defaultValue?: string | null;
  maxDate?: Moment;
  minDate?: Moment;
}

const DatePicker = (props: DatePickerProps): ReactElement => {
  const {
    name,
    label,
    mask = '__/__/____',
    format = 'MM/DD/YYYY',
    helperText,
    defaultValue = null,
    maxDate,
    minDate,
  } = props;
  const {
    field: { ref, ...field },
  } = useController({ name, defaultValue });

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MuiDesktopDatePicker
        {...field}
        label={label}
        inputRef={ref}
        inputFormat={format}
        mask={mask}
        maxDate={maxDate}
        minDate={minDate}
        InputProps={
          {
            'data-testid': name,
          } as InputProps
        }
        renderInput={(params) => {
          return <TextField {...params} helperText={helperText} />;
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
