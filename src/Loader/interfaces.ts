export type TDimension = "small" | "medium" | "large";

export interface IProps {
  dimension: TDimension;
  color?: string;
  background?: string;
  center?: boolean;
  className?: string;
}
