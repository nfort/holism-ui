import styled, { css, keyframes } from "styled-components";

import { DefaultTheme, ITheme } from "../Palette/variables";

import { IProps, TDimension } from "./interfaces";

interface ILoader extends IProps {
  theme: ITheme;
}

const loaderDimension = (dimension: TDimension | undefined): string => {
  switch (dimension) {
    case "small":
      return "16px";
    case "large":
      return "24px";
    case "medium":
    default:
      return "20px";
  }
};

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderStyle = styled.div<ILoader>`
  display: inline-block;
  position: relative;
  ${({ dimension }) => `
    width: ${loaderDimension(dimension)};
    height: ${loaderDimension(dimension)};
  `}
  background: ${({ background }) => (background ? background : "transparent")};
  ${({ center }) =>
    center &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  & div {
    ${({ dimension }) => `
      width: ${loaderDimension(dimension)};
      height: ${loaderDimension(dimension)};
    `}
    border: 2px solid ${({ color, theme }) => (color ? color : theme.colors.white)};
    box-sizing: border-box;
    display: block;
    position: absolute;
    border-radius: 50%;
    animation: ${animation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color, theme }) => (color ? color : theme.colors.white)} transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

LoaderStyle.defaultProps = {
  theme: DefaultTheme,
};
