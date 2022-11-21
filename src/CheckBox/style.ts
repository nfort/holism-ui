import styled, { css } from "styled-components";
import { QuestionIcon } from "@nfort/logistics-icons";

import { ITheme, DefaultTheme } from "../Palette/variables";

import { IProps, TDimension } from "./interfaces";

interface ICheck extends Partial<IProps> {
  theme: ITheme;
  isCanHideItems?: boolean;
}

const markAfter = (theme: ITheme, dimension?: TDimension, isDisabled?: boolean) => css`
  width: ${dimension === "small" ? "5px" : "6px"};
  height: ${dimension === "small" ? "8px" : "10px"};
  left: ${dimension === "small" ? "5px" : "6px"};
  top: ${dimension === "small" ? "2px" : "3px"};
  border: solid ${isDisabled ? theme.colors.greyDay : theme.colors.white};
  border-width: 0 2.5px 2.5px 0;
  transform: rotate(45deg);
`;

const partMarkAfter = (theme: ITheme, dimension?: TDimension, isDisabled?: boolean) => css`
  width: ${dimension === "small" ? "8px" : "10px"};
  height: 2.5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${isDisabled ? theme.colors.greyDay : theme.colors.white};
`;

export const Mark = styled.span<ICheck>`
  box-sizing: border-box;
  position: absolute;
  transition: 0.2s;
  outline: none;
  ${({ dimension, isDisabled, theme }: ICheck) => css`
    top: ${dimension === "small" ? 10 : 12}px;
    height: ${dimension === "small" ? 16 : 20}px;
    width: ${dimension === "small" ? 16 : 20}px;
    background-color: ${isDisabled ? theme.colors.rainySky : theme.colors.white};
    border: solid ${theme.borderWidth} ${isDisabled ? theme.colors.rainySky : theme.colors.stonehenge};
    border-radius: 4px;
  `};
  transform: translateY(-50%);
  left: 0;

  &:after {
    box-sizing: border-box;
    content: "";
    position: absolute;
    display: none;
    ${({ isPartChecked, dimension, theme, isDisabled }: ICheck) =>
      isPartChecked ? partMarkAfter(theme, dimension, isDisabled) : markAfter(theme, dimension, isDisabled)};
  }
`;

Mark.defaultProps = {
  theme: DefaultTheme,
};

export const Input = styled.input<ICheck>`
  box-sizing: border-box;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: -2px;
  opacity: 0;
  min-height: inherit;
  margin: 0;
  width: ${({ dimension }: ICheck) => (dimension === "medium" ? "24px" : "20px")};

  &:checked ~ ${Mark} {
    ${({ theme, isDisabled }: ICheck) => css`
      border: solid ${theme.borderWidth} ${isDisabled ? theme.colors.rainySky : theme.colors.sapphire};
      background-color: ${isDisabled ? theme.colors.rainySky : theme.colors.sapphire};

      &:after {
        display: block !important;
      }
    `}
  }
`;

Input.defaultProps = {
  theme: DefaultTheme,
};

export const CheckBoxComponent = styled.div<ICheck>`
  box-sizing: border-box;
  ${({ theme, isDisabled }: ICheck) => `
    font-family: ${theme.typography.fontFamily};
    line-height: ${theme.typography.lineHeight2};
    color: ${isDisabled ? theme.colors.asphalt : theme.colors.plumbum};
  `};
  display: flex;
  position: relative;
  padding-left: 36px;
  cursor: pointer;
  font-weight: normal;
  user-select: none;
  ${({ isDisabled }: ICheck) => isDisabled && "pointer-events: none;"}
  ${({ dimension, theme }: ICheck) =>
    dimension === "small"
      ? `
  padding-left: 28px;
  min-height: 20px;
  font-size: ${theme.typography.fontSize2};`
      : `
  min-height: 24px;
  font-size: ${theme.typography.fontSize1};`} 
  
  ${({ isError, theme }: ICheck) =>
    isError &&
    css`
      ${Mark} {
        border: solid ${theme.borderWidth} ${theme.colors.redMain};
      }
    `}
  
  ${({ isPartChecked, theme }: ICheck) =>
    isPartChecked &&
    css`
      ${Mark} {
        border: solid ${theme.borderWidth} ${theme.colors.sapphire};
        background-color: ${theme.colors.sapphire};

        &:after {
          display: block !important;
        }
      }
    `}
  
  &:hover,
  &:focus {
    outline: none;

    ${Input}:not(:checked) ~ ${Mark} {
      border-color: ${({ theme }: ICheck) => theme.colors.blueLake};
      background-color: ${({ theme }: ICheck) => theme.colors.johnSnow};
    }
  }
`;

CheckBoxComponent.defaultProps = {
  theme: DefaultTheme,
};

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const CheckBoxCompItem = styled.div<ICheck>`
  box-sizing: border-box;
  position: relative;
  padding-left: 24px;
  margin-bottom: 18px;

  ::before {
    position: absolute;
    content: "";
    background: ${({ theme }: ICheck) => theme.colors.stonehenge};
    width: 13px;
    height: 1px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

CheckBoxCompItem.defaultProps = {
  theme: DefaultTheme,
};

export const CheckBoxCompItems = styled.div<ICheck>`
  margin-left: ${({ dimension }) => (dimension === "small" ? "7px" : "9px")};
  margin-top: 12px;
  padding-top: 6px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  ${CheckBoxCompItem}:last-child {
    margin-bottom: 0;
  }

  ::before {
    position: absolute;
    content: "";
    background: ${({ theme }: ICheck) => theme.colors.stonehenge};
    width: 1px;
    height: 100%;
    left: 0;
    top: ${({ dimension }) => (dimension && dimension === "small" ? "-10px" : "-12px")};
  }
`;

CheckBoxCompItems.defaultProps = {
  theme: DefaultTheme,
};

export const GroupWrapper = styled.div<ICheck>`
  position: relative;
  padding-left: ${({ isCanHideItems }) => (isCanHideItems ? "20px" : "0")};
`;

export const IconBox = styled.div<ICheck>`
  display: ${({ isCanHideItems }) => (isCanHideItems ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledInfoIcon = styled(QuestionIcon)<ICheck>`
  margin-left: 3px;
  svg {
    fill: ${({ theme }: ICheck) => theme.colors.stonehenge};
  }

  &:hover svg {
    fill: ${({ theme }: ICheck) => theme.colors.sapphire};
  }
`;

StyledInfoIcon.defaultProps = {
  theme: DefaultTheme,
};

export const CheckBoxGroupItem = styled.div`
  margin-bottom: 16px;
`;

export const CheckboxGroupItems = styled.div`
  ${CheckBoxGroupItem}:last-child {
    margin-bottom: 0;
  }
`;
