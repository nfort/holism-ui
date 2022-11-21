import { BorderRadius, DefaultTheme } from "../../../Palette/export";
import { CloseIcon, SearchIcon } from "@nfort/logistics-icons";
import styled, { css } from "styled-components";

import { ITheme } from "../../../Palette/variables";
import { ISuggestStyle, TDimension } from "../../interfaces";

const dimensionStyle = {
  small: css`
    height: 48px;
  `,
  medium: css`
    height: 56px;
  `,
  large: css`
    height: 64px;
  `,
};

const placeholderDimensionStyle = {
  medium: (theme: ITheme, isFocused: boolean, isHasValue: boolean) =>
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

  small: (theme: ITheme, isFocused: boolean, isHasValue: boolean) => css`
    height: 20px;
    align-items: center;
    font-size: ${theme.typography.fontSize1};
    top: ${isHasValue || isFocused ? "-12px" : "14px"};
    ${(isHasValue || isFocused) &&
    css`
      background: ${theme.colors.white};
      box-sizing: content-box;
      padding: 2px;
    `};
  `,

  large: (_theme: ITheme, isFocused: boolean, isHasValue: boolean) =>
    isFocused || isHasValue
      ? css`
          display: flex;
          transform: translateY(-12px);
          font-size: 14px;
          line-height: 62px;
        `
      : css`
          display: flex;
          line-height: 62px;
          font-size: 16px;
        `,
};

const repeatedIconStyles = (theme: ITheme) => css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  bottom: 0;

  & svg {
    fill: ${theme.colors.greyDay};
  }

  &:hover {
    svg {
      fill: ${theme.colors.asphalt};
    }
  }
`;

export const StyledField = styled.div<ISuggestStyle>`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  font-weight: normal;
  transition: border 0.3s ease-out, background 0.3s ease-out, opacity 0.3s ease-out, color 0.3s ease-out;

  ${({ theme, dimension = "large" }: ISuggestStyle) => css`
    color: ${theme.colors.plumbum};
    border: ${theme.borderWidth} solid ${theme.colors.greyDay};

    ${BorderRadius.roundBorder(theme.shape.borderRadiusDefault)};
    ${dimensionStyle[dimension]};
  `};

  ${({ isSuggestionsListOpened }: ISuggestStyle) =>
    isSuggestionsListOpened &&
    css`
      z-index: 10;
    `};

  ${({ isError, isFocused, isDisabled, theme, hasValue }: ISuggestStyle) => {
    if (isError) {
      return css`
        border-color: ${theme.colors.redMain};
      `;
    }

    if (isFocused) {
      return css`
        border-radius: 8px;
        border-color: ${hasValue ? theme.colors.greyDay : theme.colors.sapphire};
      `;
    }

    if (isDisabled) {
      return css`
        border-color: ${theme.colors.rainySky};
        pointer-events: none;
      `;
    }

    return css`
      border-color: ${theme.colors.greyDay};

      &:hover {
        border-color: ${theme.colors.plumbum};
      }
    `;
  }}
`;

StyledField.defaultProps = {
  theme: DefaultTheme,
  dimension: "large",
  isDisabled: false,
  isError: false,
  isFocused: false,
};

export const Placeholder = styled.div<ISuggestStyle>`
  ${({ dimension = "large", isFocused = false, hasValue = false, theme }: ISuggestStyle) =>
    dimension && placeholderDimensionStyle[dimension](theme, isFocused, hasValue)};
  position: absolute;
  color: ${({ theme, isFocused, isError, hasValue, isDisabled }: ISuggestStyle) => {
    if (isDisabled) {
      return theme.colors.asphalt;
    }
    if (isError) {
      return isFocused ? theme.colors.redMain : theme.colors.black;
    } else {
      if (isFocused) {
        return theme.colors.sapphire;
      } else {
        return hasValue ? theme.colors.asphalt : theme.colors.black;
      }
    }
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
  hasValue: false,
};

export const CloseIconStyle = styled(CloseIcon)<ISuggestStyle>`
  right: 16px;

  ${({ theme, isDisabled }: ISuggestStyle) => css`
    cursor: ${isDisabled ? "auto" : "pointer"};
    ${repeatedIconStyles(theme)};
  `}
`;

CloseIconStyle.defaultProps = {
  theme: DefaultTheme,
  isDisabled: false,
  dimension: "large",
};

export const SearchIconStyle = styled(SearchIcon)<{
  theme: ITheme;
  dimension?: TDimension;
  isFocused?: boolean;
}>`
  ${({ theme, dimension }: ISuggestStyle) => css`
    right: ${dimension === "small" ? 10 : 14}px;
    ${repeatedIconStyles(theme)};
  `}
`;

SearchIconStyle.defaultProps = {
  theme: DefaultTheme,
  dimension: "large",
};
