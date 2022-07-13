import styled, { css } from "styled-components";
import { DefaultTheme } from "../../../Palette/export";

import { ISelectStyle, IDimension } from "../../interfaces";

const controlDimension = (dimension: IDimension | undefined) => {
  switch (dimension) {
    case "small": {
      return "height: 48px;";
    }
    case "large": {
      return "height: 64px;";
    }
    case "medium":
    default: {
      return "height: 56px;";
    }
  }
};

export const ControlSelectStyle = styled.div<ISelectStyle>`
  position: relative;
  display: flex;
  padding: 0 16px;
  transition: all 0.3s ease-out;

  ${({ theme }: ISelectStyle) => css`
    font-size: ${theme.typography.fontSize1};
    color: ${theme.colors.plumbum};
    border: ${theme.borderWidth} solid ${theme.colors.greyDay};
  `}

  &:hover {
    ${({ isError, isDisabled, isFocused, theme }: ISelectStyle) =>
      !isFocused &&
      !isDisabled &&
      css`
        border-color: ${isError ? theme.colors.redMain : theme.colors.black};
        cursor: pointer;
      `};
  }

  ${({ isError, menuIsOpen, isFocused, theme }: ISelectStyle) => css`
    ${!isError &&
    (menuIsOpen || isFocused) &&
    css`
      position: relative;
      border-color: ${theme.colors.sapphire};
    `};
    border-radius: 8px;

    ${isError &&
    css`
      border-color: ${theme.colors.redMain};
    `};
  `}

  ${({ dimension }) => controlDimension(dimension)}
  ${({ isDisabled, theme }: ISelectStyle) =>
    isDisabled &&
    css`
      border-color: ${theme.colors.greyDay};
    `}
  z-index: 6;
`;

ControlSelectStyle.defaultProps = {
  theme: DefaultTheme,
};
