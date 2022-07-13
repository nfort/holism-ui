import { ReactNode } from "react";
import { ValueContainer as ValueContainerInterface } from "react-select/src/components/containers";

export interface IValueContainer extends ValueContainerInterface {
  selectProps: {
    dimension: any;
  };
  children: ReactNode;
}
