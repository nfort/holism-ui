import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";
import { COLORS } from "../Palette/export";

import { ITheme, DefaultTheme } from "../Palette/variables";

import { IButton } from "./interfaces";

interface IProps {
  animation: "show" | "hide" | null;
  height: number;
  showTime: number;
  hideTime: number;
  type: "default" | "info" | "success" | "warning" | "error";
  buttons?: IButton;
}

interface IPartProps extends Partial<IProps> {
  theme: ITheme;
}

const ColorName = {
  info: "sapphire",
  success: "sapphire",
  warning: "orange",
  error: "redMain",
  default: "white",
};

const fadeIn = () => keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconStyle = (_theme: ITheme) => css`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  font-size: 16px;
  display: "flex";
`;

export const Wrapper = styled.div<IPartProps>`
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 12px 0 ${rgba(COLORS.newYork, 0.22)}, 0 19px 38px 0 ${rgba(COLORS.newYork, 0.3)};
  box-sizing: border-box;
  overflow: hidden;
  padding: 24px;
  justify-content: space-between;
  width: 355px;
  ${({ type, theme }) => `
    border-radius: ${theme.shape.borderRadiusDefault};
    background-color: ${type ? theme.colors[ColorName[type]] : theme.colors.default};
  `};

  margin-bottom: 4px;
  opacity: 0;
  height: ${({ height }) => (height ? `${height}px` : `auto`)};

  ${({ animation, showTime }) =>
    animation === "show" &&
    css`
      animation: ${fadeIn()} ${showTime}ms linear;
      opacity: 1;
    `};
  @media (max-width: 375px) {
    width: 300px;
    align-items: center;
  }
`;

Wrapper.defaultProps = {
  theme: DefaultTheme,
};

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  button + button {
    margin-left: 12px;
  }
`;

export const MessageIconWrapper = styled.div<IPartProps>`
  ${({ theme }: IPartProps) => IconStyle(theme)};
  margin-right: 12px;
`;

MessageIconWrapper.defaultProps = {
  theme: DefaultTheme,
};

export const Content = styled.div`
  display: flex;
`;

export const TextContent = styled.div<IPartProps>`
  ${({ theme, type }: IPartProps) => `
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSize2};
    line-height: ${theme.typography.lineHeight2};
    color: ${type === "default" ? theme.colors.black : theme.colors.white};
  `};
`;

TextContent.defaultProps = {
  theme: DefaultTheme,
};

export const TextMessage = styled.span<IPartProps>`
  margin-top: 2px;
  margin-right: 52px;
  ${({ theme }: IPartProps) => `
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSize2};
    line-height: ${theme.typography.lineHeight2};
  `};
  text-align: left;
`;

TextMessage.defaultProps = {
  theme: DefaultTheme,
};

export const TitleMessage = styled.div<IPartProps>`
  ${({ theme }: IPartProps) => `
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSize2};
    line-height: ${theme.typography.lineHeight2};
  `};
  font-weight: bold;
`;

TitleMessage.defaultProps = {
  theme: DefaultTheme,
};

export const Container = styled.div<IPartProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  right: 0;
  width: 355px;
  z-index: 12;
  @media (max-width: 375px) {
    width: 100%;
    align-items: center;
  }
`;
