import { ITheme } from "../../../../../Palette/variables";

export interface IProps {
  isActive: boolean;
  isAnimated?: boolean;
  animationDuration?: number;
  dotIndex: number;
  onSetActive: (dotIndex: number) => void;
}

export interface IStyles {
  theme: ITheme;
  isActive?: boolean;
  isAnimated?: boolean;
  animationDuration?: number;
  progress?: number;
}
