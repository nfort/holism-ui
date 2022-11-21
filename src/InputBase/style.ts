import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { CloseIcon, InfoDetailedIcon, InformerOkIcon } from "@nfort/logistics-icons";
import { rgba } from "polished";

import { BorderRadius } from "../Palette/export";
import { DefaultTheme, ITheme } from "../Palette/variables";

import {
  TDimension,
  IInput,
  IWrapper,
  IInputComponent,
  IPlaceholder,
  IStylesInput,
  IIconBoxStyledProps,
} from "./interfaces";

const dimensionStyle = {
  medium: css`
    padding: 27px 0 11px 0;
  `,

  small: css`
    padding: 15px 0;
  `,

  large: css`
    padding: 33px 0 13px 0;
  `,
};

const setSmallPlaceholderStyles = ({ theme, isFocused, isHasValue }: IPlaceholder): FlattenSimpleInterpolation =>
  css`
    align-items: center;
    font-size: ${theme.typography.fontSize1};
    display: flex;
    top: 13px;
    ${(isFocused || isHasValue) &&
    css`
      background: ${theme.colors.white};
      box-sizing: content-box;
      padding: 0 2px;
      transform: translateY(-22px);
    `}
  `;

const getIconsBoxMarginTop = (dimension: TDimension): string => {
  switch (dimension) {
    case "small":
      return "12px";
    case "medium":
      return "17px";
    case "large":
      return "19px";
  }
};

const setMediumPlaceholderStyles = ({ theme, isFocused, isHasValue }: IPlaceholder): FlattenSimpleInterpolation =>
  isFocused || isHasValue
    ? css`
        transform: translateY(-10px);
        line-height: 54px;
        font-size: ${theme.typography.fontSize3};
      `
    : css`
        line-height: 54px;
        font-size: ${theme.typography.fontSize1};
      `;

const setLargePlaceholderStyles = ({ theme, isFocused, isHasValue }: IPlaceholder): FlattenSimpleInterpolation =>
  isFocused || isHasValue
    ? css`
        transform: translateY(-10px);
        font-size: ${theme.typography.fontSize3};
        line-height: 62px;
      `
    : css`
        line-height: 62px;
        font-size: ${theme.typography.fontSize1};
      `;

const placeholderDimensionStyle = {
  small: setSmallPlaceholderStyles,
  medium: setMediumPlaceholderStyles,
  large: setLargePlaceholderStyles,
};

const getInputComponentBackgroundColor = ({
  error,
  isFocused,
  isDisabled,
  isSuccess,
  theme,
}: IInputComponent): FlattenSimpleInterpolation | string => {
  if (error) {
    return css`
      border-color: ${theme.colors.redMain};
    `;
  }
  if (isFocused) {
    return css`
      border-color: ${theme.colors.sapphire};
    `;
  }
  if (isDisabled) {
    return css`
      border-color: ${theme.colors.rainySky};
    `;
  }
  if (isSuccess && !isDisabled) {
    return css`
      border-color: ${theme.colors.spring};
    `;
  }
  return "";
};

const getPlaceholderColor = ({
  theme,
  isFocused,
  error,
  isHasValue,
  isDisabled,
}: IPlaceholder): FlattenSimpleInterpolation => {
  if (error) {
    return css`
      color: ${theme.colors.redRose};
    `;
  }

  if (isFocused) {
    return css`
      color: ${theme.colors.sapphire};
    `;
  }

  if (!isFocused && !isHasValue && !isDisabled) {
    return css`
      color: ${theme.colors.plumbum};
    `;
  }

  return css`
    color: ${theme.colors.asphalt};
  `;
};

const svgRepeatedStyles = (theme: ITheme) => css`
  svg {
    fill: ${theme.colors.greyDay};
  }

  &:hover {
    svg {
      fill: ${theme.colors.asphalt};
    }
  }
`;

const getHeight = (dimension: TDimension): string => {
  switch (dimension) {
    case "large":
      return "64px";
    case "small":
      return "48px";
    default:
      return "56px";
  }
};

const getIconTopPosition = (dimension: TDimension = "medium"): string => {
  switch (dimension) {
    case "large":
      return "22px";

    case "medium":
      return "18px";

    case "small":
      return "14px";
  }
};

export const InputWrapper = styled.div<IWrapper>`
  font-family: ${({ theme }: IWrapper) => theme.typography.fontFamily};
  width: 100%;
  position: relative;

  input {
    ${({ theme, isDisabled, alignText }: IWrapper) => css`
      font-family: ${theme.typography.fontFamily};
      line-height: ${theme.typography.lineHeight3};
      font-size: ${theme.typography.fontSize1};
      color: ${isDisabled ? theme.colors.asphalt : theme.colors.plumbum};
      text-align: ${alignText};
    `};
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 16px;
    resize: none;
    z-index: 1;

    &::-ms-clear {
      display: none;
    }
    &::-ms-reveal {
      display: none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }

    ${({ dimension }) => dimensionStyle[dimension]};
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

export const Placeholder = styled.div<IPlaceholder>`
  ${({ dimension }: IPlaceholder) => placeholderDimensionStyle[dimension]};
  ${getPlaceholderColor};
  font-size: ${({ isFocused, isHasValue }: IPlaceholder) => (isFocused || isHasValue ? "14px" : "16px")};
  position: absolute;
  left: 0;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  transition: all 0.3s;
  user-select: none;
