import { ReactNode, MouseEvent } from "react";

import { ITheme } from "../Palette/variables";
import { TButtonColors, TButtonDimensions, TButtonTypes } from "../Button/interfaces";

export interface IProps {
  id?: string;
  icon: ReactNode;
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent, id?: string) => void;
  type?: TButtonTypes;
  testID?: string;
  className?: string;
}

export interface IBabyButtonHardCodedProps {
  width: string;
  dimension: TButtonDimensions;
  color: TButtonColors;
  isWithIcon: boolean;
}

export interface IBabyButtonStyle extends Partial<IProps> {
  theme: ITheme;
}
