import { ReactNode, RefObject } from "react";

export interface IOptimizeMenuList {
  children: ReactNode;
  isFocused: boolean;
  innerRef: RefObject<ReactNode>;
  selectProps: any;
}

export interface IOptimizeMenuItem {
  text: ReactNode;
  index: number;
  sizeMap: object;
  onSetSize: (index: number, size: number | null) => void;
}
