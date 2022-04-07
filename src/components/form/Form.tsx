import type { ReactElement, ReactNode } from "react";

import type { UseFormReturn, SubmitHandler } from "react-hook-form";

import { FormProvider } from "react-hook-form";

import TextField from "./text-field";
import DatePicker from "./date-picker";

export type PropsWithChildren<T = object> = T & {
  children?: ReactNode;
};
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

Form.TextField = TextField;
Form.DatePicker = DatePicker;

export default Form;
