import type { ReactElement } from 'react';

import type { UseFormReturn, SubmitHandler } from 'react-hook-form';

import { FormProvider } from 'react-hook-form';

import Autocomplete from './autocomplete';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import RadioGroup from './radio-group';
import Select from './select';
import TextField from './text-field';
import DatePicker from './date-picker';
import Dropzone from './dropzone';

interface FormProps<Type> extends PropsWithChildren<UseFormReturn<Type>> {
  onSubmit: SubmitHandler<Type>;
}

const Form = <Type extends object>(props: FormProps<Type>): ReactElement => {
  const { onSubmit, children, ...formMethods } = props;

  return (
    <FormProvider<Type> {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

Form.Autocomplete = Autocomplete;
Form.Checkbox = Checkbox;
Form.CheckboxGroup = CheckboxGroup;
Form.RadioGroup = RadioGroup;
Form.Select = Select;
Form.TextField = TextField;
Form.DatePicker = DatePicker;
Form.Dropzone = Dropzone;

export default Form;
