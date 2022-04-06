import type { ReactNode } from 'react';

import type { AxiosError } from 'axios';

declare global {
  export type DateFormat = 'MM/DD/YYYY' | 'YYYY/MM/DD' | 'DD/MM/YYYY';

  export type PropsWithChildren<T = object> = T & {
    children?: ReactNode;
  };

  export type ResponseErrorFrom200 = {
    errorCode: number;
    errorMessage: string;
  };

  export type ResponseError = Error & ResponseErrorFrom200;

  export type ApiError = AxiosError<ResponseError>;
}
