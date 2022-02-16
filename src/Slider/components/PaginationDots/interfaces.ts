export interface IProps {
  controlItemsLength: number;
  currentPosition: number;
  slideDuration: number;
  animationDuration: number;

  isVisible: boolean;
  isMobile?: boolean;
  isAnimated?: boolean;
  isOnAllScreen?: boolean;

  setCurrentPosition: (position: number) => void;
}

export interface IPaginationDot {
  dotIndex: number;
  animationDuration?: number;

  isActive: boolean;
  isAnimated?: boolean;
}

export interface IStyles {
  isOnAllScreen?: boolean;
}