`;

Placeholder.defaultProps = {
  theme: DefaultTheme,
};

export const Error = styled.div<IInput>`
  display: flex;
  margin-top: 8px;
  margin-left: 16px;
  max-height: max-content;
  overflow: hidden;
  ${({ theme }: IInput) => css`
    font-size: ${theme.typography.fontSize2};
    line-height: ${theme.typography.lineHeight2};
    color: ${theme.colors.redRose};
  `}
`;

Error.defaultProps = {
  theme: DefaultTheme,
};

export const Field = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const InputComponent = styled.div<IInputComponent>`
  ${({ isDisabled, theme }: IInputComponent) => css`
    background-color: ${isDisabled ? theme.colors.johnSnow : theme.colors.white};
    border: solid ${theme.borderWidth} ${theme.colors.greyDay};
    ${BorderRadius.roundBorder(theme.shape.borderRadiusDefault)};
  `};
  ${getInputComponentBackgroundColor};
  width: 100%;
  box-sizing: border-box;
  font-weight: normal;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.3s ease-out;
  cursor: text;
  padding: 0 ${({ isTextArea }: IInputComponent) => (isTextArea ? "0" : "16px")} 0 16px;
  min-height: ${({ dimension }: IInputComponent) => getHeight(dimension)};
  max-height: ${({ isTextArea, dimension }: IInputComponent) => (isTextArea ? "auto" : getHeight(dimension))};
  height: 100%;

  ${({ isReadOnly, theme }: IInputComponent) =>
    isReadOnly &&
    css`
      background-color: ${rgba(theme.colors.stonehenge, 0.2)};
      border: 0;
    `}

  &:hover {
    ${({ error, isDisabled, isFocused, theme }: IInputComponent) =>
      !isFocused &&
      !error &&
      !isDisabled &&
      `
        border-color: ${theme.colors.black};
      `}
  }
`;

InputComponent.defaultProps = {
  theme: DefaultTheme,
};

export const MaskConstant = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(8px);
`;

export const PlaceholderMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  transform: translateY(8px);
  opacity: 0.3;
`;

export const IconWrapper = styled.div<IInput>`
  display: flex;
  margin-right: 8px;
  ${({ theme }: IInput) => svgRepeatedStyles(theme)}
`;

IconWrapper.defaultProps = {
  theme: DefaultTheme,
};

export const IconsBoxStyled = styled.div<IIconBoxStyledProps>`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isTextArea, dimension = "small" }: IIconBoxStyledProps) =>
    isTextArea &&
    css`
      position: absolute;
      z-index: 2;
      right: 18px;
      align-items: unset;
      margin-top: ${getIconsBoxMarginTop(dimension)};
    `}

  > ${IconWrapper}:last-child {
    margin-right: 0;
  }
`;

IconsBoxStyled.defaultProps = {
  isTextArea: false,
};

export const InformerOkIconStyled = styled(InformerOkIcon)<IStylesInput>`
  & svg,
  & svg:hover {
    fill: ${({ theme }) => theme.colors.spring};
  }
`;

InformerOkIconStyled.defaultProps = {
  theme: DefaultTheme,
};

export const InfoDetailedIconStyled = styled(InfoDetailedIcon)<IStylesInput>`
  & svg {
    ${({ theme, error }) =>
      error &&
      css`
        fill: ${theme.colors.redRose};
      `}
  }

  &:hover {
    svg {
      ${({ theme, error }) =>
        error &&
        css`
          fill: ${theme.colors.redRose};
        `}
    }
  }
`;

InfoDetailedIconStyled.defaultProps = {
  theme: DefaultTheme,
};

export const ClearIconStyled = styled(CloseIcon)`
  cursor: pointer;
`;

export const InputAddonsLeft = styled.div<IStylesInput>`
  display: flex;
  align-items: center;
  margin-right: 20px;

  svg {
    fill: ${({ theme }) => theme.colors.greyDay};
  }

  ${({ iconPosition, isIconOnClick, isFocused, dimension }: IStylesInput) =>
    iconPosition === "right" &&
    css`
      position: absolute;
      right: 0;
      top: ${getIconTopPosition(dimension)};
      z-index: 2;

      svg {
        width: 24px;
        height: 24px;
        fill: ${({ theme }: IStylesInput) => (isFocused ? theme.colors.sapphire : theme.colors.greyDay)};
        cursor: ${isIconOnClick && !isFocused ? "pointer" : "default"};

        &:hover {
          fill: ${({ theme }) => theme.colors.sapphire};
        }
      }
    `}
`;

InputAddonsLeft.defaultProps = {
  theme: DefaultTheme,
};
