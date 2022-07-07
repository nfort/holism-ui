import { ReactNode } from "react";

export type TTrigger = "click" | "mouseenter" | "focus" | "manual" | string;

import { ITheme } from "../Palette/variables";

export interface ITippy {
  $componentTheme: ITheme;
  $isTextArea?: boolean;
}

export type TPosition =
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
  children: ReactNode;
  title: string | ReactNode;
  position: TPosition;
  isDelay?: boolean;
  isDisabled?: boolean;
  appendTo: "parent" | Element | ((ref: Element) => Element);
  className?: string;
  trigger?: TTrigger;
  interactive?: boolean;
  isTextArea?: boolean;
}
