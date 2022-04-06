import { get, defaultTo } from 'lodash';

export const getOption = <Type extends object>(
  path: keyof Type | 'value' | 'label'
): ((option: Type) => string) => {
  return (option: Type) => {
    return defaultTo(get(option, path), '');
  };
};
