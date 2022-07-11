import styled, { css, SimpleInterpolation } from 'styled-components';
import { rgba } from 'polished';

import { DefaultTheme, ITheme } from '../Palette/variables';

import { IProps, TButtonColors } from './interfaces';

interface IButton extends Partial<IProps> {
  theme: ITheme;
}

const xsmall = (theme: ITheme, isWithIcon?: boolean) => css`
  font-size: ${theme.typography.fontSize3};
  line-height: ${theme.typography.lineHeight3};
  padding: ${isWithIcon ? '4px' : '7px 20px'};

  > *:not(:first-child) {
    margin-left: 8px;
  }
`;

const small = (theme: ITheme, isWithIcon?: boolean) => css`
  font-size: ${theme.typography.fontSize2};
  line-height: ${theme.typography.lineHeight2};
  padding: ${isWithIcon ? '8px' : '9px 26px'};

  > *:not(:first-child) {
    margin-left: 8px;
  }
`;

const medium = (theme: ITheme, isWithIcon?: boolean) => css`
  font-size: ${theme.typography.fontSize1};
  line-height: ${theme.typography.lineHeight2};
  padding: ${isWithIcon ? '12px' : '13px 32px'};

  > *:not(:first-child) {
    margin-left: 12px;
  }
`;

const large = (theme: ITheme, isWithIcon?: boolean) => css`
  font-size: ${theme.typography.fontSize1};
  line-height: ${theme.typography.lineHeight2};
  padding: ${isWithIcon ? '15px' : '17px 32px'};

  > *:not(:first-child) {
    margin-left: 12px;
  }
`;

const isWithIconStyle = (color: string) => css`
  div {
    cursor: pointer;
    svg {
      fill: ${color};
    }
  }
`;

const dimensionButtonContent = {
  xsmall,
  small,
  medium,
  large,
};

const primary: TColorButtonCSS = (theme, isWithIcon, isLoading, isDisabled) =>
  isDisabled
    ? disabledStyle(theme, isWithIcon)
    : css`
        background-color: ${isLoading ? theme.colors.ultramarine : theme.colors.sapphire};
        border: solid ${theme.borderWidth}
          ${isLoading ? theme.colors.ultramarine : theme.colors.sapphire};
        ${isWithIcon && isWithIconStyle(theme.colors.white)};
        color: ${theme.colors.white};

        &:hover {
          background-color: ${theme.colors.indigo};
          border: solid ${theme.borderWidth} ${theme.colors.indigo};
        }

        &:active {
          background-color: ${theme.colors.ultramarine};
          border: solid ${theme.borderWidth} ${theme.colors.ultramarine};
        }

        &:focus {
          box-shadow: 0 0 0 4px ${theme.colors.blueberry};
        }
      `;

const secondary: TColorButtonCSS = (theme, isWithIcon, isLoading, isDisabled) =>
  isDisabled
    ? disabledStyle(theme, isWithIcon)
    : css`
        background-color: ${theme.colors.diamond};
        border: solid ${theme.borderWidth} ${theme.colors.diamond};
        ${isWithIcon && isWithIconStyle(theme.colors.sapphire)};
        color: ${theme.colors.sapphire};

        &:hover {
          background-color: ${theme.colors.blueberry};
          border: solid ${theme.borderWidth} ${theme.colors.blueberry};
          color: ${theme.colors.sapphire};
        }

        &:active {
          background-color: ${theme.colors.blueberry};
          border: solid ${theme.borderWidth} ${theme.colors.blueberry};
          color: ${theme.colors.sapphire};
        }

        &:focus {
          box-shadow: 0 0 0 4px ${theme.colors.diamond};
        }
      `;

