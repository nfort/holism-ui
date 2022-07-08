import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, RefObject } from "react";

import { IInputBase } from "../InputBase/interfaces";

export type TInputMode = "text" | "none" | "search" | "tel" | "url" | "email" | "numeric" | "decimal";

export interface IProps extends IInputBase {
  value?: string | Date;
  isMultiLine?: boolean;
  isAutoFill?: boolean;
  id?: string;
  isAutoFocus?: boolean;
  isAutoSelect?: boolean;
  name?: string;
  onChange: (event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLDivElement>, value: string, id?: string) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>, value: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  getRefProp?: (ref: RefObject<HTMLInputElement>) => void;
  maxLength?: number;
  inputMode?: TInputMode;
  pattern?: string;
  testID?: string;
  isSuccess?: boolean;
}

export interface IShared {
  id?: string;
  maxLength?: number;
  disabled?: boolean;
  name?: string;
  autoFocus?: boolean;
  value: string;
  inputMode?: TInputMode;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  pattern?: string;
}
