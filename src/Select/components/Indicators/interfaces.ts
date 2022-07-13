import { ReactNode, RefObject } from 'react';

export interface IIndicatorContainer {
  getStyles: any;
  innerProps: {
    ref: RefObject<any>;
    [prop: string]: any;
  };
  children: ReactNode;
}