const tertiary: TColorButtonCSS = (theme, isWithIcon, isLoading, isDisabled) => css`
  background-color: ${theme.colors.white};
  border: solid ${theme.borderWidth} ${isDisabled ? theme.colors.rainySky : theme.colors.blueberry};
  ${isWithIcon && isWithIconStyle(isDisabled ? theme.colors.asphalt : theme.colors.sapphire)};
  color: ${isDisabled ? theme.colors.asphalt : theme.colors.sapphire};

  &:hover {
    border-color: ${theme.colors.indigo};
    color: ${theme.colors.ultramarine};
  }

  &:active {
    border-color: ${theme.colors.ultramarine};
    color: ${theme.colors.ultramarine};
  }

  &:focus {
    background-color: ${theme.colors.diamond};
    border-color: ${theme.colors.blueberry};
    box-shadow: 0 0 0 4px ${theme.colors.diamond};
  }

  ${isDisabled &&
    css`
      cursor: default;
      pointer-events: none;
    `}
`;

const danger: TColorButtonCSS = (theme, isWithIcon, isLoading, isDisabled) =>
  isDisabled
    ? disabledStyle(theme, isWithIcon)
    : css`
        background-color: ${isLoading ? theme.colors.redBrick : theme.colors.redMain};
        border: solid ${theme.borderWidth}
          ${isLoading ? theme.colors.redBrick : theme.colors.redMain};
        ${isWithIcon && isWithIconStyle(theme.colors.white)};
        color: ${theme.colors.white};

        &:hover {
          background-color: ${theme.colors.redRose};
          border: solid ${theme.borderWidth} ${theme.colors.redRose};
        }

        &:active {
          background-color: ${theme.colors.redBrick};
          border: solid ${theme.borderWidth} ${theme.colors.redBrick};
        }

        &:focus {
          box-shadow: 0 0 0 4px ${theme.colors.pig};
        }
      `;

const dangerSecondary: TColorButtonCSS = (theme, isWithIcon, isLoading, isDisabled) =>
  isDisabled
    ? disabledStyle(theme, isWithIcon)
    : css`
        background-color: ${isLoading ? theme.colors.redRose : theme.colors.pig};
        border: solid ${theme.borderWidth} ${isLoading ? theme.colors.redRose : theme.colors.pig};
        ${isWithIcon && isWithIconStyle(theme.colors.redMain)};
        color: ${theme.colors.redMain};

        &:hover {
          background-color: ${theme.colors.embarrassedPig};
          border: solid ${theme.borderWidth} ${theme.colors.embarrassedPig};
        }

        &:active {
          background-color: ${theme.colors.embarrassedPig};
          border: solid ${theme.borderWidth} ${theme.colors.redMain};
        }

        &:focus {
          background-color: ${theme.colors.embarrassedPig};
          border: solid ${theme.borderWidth} ${theme.colors.embarrassedPig};
          box-shadow: 0 0 0 4px ${theme.colors.pig};
        }
      `;

const success: TColorButtonCSS = (theme, isWithIcon, isLoading, isDisabled) =>
  isDisabled
    ? disabledStyle(theme, isWithIcon)
    : css`
        background-color: ${isLoading ? theme.colors.lime : theme.colors.green};
        border: solid ${theme.borderWidth} ${isLoading ? theme.colors.lime : theme.colors.green};
        ${isWithIcon && isWithIconStyle(theme.colors.white)};
        color: ${theme.colors.white};

        &:hover {
          background-color: ${theme.colors.spring};
          border: solid ${theme.borderWidth} ${theme.colors.spring};
        }

        &:active {
          background-color: ${theme.colors.lime};
          border: solid ${theme.borderWidth} ${theme.colors.lime};
        }

        &:focus {
          box-shadow: 0 0 0 4px ${theme.colors.mint};
        }
      `;

