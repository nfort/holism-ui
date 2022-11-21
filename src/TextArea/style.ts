import styled, { css } from "styled-components";
import Textarea from "react-textarea-autosize";
import { CloseIcon } from "@nfort/logistics-icons";

import { BorderRadius, INNERSHADOWS } from "../Palette/export";
import { DefaultTheme, ITheme } from "../Palette/variables";

import { IDimension, IStylePropsError, IPlaceholder, IWrapper } from "./interfaces";

const dimensionStyle = {
  small: (theme: ITheme, isClearable?: boolean) => css`
    padding: ${isClearable ? "14px 28px 14px 16px" : "14px 16px"};
    font-size: ${theme.typography.fontSize2};
  `,

  medium: (theme: ITheme, isClearable?: boolean) => css`
    padding: ${isClearable ? "28px 28px 16px 16px" : "28px 16px 16px"};
    line-height: ${theme.typography.lineHeight2};
    font-size: ${theme.typography.fontSize1};
  `,

  large: (theme: ITheme, isClearable?: boolean) => css`
    padding: ${isClearable ? "32px 28px 20px 16px" : "32px 16px 20px"};
    line-height: ${theme.typography.lineHeight2};
    font-size: ${theme.typography.fontSize1};
  `,
};

const placeholderDimensionStyle = {
  small: ({ theme, isFocused, isHasValue }: IPlaceholder) => css`
    padding: 10px 20px 10px 12px;
    font-size: ${theme.typography.fontSize1};
    display: ${isFocused || isHasValue ? "none" : "flex"};
    top: 0;
  `,
  medium: ({ theme, isFocused, isHasValue }: IPlaceholder) => {
    return isFocused || isHasValue
      ? css`
          background: transparent;
          display: flex;
          transform: translate(16px, 8px);
          font-size: ${theme.typography.fontSize2};
          border-radius: 8px;
        `
      : css`
          display: flex;
          transform: translate(16px, 16px);
          font-size: ${theme.typography.fontSize1};
        `;
  },
  large: ({ theme, isFocused, isHasValue }: IPlaceholder) => {
    return isFocused || isHasValue
      ? css`
          background: transparent;
          display: flex;
          transform: translate(16px, 12px);
          font-size: ${theme.typography.fontSize2};
          border-radius: 8px;
        `
      : css`
          display: flex;
          transform: translate(16px, 20px);
          font-size: ${theme.typography.fontSize1};
        `;
  },
};

const getPlaceholderColor = ({ theme, isHasValue, isFocused, error, isDisabled, dimension }: IPlaceholder) => {
  if (dimension === "small") {
    return theme.colors.asphalt;
  }

  if (isDisabled) {
    return theme.colors.asphalt;
  }

  if (isFocused && error) {
    return theme.colors.plumbum;
  }
  if (!isFocused && error && isHasValue) {
    return theme.colors.plumbum;
  }
  if (isFocused && !error) {
    return theme.colors.sapphire;
  }
  return theme.colors.plumbum;
};

export const Placeholder = styled.div<IPlaceholder>`
  ${({ theme, dimension, isFocused, isHasValue }: IPlaceholder) => {
    return dimension && placeholderDimensionStyle[dimension]({ theme, isFocused, isHasValue });
  }};
  position: absolute;
  align-items: center;
  color: ${(placeholderProps: IPlaceholder) => getPlaceholderColor(placeholderProps)};
  background-color: ${({ isFocused, isHasValue, theme, isDisabled }: IPlaceholder) => {
    if (isDisabled) {
      return "inherit";
    }
    return isFocused || isHasValue ? theme.colors.white : "inherit;";
  }};
  left: 0;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 16px);
  transition: all 0.2s;
  pointer-events: none;
`;

Placeholder.defaultProps = {
  theme: DefaultTheme,
};

export const InputWrapper = styled.div<IWrapper>`
  font-family: ${({ theme }: IWrapper) => theme.typography.fontFamily};
  width: 100%;
  position: relative;
  textarea {
    font-family: ${({ theme }: IWrapper) => theme.typography.fontFamily};
    background-color: transparent;
    color: ${({ isDisabled, theme }: IWrapper) => (isDisabled ? theme.colors.asphalt : theme.colors.plumbum)};
    border: none;
    outline: none;
    width: 100%;
    resize: none;

    &::-ms-clear {
      display: none;
    }
    &::-ms-reveal {
      display: none;
    }

    &:-webkit-autofill {
      box-shadow: ${({ theme }: IWrapper) => `${INNERSHADOWS.shadowLarge} ${theme.colors.white} inset`};
    }

    ${({ dimension, theme, isClearable }: IWrapper) => dimension && dimensionStyle[dimension](theme, isClearable)};
    box-sizing: content-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  input[type="number"] {
    appearance: textfield;

    /* Webkit browsers like Safari and Chrome */
    &::-webkit-outer-spin-button {
      appearance: none;
      margin: 0;
    }
  }
`;

