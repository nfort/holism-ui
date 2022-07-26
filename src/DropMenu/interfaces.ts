import { ReactNode, MouseEvent } from "react";

import { ITheme } from "../Palette/variables";

export type TPosition =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"
  | "auto"
  | "auto-start"
  | "auto-end";

export type TTrigger = "click" | "mouseenter" | "focus" | "manual" | string;

export interface IItem {
  label: string | number;
  id: string | number;
  isDisabled?: boolean;
  elementsDataName?: string;
}

export interface IProps {
  id?: string;
  options: IItem[];
  placement?: TPosition;
  trigger?: TTrigger;
  isDisabled?: boolean;
  appendTo: "parent" | Element | ((ref: Element) => Element);
  width?: string;
  delay?: number | [number | null, number | null];
  children: ReactNode;
  onClick?: (id: string, event: MouseEvent<HTMLElement>) => void;
  onShown?: () => void;
  onHidden?: () => void;
  onShow?: () => void;
  onHide?: () => void;
  className?: string;
}

export interface IStylesProps {
  theme: ITheme;
}

export interface IDropMenu extends Partial<IProps> {
  theme: ITheme;
}

export interface ITippy {
  $componentTheme: ITheme;
}

export interface IMenuItem extends Partial<IItem> {
  theme: ITheme;
}
