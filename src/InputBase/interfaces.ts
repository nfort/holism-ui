import { MouseEvent, ReactNode, ReactChild } from "react";

import { TPosition } from "../Tooltip/interfaces";
import { ITheme } from "../Palette/variables";

export type TDimension = "small" | "medium" | "large";
export type TType = "text" | "password" | "tel" | "number" | "date" | "file" | "email" | "url" | "search";
export type TAlignText = "left" | "right" | "center";

export interface IInputBase {
  type: TType;
  dimension: TDimension;
  alignText: TAlignText;
  error?: string | boolean;
  placeholder?: string;
  tooltipContent?: string | ReactNode;
  tooltipPosition: TPosition;
  title?: string;
  icon?: ReactNode;
  iconPosition?: IIconPosition;
  isCardChecking?: boolean;
  onIconClick?: () => void;
  className?: string;
  children?: ReactChild;
  isDisabled?: boolean;
  isShowClearIcon?: boolean;
  isShowMask?: boolean;
}

export interface ISharedInputBase extends IInputBase {
  isFocused: boolean;
  isHidePlaceholderMaskOnType?: boolean;
  isPasswordVisible: boolean;
  placeholderMask?: string;
  isHasValue: boolean;
  onClear?: (event: MouseEvent<HTMLDivElement>) => void;
  onPasswordToggle?: () => void;
  testID?: string;
  isReadOnly?: boolean;
  isSuccess?: boolean;
  isTextArea?: boolean;
  onInputAreaClick?: () => void;
}

export interface IIconsBox {
  isHasValue: boolean;
  isDisabled?: boolean;
  isSuccess?: boolean;
  type: TType;
  isPasswordVisible: boolean;
  tooltipContent?: string | ReactNode;
  tooltipPosition: TPosition;
  isShowClearIcon?: boolean;
  onClear?: (event: MouseEvent<HTMLDivElement>) => void;
  onPasswordToggle?: () => void;
  testID?: string;
  error?: string | boolean;
  isTextArea?: boolean;
  dimension?: TDimension;
}

export interface IInput {
  theme: ITheme;
}

export interface IWrapper extends IInput {
  isDisabled?: boolean;
  isFocused?: boolean;
  dimension: TDimension;
  alignText: TAlignText;
  isTextArea?: boolean;
}

export interface IInputComponent extends IInput {
  dimension: TDimension;
  isFocused: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isSuccess?: boolean;
  isTextArea?: boolean;
  error?: string | boolean;
}

export interface IPlaceholder extends IInput {
  dimension: TDimension;
  isHasValue: boolean;
  isFocused: boolean;
  isDisabled?: boolean;
  isSuccess?: boolean;
  error?: string | boolean;
}

export interface IStylesInput extends IInput {
  iconPosition?: IIconPosition;
  isIconOnClick?: boolean;
  isFocused?: boolean;
  isSuccess?: boolean;
  dimension?: TDimension;
  error?: string | boolean;
}

export type IIconPosition = "left" | "right";

export interface IIconBoxStyledProps {
  isTextArea?: boolean;
  dimension?: TDimension;
}
