import styled, { css } from "styled-components";

import Button from "../Button/Button";
import { LoaderStyle } from "../Loader/style";
import { DefaultTheme, MEDIA } from "../Palette/variables";

import { IBabyButtonStyle } from "./interfaces";

export const ButtonBabyStyle = styled(Button)<IBabyButtonStyle>`
  height: 48px;
  margin-bottom: 8px;
  border-radius: 16px;

  ${({ isLoading, theme }: IBabyButtonStyle) =>
    isLoading &&
    css`
      background-color: ${theme.colors.blueLake};
      border-color: ${theme.colors.blueLake};

      & ${LoaderStyle} > div {
        border-color: ${({ theme }: IBabyButtonStyle) => theme.colors.white} transparent transparent transparent;
      }
    `}

  &:active {
    background-color: ${({ theme }: IBabyButtonStyle) => theme.colors.blueLake};
    border-color: ${({ theme }: IBabyButtonStyle) => theme.colors.blueLake};

    & ${LoaderStyle} > div {
      border-color: ${({ theme }: IBabyButtonStyle) => theme.colors.white} transparent transparent transparent;
    }
  }

  &:focus {
    box-shadow: 0 0 0 4px ${({ theme }: IBabyButtonStyle) => theme.colors.diamond};
  }
`;

ButtonBabyStyle.defaultProps = {
  theme: DefaultTheme,
};

export const ButtonBabyWrapperStyle = styled.div<IBabyButtonStyle>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 94px;
  @media ${MEDIA.tablet} {
    width: 112px;
  }

  padding: 0 1px;

  ${({ theme, isDisabled, isLoading }: IBabyButtonStyle) => css`
    cursor: ${isDisabled || isLoading ? "default" : "pointer"};

    ${!isDisabled &&
    !isLoading &&
    css`
      &:hover {
        ${ButtonBabyStyle} {
          background-color: ${theme.colors.blueberry};
          border-color: ${theme.colors.blueberry};
        }
      }
    `}
  `};
`;

ButtonBabyWrapperStyle.defaultProps = {
  theme: DefaultTheme,
};

export const ButtonBabyTextStyle = styled.p<IBabyButtonStyle>`
  text-align: center;
  max-height: 40px;
  max-width: 86px;
  @media ${MEDIA.tablet} {
    max-width: 104px;
  }

  overflow: hidden;

  ${({ theme, isDisabled }: IBabyButtonStyle) => css`
    font-size: ${theme.typography.fontSize2};
    @media ${MEDIA.tablet} {
      font-size: ${theme.typography.fontSize1};
    }
    line-height: ${theme.typography.lineHeight2};
    color: ${isDisabled ? theme.colors.asphalt : theme.colors.sapphire};
  `}
`;

ButtonBabyTextStyle.defaultProps = {
  theme: DefaultTheme,
};
