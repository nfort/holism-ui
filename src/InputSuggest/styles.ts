import styled, { css, keyframes } from "styled-components";
import { TickIcon } from "@nfort/logistics-icons";
import { rgba } from "polished";

import { COLORS } from "../Palette/export";
import { DefaultTheme, ITheme } from "../Palette/variables";

import { ISuggestStyle } from "./interfaces";

const fadeIn = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

const getLabelColor = (theme: ITheme, hasValue?: boolean, isFocused?: boolean, isError?: string | boolean) => {
  if (isFocused && isError) {
    return theme.colors.redMain;
  }
  if (!isFocused && isError && hasValue) {
    return theme.colors.redMain;
  }
  if (isFocused && !isError) {
    return theme.colors.greyDay;
  }

  return theme.colors.asphalt;
};

const fieldDimensionStyle = {
  small: css`
    padding: 18px 0 18px 16px;
  `,
  medium: css`
    padding: 20px 0 20px 16px;
  `,
  large: css`
    padding: 22px 0 22px 16px;
  `,
};

const inputDimension = {
  medium: css`
    padding: 27px 40px 11px 16px;
  `,

  small: css`
    padding: 15px 40px 15px 16px;
  `,

  large: css`
    padding: 33px 40px 13px 16px;
  `,
};

const optionDimensions = {
  small: css`
    padding: 12px 16px;
  `,
  medium: css`
    padding: 17px 16px;
  `,
  large: css`
    padding: 22px 16px;
  `,
};

export const LabelStyle = styled.label<ISuggestStyle>`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  ${({ theme, hasValue, isFocused, isError }: ISuggestStyle) => `
    font-size: ${theme.typography.fontSize2};
    font-family: ${theme.typography.fontFamily};
    color: ${getLabelColor(theme, hasValue, isFocused, isError)};
  `}
`;

LabelStyle.defaultProps = {
  theme: DefaultTheme,
};

export const SuggestContainer = styled.div<ISuggestStyle>`
  position: relative;

  ${({ theme, width = "auto" }: ISuggestStyle) => css`
    font-family: ${theme.typography.fontFamily};
    width: ${width};
  `}

  .react-autosuggest__input {
    display: flex;
    width: 100%;
    border: none;
    border-radius: 8px;
    text-overflow: ellipsis;
    resize: none;
    overflow: hidden;
    outline: none;

    ${({ theme, isDisabled, dimension }: ISuggestStyle) => css`
      font-size: ${theme.typography.fontSize1};
      font-family: ${theme.typography.fontFamily};
      background-color: ${isDisabled ? theme.colors.johnSnow : theme.colors.white};
      transition: background-color 0.3s ease-in-out 0s;

      ${dimension && inputDimension[dimension]}

      &:hover {
        cursor: pointer;
      }

      &:active,
      &:focus {
        cursor: default;
        background: ${theme.colors.white};
      }
    `}

    &::-ms-clear {
      display: none;
    }

    &::-ms-reveal {
      display: none;
    }
  }

  .react-autosuggest__suggestions-list {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 8px);
    margin: 0;
    padding: 0;
    max-height: ${({ dimension = "large" }: ISuggestStyle) => (dimension === "large" ? "320px" : "280px")};
    display: block;
    overflow-y: scroll;
    list-style: none;
    border-radius: 8px;
    z-index: 8;
    transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);

    animation-name: ${fadeIn};
    animation-duration: 200ms;
    ${({ theme }: ISuggestStyle) => `
      border: 1px solid ${theme.colors.johnSnow};
      background: ${theme.colors.white};
      box-shadow: 0 24px 56px -16px ${rgba(theme.colors.plumbum, 0.2)},
        0 0 4px 0 ${rgba(theme.colors.plumbum, 0.02)};
    `}

    &::-webkit-scrollbar {
      width: 12px;
      background: transparent;
      padding: 18px;
    }

    &::-webkit-scrollbar-track-piece:start {
      margin-top: 8px;
    }

    &::-webkit-scrollbar-track-piece:end {
      margin-bottom: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }: ISuggestStyle) => theme.colors.stonehenge};
      border-radius: 8px;
      border: 3px solid transparent;
      background-clip: content-box;
    }
  }

  .react-autosuggest__suggestion {
    position: relative;
    margin: 1px;

    &:hover {
      background: ${({ theme }: ISuggestStyle) => theme.colors.johnSnow};
      text-shadow: 0 0 0.65px ${({ theme }: ISuggestStyle) => theme.colors.plumbum};
      cursor: pointer;
    }

    ${({ theme, dimension = "large" }: ISuggestStyle) => `
      font-size: ${theme.typography.fontSize1};
      ${fieldDimensionStyle[dimension]}
    `}
  }
`;

SuggestContainer.defaultProps = {
  theme: DefaultTheme,
  width: "auto",
  dimension: "large",
  isDisabled: false,
  isError: false,
};

export const InputContainer = styled.div`
  position: relative;
`;

export const NoOptionStyle = styled.div<ISuggestStyle>`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 8px);
  display: block;
  max-height: 235px;
  padding-top: 0;
  overflow-y: auto;
  text-align: left;
  list-style: none;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  z-index: 8;

  ${({ theme, dimension }: ISuggestStyle) => `
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSize1};
    background: ${theme.colors.white};
    box-shadow: 0 24px 56px -16px ${rgba(theme.colors.plumbum, 0.2)},
      0 0 4px 0 ${rgba(theme.colors.plumbum, 0.02)};
    color: ${theme.colors.asphalt};
    
    ${dimension && optionDimensions[dimension]};
  `}
`;

NoOptionStyle.defaultProps = {
  theme: DefaultTheme,
  dimension: "large",
};

export const ErrorMessageStyle = styled.div<ISuggestStyle>`
  margin: 8px 0 0 16px;
  height: 36px;
  overflow: hidden;

  ${({ theme }: ISuggestStyle) => `
    color: ${theme.colors.redMain};
    font-size: 12px;
  `}
`;

ErrorMessageStyle.defaultProps = {
  theme: DefaultTheme,
};

export const TickIconStyled = styled(TickIcon)<ISuggestStyle>`
  width: 26px;
  height: 25px;

  & svg {
    fill: ${({ theme }: ISuggestStyle) => theme.colors.azure};
  }
`;

TickIconStyled.defaultProps = {
  theme: DefaultTheme,
};

export const CompoundLargeOptionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    font-size: 16px;
  }
  .caption {
    font-size: 13px;
    color: ${COLORS.asphalt};
  }
  span {
    font-weight: bold;
  }
`;
