import styled, { css, createGlobalStyle } from 'styled-components';
import { DefaultTheme, MEDIA, MediaQuery } from "../Palette/export"
import { H1 } from '../Typography/Typography';
import { rgba } from 'polished';

import {
  IAnimationBlockProps,
  IBaseProps,
  IHeaderStyle,
  IFootersStyle,
  EAnimationType,
  IAnimationStyle,
  IModalContentStyle,
} from './utils/interfaces';
import { fadeIn, toTop, changeIn, changeOut } from './utils/animations';

const getAnimationStyle = (animationType: EAnimationType) => {
  switch (animationType) {
    case EAnimationType.In:
      return css`
        animation: ${changeIn} 200ms ease-in-out;
        animation-fill-mode: forwards;
      `;
    case EAnimationType.Out:
      return css`
        animation: ${changeOut} 200ms ease-in-out;
      `;
    default:
      return null;
  }
};

export const GlobalBodyOverflowHiddenStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ModalOverlay = styled.div<IAnimationBlockProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: scroll;
  ${({ theme }: IBaseProps) => css`
    background: ${rgba(theme.colors.plumbum, 0.9)};
  `}
  ${({ animationDuration }: IAnimationBlockProps) => css`
    animation: ${fadeIn} ${animationDuration}ms linear;
  `}
`;

ModalOverlay.defaultProps = {
  theme: DefaultTheme,
};

export const ModalWrapper = styled.div<IAnimationBlockProps>`
  display: flex;
  height: ${() => 'max-content'};
  flex-direction: column;
  outline: none;
  transform: translate(0, 0);

  padding-top: 4px;
  ${MediaQuery('tablet')`
    padding: 32px 0;
  `};

  background: ${({ theme }: IBaseProps) => theme.colors.white};

  ${({ isMobile, animationDuration, maxWidthStyle }: IAnimationBlockProps) =>
    isMobile
      ? css`
          animation: ${toTop} ${animationDuration}ms linear;
          width: calc(100% + 1px);
          margin-top: 28px;
          border-radius: 16px 16px 0 0;
          min-height: calc(100% - 28px);
        `
      : css`
          width: 87%;
          border-radius: 16px;
          max-width: ${maxWidthStyle ? maxWidthStyle : '652px'};
          min-height: 536px;
          margin: 48px auto;
          @media (min-height: 720px) {
            margin: 80px auto;
          }
        `}

  &:before {
    content: '';
    display: block;
    position: absolute;
    margin-left: 20px;
    margin-top: -16px;
    ${MediaQuery('tablet')`
      margin-top: -44px;
    `};
    width: calc(100% - 40px);
    height: ${({ isMobile }: IBaseProps) => (isMobile ? '12px' : '16px')};
    border-radius: 16px 16px 0 0;
    background: ${({ theme }: IBaseProps) => rgba(theme.colors.white, 0.5)};
  }
`;

ModalWrapper.defaultProps = {
  theme: DefaultTheme,
  isMobile: false,
};

export const HeaderStyle = styled(H1)<IHeaderStyle>`
  display: flex;
  align-items: center;
  flex-direction: row;

  padding: 16px 20px;
  ${MediaQuery('tablet')`
    padding: 16px 96px 16px 48px;
  `}
  ${({ padding }: IHeaderStyle) => (padding ? `padding: ${padding};` : '')}

  ${({ isSticky, theme }: IHeaderStyle) =>
    isSticky &&
    css`
      position: sticky;
      top: 0;
      font-size: 24px;
      line-height: 32px;
      border-radius: 16px 16px 0 0;
      border-bottom: 1px solid ${theme.colors.rainySky};
      background: ${theme.colors.white};
      z-index: 10;
    `}

  @media ${MEDIA.onlyMobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

HeaderStyle.defaultProps = {
  theme: DefaultTheme,
};

export const TitleStyle = styled.span<IAnimationStyle>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ animationType }: IAnimationStyle) => getAnimationStyle(animationType)}
`;

export const ContentStyle = styled.div<IModalContentStyle>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ theme }: IBaseProps) => theme.colors.white};

  ${({ justifyContent }: IModalContentStyle) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `} 
  
  ${({ alignItems }: IModalContentStyle) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}

  ${({ animationType }: IAnimationStyle) => getAnimationStyle(animationType)}

  padding: ${({ padding }: IModalContentStyle) => (padding ? padding : '16px 0')};

  margin: 0 20px;
  ${MediaQuery('tablet')`
      margin: 0 96px;
  `}
`;

ContentStyle.defaultProps = {
  theme: DefaultTheme,
};

export const FooterStyle = styled.div<IFootersStyle & IAnimationStyle>`
  display: flex;
  
  ${({ isMobile }: IFootersStyle) =>
    isMobile &&
    css`
      @media (orientation: landscape) and ${MEDIA.onlyMobile} {
        display: none;
      }
    `}

  border-radius: 0 0 16px 16px;
  margin-top: auto;

  ${({ isWithActions }: IFootersStyle) =>
    !isWithActions &&
    css`
      & > :last-child {
        ${({ isMobile }: IFootersStyle) =>
          isMobile ? 'margin-bottom: 16px' : 'margin-left: 16px'};
      }
    `}
  
  ${({ animationType }: IAnimationStyle) => getAnimationStyle(animationType)}

  flex-direction: ${({ isMobile, isWithActions }: IFootersStyle) =>
    isMobile && !isWithActions ? 'column-reverse' : 'row'};

  ${({ theme }: IFootersStyle) => `
    color: ${theme.colors.plumbum};
    background: ${theme.colors.white};
  `}
  
  ${({ isWithActions, isSticky, theme }: IFootersStyle) =>
    isSticky &&
    !isWithActions &&
    css`
      position: sticky;
      z-index: 10;
      bottom: 0;
      border-top: solid ${theme.borderWidth} ${theme.colors.rainySky};
    `}
  
  ${({ alignItems }: IFootersStyle) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }: IFootersStyle) => justifyContent && `justify-content: ${justifyContent};`}

  padding: 8px 20px 16px;
  ${MediaQuery('tablet')`
    padding: 16px 96px;
  `}
  ${({ padding }: IHeaderStyle) => (padding ? `padding: ${padding};` : '')}
`;

FooterStyle.defaultProps = {
  theme: DefaultTheme,
  isMobile: false,
};

export const StickyCheckerStyle = styled.div`
  width: 100%;
  height: 1px;
`;

export const IconContainer = styled.div`
  margin-right: 16px;
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 38%;
  background: ${({ theme }: IBaseProps) => theme.colors.plumbum};
  cursor: pointer;

  svg {
    cursor: pointer;
    fill: ${({ theme }: IBaseProps) => theme.colors.white};
  }
`;

IconContainer.defaultProps = {
  theme: DefaultTheme,
};

export const ModalInnerWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }: IBaseProps) => theme.colors.white};
  border-radius: 0 0 16px 16px;
`;

ModalInnerWrapper.defaultProps = {
  theme: DefaultTheme,
};
