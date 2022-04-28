import React, { ReactNode } from 'react';

import { ITheme } from '../../Palette/variables';

export interface IModalWindowProps {
  modalRootName: string;
  maxWidthStyle?: string;
  isOpen: boolean;
  isMobile: boolean;
  animationDuration?: number;
  onClickOutside?: () => void;
  children?: ReactNode;
  className?: string;
}

export interface IModalRootProps {
  modalRootName: string;
}

export enum EAnimationType {
  No,
  In,
  Out,
}

export interface IAnimationStyle {
  animationType: EAnimationType;
}

export interface IHeaderProps {
  isSticky?: boolean;
  title?: string;
  onClickIconInHeader: () => void;
  icon?: ReactNode;
  padding?: string;
  className?: string;
}

type TJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type TAlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch'
  | 'unset'
  | 'initial'
  | 'inherit';

export interface IContentProps {
  isLoading?: boolean;
  children?: ReactNode;
  padding?: string;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  className?: string;
}

export interface IFooterProps {
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  padding?: string;
  isWithActions?: boolean;
  isLoading?: boolean;
  isSticky?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
}

export interface IModalContentStyle extends IAnimationStyle {
  padding?: string;
  marginTopBottom?: string;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
}

export interface IBaseProps {
  theme: ITheme;
  isMobile?: boolean;
  isLoading?: boolean;
  maxWidthStyle?: string;
  isUseHeightIE11?: boolean;
}

export interface IAnimationBlockProps extends Partial<IBaseProps> {
  animationDuration: number;
}

export interface IModalContext {
  isMobile: boolean;
  isOpen: boolean;
  modalOverlayRef: React.RefObject<HTMLDivElement> | null;
}

export interface IHeaderStyle extends Partial<IHeaderProps> {
  theme: ITheme;
}

export interface IFootersStyle extends Partial<IFooterProps> {
  isMobile: boolean;
  theme: ITheme;
}
