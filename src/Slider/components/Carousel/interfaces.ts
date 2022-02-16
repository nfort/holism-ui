import { ReactNode, Ref } from 'react';

import { ISlide } from '../../interfaces';

export interface IProps {
  slides: ISlide[] | ReactNode;
  contentRef: Ref<HTMLDivElement>;
  currentPosition: number;
  contentWidth: number;
  sliderWidth: number;
  overlap?: number;
  isVisible?: boolean;

  onNextSlide: (isTouch: boolean) => void;
  onPrevSlide: (isTouch: boolean) => void;
}

export interface IStyles {
  isReactElement?: boolean;
  isActive?: boolean;
  slideShift?: number;
}

export type TSlideShift = 'positive' | 'negative';
