import { ReactElement, ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from "react";

import { ITheme } from "../Palette/variables";

export type TDimension = "small" | "medium" | "large";

type TPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end"
  | "auto"
  | "auto-start"
  | "auto-end";

export interface IProps {
  dimension?: TDimension;
  autoFocus?: boolean;
  error?: string | boolean;
  isClearable?: boolean;
  isDisabled?: boolean;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement> | MouseEvent<HTMLDivElement>, value: string) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onResize?: () => void;
  placeholder?: string;
  tooltipContent?: string | ReactElement | HTMLElement;
  tooltipPosition?: TPosition;
  value?: string;
  maxLength?: number;
  icon?: any;
  title?: string;
  minRows?: number;
  maxRows?: number;
  className?: string;
  theme: ITheme;
}

export interface IShared {
  maxLength?: number;
  isDisabled?: boolean;
  disabled?: boolean;
  name?: string;
  autoFocus?: boolean;
  value: string | any;
  maxRows?: number;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
}

// интерфейсы для стилей
export interface IDimension {
  dimension?: TDimension;
  theme: ITheme;
}

export interface IStyleProps extends IDimension {
  isFocused: boolean;
  isDisabled?: boolean;
}

export interface IStylePropsError extends IDimension {
  isFocused: boolean;
  error?: string | boolean;
  isDisabled?: boolean;
}

export interface IPlaceholder extends IDimension {
  error?: string | boolean;
  isFocused: boolean;
  isDisabled?: boolean;
  isHasValue: boolean;
}

// Ненативное свойство isDisabled, нативное свойство disabled
// disabled нужен для передачи  нативный html element textarea
// поэтому небольшой костыль
export interface IWrapper extends IDimension {
  isDisabled?: boolean;
  isClearable?: boolean;
  disabled?: boolean;
}
