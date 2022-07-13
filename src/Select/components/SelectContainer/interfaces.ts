import { ReactNode } from "react";
import { OptionTypeBase } from "react-select";
import { ContainerProps } from "react-select/src/components/containers";

/* @ts-ignore */
export interface ISelectComponent extends ContainerProps<OptionTypeBase, boolean> {
  hasValue: boolean;
  isFocused: boolean;
  selectProps: {
    dimension: any;
    width: string;
    className: string;
    menuIsOpen: boolean;
    isError: boolean;
    isDisabled: boolean;
    isMobile: boolean;
    errorMessage: any;
    placeholder: any;
    label: string | number | null;
    name: string;
  };
  children: ReactNode;
}
