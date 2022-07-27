import React, { ComponentElement } from "react";

export type TButtonDimensions = "xsmall" | "small" | "medium" | "large";
export type TButtonColors =
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger"
  | "danger-secondary"
  | "success"
  | "success-secondary"
  | "white";

export interface IButton {
  label: string;
  callback?: () => void;
  color?: TButtonColors;
  dimension?: TButtonDimensions;
}

export interface INotification {
  id?: string;
  title?: string;
  emojiIcon: string;
  type: "default" | "info" | "success" | "warning" | "error";
  message: string | React.ComponentElement<any, any>;
  lifetime?: number;
  isInfinite?: boolean;
  btn1?: IButton;
  btn2?: IButton;
  isCloseClickInside?: boolean;
  className?: string;
}

export interface IProps {
  type: "default" | "info" | "success" | "warning" | "error";
  emojiIcon: string;
  title?: string;
  message: string | ComponentElement<any, any>;
  onRequestHide: () => void;
  lifetime?: number;
  isInfinite?: boolean;
  isCloseClickInside?: boolean;
  btn1?: IButton;
  btn2?: IButton;
  className?: string;
}
