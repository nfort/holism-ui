import { ReactNode } from 'react';
import { InnerRef } from 'react-select/src/types';

export interface IMenu {
  inputRef?: InnerRef;
  innerProps: any;
  isDisabled: boolean;
  isFocused: boolean;
  selectProps: {
    [props: string]: any;
  };
  children: ReactNode;
}
