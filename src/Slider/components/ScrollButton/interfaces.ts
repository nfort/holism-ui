import { ITheme } from '../../../Palette/variables';

export interface IProps {
  direction: EDirection;
  isOnAllScreen?: boolean;
  isVisible: boolean;

  onPress: (direction: EDirection) => void;
}

export enum EDirection {
  left,
  right,
}

export interface IStyles {
  theme: ITheme;
  direction?: EDirection;
  isOnAllScreen?: boolean;
  type?: string;
}
