import { ITheme } from "../Palette/variables";
import { ReactElement } from "react";

type TType = "input" | "select";

export interface IReadOnly {
  type?: TType;
  prefix?: ReactElement;
  selectTypeDescription?: string;
  children: ReactElement[] | ReactElement;
  tooltip?: ReactElement;
}

export interface IReadOnlyPlaceholder {
  type?: TType;
  placeholder: string | ReactElement;
}

export interface IReadOnlyDescription {
  type?: TType;
  text: string | ReactElement;
}

export interface IReadOnlyValue {
  type?: TType;
  value: string | ReactElement;
}

export interface IReadOnlyContentTitle {
  suffix?: string | ReactElement;
  children: string | ReactElement | ReactElement[];
}

export interface IReadOnlyStyle {
  type?: TType;
  theme: ITheme;
  isSelectDescription?: boolean;
}
