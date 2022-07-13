import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { IPlaceholder } from "../../../InputBase/interfaces";
import { DefaultTheme, ITheme } from "../../../Palette/variables";
import { ISelectStyle } from "../../interfaces";

const placeholderDimensionStyle = {
  medium: (theme: ITheme, isFocused: boolean, isHasValue: boolean): FlattenSimpleInterpolation =>
    isFocused || isHasValue
      ? css`
          display: flex;
          transform: translateY(-10px);
          line-height: 54px;
          font-size: ${theme.typography.fontSize3};
        `
      : css`
          display: flex;
          line-height: 54px;
          font-size: ${theme.typography.fontSize1};
        `,
  small: (theme: ITheme, isFocused: boolean, isHasValue: boolean): FlattenSimpleInterpolation => css`
    top: ${isHasValue || isFocused ? "-9px" : "16px"};
    height: 16px;
    background: ${theme.colors.white};
    align-items: center;
    font-size: 14px;
  `,
  large: (theme: ITheme, isFocused: boolean, isHasValue: boolean): FlattenSimpleInterpolation =>
    isFocused || isHasValue
      ? css`
          display: flex;
          transform: translateY(-8px);
          font-size: ${theme.typography.fontSize3};
          line-height: 62px;
        `
      : css`
          display: flex;
          line-height: 62px;
          font-size: ${theme.typography.fontSize1};
        `,
};

export const WrapperSelectStyle = styled.div<ISelectStyle>`
  display: block;
  ${({ theme, width = "auto" }: ISelectStyle) => css`
    font-family: ${theme.typography.fontFamily};
    width: ${width};
  `}
`;

WrapperSelectStyle.defaultProps = {
  theme: DefaultTheme,
};

export const LabelStyle = styled.label<ISelectStyle>`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  ${({ theme }: ISelectStyle) => css`
    font-size: ${theme.typography.fontSize2};
    font-family: ${theme.typography.fontFamily};
    line-height: ${theme.typography.lineHeight2};
    color: ${theme.colors.asphalt};
  `}
`;

LabelStyle.defaultProps = {
  theme: DefaultTheme,
};

export const ContainerSelectStyle = styled.div<ISelectStyle>`
  position: relative;
  border-radius: 8px;

  ${({ theme, isDisabled }: ISelectStyle) => css`
    font-family: ${theme.typography.fontFamily};
    background: ${isDisabled ? theme.colors.johnSnow : theme.colors.white};
  `}
`;

ContainerSelectStyle.defaultProps = {
  theme: DefaultTheme,
};

export const Placeholder = styled.div<IPlaceholder>`
  ${({ dimension = "large", isFocused, isHasValue, theme }: IPlaceholder) =>
    dimension && placeholderDimensionStyle[dimension](theme, isFocused, isHasValue)};
  position: absolute;
  color: ${({ theme, isFocused, error }: IPlaceholder) => {
    if (error && isFocused) {
      return theme.colors.redMain;
    }

    if (!error && isFocused) {
      return theme.colors.sapphire;
    }

    return theme.colors.black;
  }};
  left: 16px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 48px);
  transition: all 0.3s;
  pointer-events: none;
  z-index: 7;
`;

Placeholder.defaultProps = {
  theme: DefaultTheme,
  dimension: "large",
  isFocused: false,
  isHasValue: false,
};

export const ErrorMessageStyle = styled.div`
  margin-top: 4px;
  margin-left: 16px;
  ${({ theme }: ISelectStyle) => css`
    color: ${theme.colors.redMain};
    font-size: ${theme.typography.fontSize2};
  `}
`;

ErrorMessageStyle.defaultProps = {
  theme: DefaultTheme,
};
