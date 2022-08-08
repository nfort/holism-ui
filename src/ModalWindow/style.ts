import styled, { css, createGlobalStyle } from "styled-components";
import { DefaultTheme, MEDIA, MediaQuery } from "../Palette/export";
import { H1 } from "../Typography/Typography";
import { rgba } from "polished";

import {
  IAnimationBlockProps,
  IBaseProps,
  IHeaderStyle,
  IFootersStyle,
  EAnimationType,
  IAnimationStyle,
  IModalContentStyle,
} from "./utils/interfaces";
import { fadeIn, toTop, changeIn, changeOut } from "./utils/animations";

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
  z-index: 1040;
  width: 100vw;
  height: 100vh;
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

export const HeaderStyle = styled(H1)<IHeaderStyle>`
  display: flex;
  align-items: center;
  flex-direction: row;

  padding: 16px 20px;
  ${MediaQuery("tablet")`
    padding: 16px 96px 16px 48px;
  `}
  ${({ padding }: IHeaderStyle) => (padding ? `padding: ${padding};` : "")}

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

export const ContentStyle = styled.div<IModalContentStyle>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: calc(100vh - 175px);
  overflow: auto;
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

  margin: 0 20px;
  ${MediaQuery("tablet")`
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
      & > :last-of-type:not(:only-of-type) {
        ${({ isMobile }: IFootersStyle) => (isMobile ? "margin-bottom: 16px" : "margin-left: 16px")};
      }
    `}

  ${({ animationType }: IAnimationStyle) => getAnimationStyle(animationType)}

  flex-direction: ${({ isMobile, isWithActions }: IFootersStyle) =>
    isMobile && !isWithActions ? "column-reverse" : "row"};

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
  ${MediaQuery("tablet")`
    padding: 16px 96px;
  `}
  ${({ padding }: IHeaderStyle) => (padding ? `padding: ${padding};` : "")}
`;

FooterStyle.defaultProps = {
  theme: DefaultTheme,
  isMobile: false,
};

export const OffCanvasDialog = styled.div<IAnimationBlockProps>`
  outline: none;
  width: ${({ width }) => width};
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1045;
  animation-duration: 0.3s;
  animation-name: slidein;
  animation-fill-mode: ease-in-out;
  background: ${({ theme }: IBaseProps) => theme.colors.white};

  > ${HeaderStyle} {
    padding-left: 2rem;
  }

  > ${ContentStyle} {
    margin: 0 2rem;
  }

  > ${FooterStyle} {
    padding-left: 2rem;
    padding-left: 2rem;
  }

  @keyframes slidein {
    from {
      transform: translateX(100%);
    }

    to {
      transform: none;
    }
  }
`;

OffCanvasDialog.defaultProps = {
  theme: DefaultTheme,
  isMobile: false,
};

export const ModalDialog = styled.div<IAnimationBlockProps>`
  height: ${() => "max-content"};
  outline: none;
  /* transform: translate(0, 0); */
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1045;

  padding-top: 4px;
  ${MediaQuery("tablet")`
    padding: 32px 0;
  `};

  background: ${({ theme }: IBaseProps) => theme.colors.white};

  ${({ isMobile, animationDuration, width }: IAnimationBlockProps) =>
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
          max-width: ${width ? width : "652px"};
          min-height: 536px;
          margin: 48px auto;
          @media (min-height: 720px) {
            margin: 80px auto;
          }
        `}

  &:before {
    content: "";
    display: block;
    position: absolute;
    margin-left: 20px;
    margin-top: -16px;
    ${MediaQuery("tablet")`
      margin-top: -44px;
    `};
    width: calc(100% - 40px);
    height: ${({ isMobile }: IBaseProps) => (isMobile ? "12px" : "16px")};
    border-radius: 16px 16px 0 0;
    background: ${({ theme }: IBaseProps) => rgba(theme.colors.white, 0.5)};
  }
`;

ModalDialog.defaultProps = {
  theme: DefaultTheme,
  isMobile: false,
};

export const TitleStyle = styled.span<IAnimationStyle>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ animationType }: IAnimationStyle) => getAnimationStyle(animationType)}
`;

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
