import { RefObject } from "react";

import { ITheme } from "../../../Palette/variables";
import { TDimension } from "../../interfaces";

export interface ITextAreaProps {
  getrefprop?: (ref: RefObject<HTMLTextAreaElement>) => void;
  maxRows?: number;
  iconsoffset: number;
  dimension?: TDimension;
  theme?: ITheme;
}
