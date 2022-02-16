import { ReactNode } from 'react';

export interface IProps {
  slides: ISlide[] | ReactNode;
  overlap?: number;
  slideDuration?: number;
  withControls?: boolean;
  isAutoSwitching?: boolean;
  isLoop?: boolean;
  isMobile?: boolean;
  isOnAllScreen?: boolean;
  isAnimated?: boolean;
  isAutoFocus?: boolean;
  currentValue?: number;
  onChange?: (value: number) => void;
}

export interface ISlide {
  id: number;
  url: string;
}

export interface IStyles {
  isOnAllScreen?: boolean;
}

export type Timeout = ReturnType<typeof setInterval>;
