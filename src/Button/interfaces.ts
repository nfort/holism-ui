import { ReactNode, MouseEvent } from "react";

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
export type TButtonTypes = "button" | "reset" | "submit";

export interface IProps {
  id?: string;
  color: TButtonColors;
  dimension: TButtonDimensions;
  type: TButtonTypes;
  width?: string;
  isWithIcon?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>, id?: string) => void;
  children: ReactNode;
  className?: string;
  testID?: string;
}
