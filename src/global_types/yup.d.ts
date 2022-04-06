import type { BaseSchema } from 'yup';

type BaseOption = {
  required?: boolean;
};

type DateFormatOption = BaseOption & {
  format?: DateFormat;
};

type DateRangeOption = DateFormatOption & {
  parentName: string;
};

type FilesOption = BaseOption & {
  limit?: number;
  extensions?: string[];
};

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends BaseSchema<TType, TContext, TOut> {
    required(label: string): StringSchema<TType, TContext>;
    email(label: string, options?: BaseOption): StringSchema<TType, TContext>;
    dateFormat(label: string, options?: DateFormatOption): StringSchema<TType, TContext>;
    dateRange(label: string, options?: DateRangeOption): StringSchema<TType, TContext>;
  }

  interface ArraySchema<
    T extends AnySchema | Lazy<any, any>,
    C extends AnyObject = AnyObject,
    TIn extends Maybe<TypeOf<T>[]> = TypeOf<T>[] | undefined,
    TOut extends Maybe<Asserts<T>[]> = Asserts<T>[] | Optionals<TIn>
  > extends BaseSchema<TIn, C, TOut> {
    files(label: string, options?: FilesOption): ArraySchema<TIn, TOut>;
    duplicateFiles(fieldsToCompare: string[]): ArraySchema<TIn, TOut>;
  }
}