const successSecondary: TColorButtonCSS = (theme, isWithIcon, isLoading, isDisabled) =>
  isDisabled
    ? disabledStyle(theme, isWithIcon)
    : css`
        background-color: ${isLoading ? theme.colors.spring : theme.colors.mint};
        border: solid ${theme.borderWidth} ${isLoading ? theme.colors.spring : theme.colors.mint};
        ${isWithIcon && isWithIconStyle(theme.colors.spring)};
        color: ${theme.colors.spring};

        &::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          z-index: -1;

          transition: background-color 0.3s, box-shadow 0.3s;

          background-color: transparent;
          box-shadow: inset 0 0 16px 0 transparent;
          border-radius: 12px;
        }

        &:hover {
          color: ${theme.colors.white};
          background-color: ${theme.colors.green};
          border: solid ${theme.borderWidth} ${theme.colors.green};
        }

        &:active {
          color: ${theme.colors.white};
          background-color: ${theme.colors.spring};
          border: solid ${theme.borderWidth} ${theme.colors.spring};
        }

        &:focus {
          position: relative;
          background-color: ${theme.colors.mint};
          border: solid ${theme.borderWidth} ${theme.colors.mint};

          &::before {
            background-color: ${theme.colors.mint};
            box-shadow: inset 0 0 16px 0 ${rgba(theme.colors.green, 0.2)};
          }
        }
      `;

const white: TColorButtonCSS = (theme, isWithIcon, isLoading, isDisabled) =>
  isDisabled
    ? disabledStyle(theme, isWithIcon)
    : css`
        background-color: ${theme.colors.white};
        border: solid ${theme.borderWidth} ${theme.colors.white};
        ${isWithIcon && isWithIconStyle(theme.colors.sapphire)};
        color: ${theme.colors.sapphire};

        &:hover {
          background-color: ${theme.colors.blueberry};
          border: solid ${theme.borderWidth} ${theme.colors.blueberry};
        }

        &:active {
          background-color: ${theme.colors.blueLake};
          border: solid ${theme.borderWidth} ${theme.colors.blueLake};
        }

        &:focus {
          box-shadow: 0 0 0 4px ${theme.colors.blueberry};
        }
      `;

const disabledStyle = (theme: ITheme, isWithIcon?: boolean) => css`
  background-color: ${theme.colors.rainySky};
  border: solid ${theme.borderWidth} ${theme.colors.rainySky};
  ${isWithIcon && isWithIconStyle(theme.colors.asphalt)};
  color: ${theme.colors.asphalt};
  cursor: default;
  pointer-events: none;
`;

type TColorButtonCSS = (
  theme: ITheme,
  isWithIcon?: boolean,
  isLoading?: boolean,
  isDisabled?: boolean
) => ReadonlyArray<SimpleInterpolation>;

const colorButton: Record<TButtonColors, TColorButtonCSS> = {
  primary,
  secondary,
  tertiary,
  danger,
  ['danger-secondary']: dangerSecondary,
  success,
  ['success-secondary']: successSecondary,
  white,
};

export const ButtonContent = styled.span<IButton>`
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: ${({ isFullWidth }) => (isFullWidth ? 'flex' : 'inline-flex')};
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }

  ${({ dimension, isWithIcon, theme }: IButton) =>
    dimension && dimensionButtonContent[dimension](theme, isWithIcon)};
`;

ButtonContent.defaultProps = {
  theme: DefaultTheme,
};

export const LoaderStyle = styled.div<IButton>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

LoaderStyle.defaultProps = {
  theme: DefaultTheme,
};

export const ButtonComponent = styled.button<IButton>`
  padding: 0;
  position: relative;
  transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s, color 0.3s;
  ${({ isFullWidth, width, theme }) => css`
    width: ${isFullWidth ? '100%' : width || 'auto'};
    font-family: ${theme.typography.fontFamily};
    display: ${isFullWidth ? 'flex' : 'inline-flex'};
    border-radius: ${theme.shape.borderRadiusDefault};
  `};
  text-decoration: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  ${({ isLoading }: IButton) => css`
    cursor: ${isLoading ? 'default' : 'pointer'};
    pointer-events: ${isLoading ? 'none' : 'auto'};
  `};

  -webkit-tap-highlight-color: transparent;
  ${({ color, isDisabled, isWithIcon, isLoading, theme }) => {
    return color && colorButton[color](theme, isWithIcon, isLoading, isDisabled);
  }}

  &::-moz-focus-inner {
    border: 0;
  }

  &:focus {
    outline: none;
  }
  
  ${LoaderStyle} ~ ${ButtonContent} {
    opacity: 0;
  }
`;

ButtonComponent.defaultProps = {
  theme: DefaultTheme,
};
