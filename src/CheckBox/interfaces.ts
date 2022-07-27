import { ChangeEvent, ReactElement, ReactNode } from "react";

import { TPosition } from "../Tooltip/interfaces";

export type TDimension = "small" | "medium";
export type TGroupItem = Omit<IProps, "onChange">;

export interface IProps {
  id?: string;
  value?: string;
  label?: string;
  isChecked: boolean;
  isDisabled?: boolean;
  isPartChecked?: boolean;
  dimension?: TDimension;
  isError?: boolean;
  labelComponent?: ReactElement;
  onChange: (event: any, isChecked: boolean, id?: string) => void;
  tooltipContent?: string | ReactNode;
  tooltipPosition?: TPosition;
  children?: ReactNode;
  className?: string;
}

export interface IPropsGroup {
  dimension?: TDimension;
  isDisabled?: boolean;
  isError?: boolean;
  list: TGroupItem[];
  onChange: (event: ChangeEvent, list: TGroupItem[]) => void;
  className?: string;
}

export interface IPropsCompGroup {
  label?: string;
  list: TGroupItem[];
  dimension?: TDimension;
  isDisabled?: boolean;
  isError?: boolean;
  isCanHideItems?: boolean;
  onChange: (event: ChangeEvent, list: TGroupItem[]) => void;
  tooltipContent?: string | ReactElement;
  tooltipPosition?: TPosition;
  className?: string;
}