InputWrapper.defaultProps = {
  theme: DefaultTheme,
};

export const Error = styled.div<IDimension>`
  display: flex;
  align-items: center;
  margin-top: 4px;
  padding: 0 16px;
  height: auto;
  ${({ theme }: IDimension) => `
    font-size: ${theme.typography.fontSize3};
    line-height: ${theme.typography.lineHeight3};
    color: ${theme.colors.redRose};
  `}
`;

Error.defaultProps = {
  theme: DefaultTheme,
};

export const Field = styled.div`
  max-height: 400px;
  overflow: auto;
  display: flex;
`;

export const TextareaComponent = styled.div<IStylePropsError>`
  background-color: ${({ isDisabled, theme }: IStylePropsError) =>
    isDisabled ? theme.colors.johnSnow : theme.colors.white};
  border: solid ${({ theme }) => theme.borderWidth};
  border-color: ${({ theme }: IStylePropsError) => theme.colors.greyDay};
  ${({ theme }: IStylePropsError) => BorderRadius.roundBorder(theme.shape.borderRadiusDefault)};
  width: 100%;
  box-sizing: border-box;
  position: relative;
  font-weight: normal;
  overflow: hidden;

  ${({ dimension }) => {
    if (dimension === "small") {
      return "";
    }

    return css`
      &::before {
        position: absolute;
        content: "";
        top: 0;
        width: calc(100% - 16px);
        height: 32px;
        background: inherit;
      }
    `;
  }}

  &:hover {
    ${({ error, isDisabled, isFocused, theme }: IStylePropsError) =>
      !isFocused && !error && !isDisabled && `border-color: ${theme.colors.plumbum};`}
  }

  ${({ error, isFocused, isDisabled, theme }: IStylePropsError) => {
    if (error) {
      return `border-color: ${theme.colors.redMain};`;
    }
    if (isFocused) {
      return `border-color: ${theme.colors.azure};`;
    }
    if (isDisabled) {
      return `border-color: ${theme.colors.johnSnow}`;
    }
    return "";
  }}
`;

TextareaComponent.defaultProps = {
  theme: DefaultTheme,
};

export const TextareaElement = styled(Textarea)`
  box-sizing: border-box;
  padding: 16px 32px 20px;
  max-width: calc(100% - 16px);
  color: ${({ theme }) => theme.colors.plumbum};
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.stonehenge} transparent;

  &::-webkit-scrollbar {
    width: 16px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.stonehenge};
    border-radius: 8px;
    border: 5px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.greyDay};
    border-radius: 8px;
    border: 5px solid transparent;
    background-clip: content-box;
  }

  &:hover {
    padding-right: 0;
    overflow-y: scroll;
  }
`;

TextareaElement.defaultProps = {
  theme: DefaultTheme,
};

export const IconsBox = styled.div<IDimension>`
  position: absolute;
  right: 14px;
  top: ${({ dimension }) => (dimension === "small" ? "10px" : "14px")};
  display: flex;
  justify-content: center;

  > div:last-child {
    display: inline-flex;
    ${({ dimension }) =>
      `&::after {
          content: '';
          height: 100%;
          width: ${dimension === "small" ? "10px" : "14px"};
        }`}
  }
`;

export const Title = styled.div<IPlaceholder>`
  display: flex;
  align-items: center;
  height: auto;
  ${({ theme }: IPlaceholder) => css`
    font-size: ${theme.typography.fontSize2};
    line-height: ${theme.typography.lineHeight2};
    padding: 0 14px;
  `};
  color: ${(placeholderProps: IPlaceholder) => getPlaceholderColor(placeholderProps)};
  margin-bottom: 8px;
`;

Title.defaultProps = {
  theme: DefaultTheme,
};

export const StyledErrorIcon = styled(CloseIcon)`
  cursor: pointer;
`;

const svgRepeatedStyles = (theme: ITheme) => css`
  svg {
    fill: ${theme.colors.asphalt};
  }

  &:hover {
    svg {
      fill: ${theme.colors.rainySky};
    }
  }
`;

export const IconWrapper = styled.div<IDimension>`
  margin-left: 8px;
  ${({ theme }: IDimension) => svgRepeatedStyles(theme)}
`;

IconWrapper.defaultProps = {
  theme: DefaultTheme,
};
