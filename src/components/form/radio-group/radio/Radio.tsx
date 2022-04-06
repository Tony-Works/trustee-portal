import { forwardRef } from 'react';
import type { ReactElement } from 'react';

import { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiRadio from '@mui/material/Radio';

interface RadioProps extends PropsWithChildren {
  label: string;
  value: string;
}

const Radio = forwardRef((props: RadioProps, ref): ReactElement => {
  const radioGroup = useRadioGroup();
  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return (
    <FormControlLabel
      {...props}
      control={<MuiRadio inputRef={ref} checked={checked} />}
    />
  );
});

export default Radio;
