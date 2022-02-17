import React from "react";
import styled, {css} from "styled-components";
import { BorderRadius, COLORS } from "../Palette/export";
import {DefaultTheme, ITheme} from "../Palette/variables";
import Loader from "../Loader/Loader";

export function FieldLoading(props: Partial<ISuggestStyle>) {
  return <StyledField {...props}><div><Placeholder {...props}>Город</Placeholder></div><div><Loader color={COLORS.azure}/></div></StyledField>
}

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

export const StyledField = styled.div<ISuggestStyle>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  font-weight: normal;
  transition: border 0.3s ease-out, background 0.3s ease-out, opacity 0.3s ease-out,
    color 0.3s ease-out;
  

  ${({ theme, dimension = 'large' }: ISuggestStyle) => css`
    color: ${theme.colors.plumbum};
    border-color: ${theme.colors.greyDay};
    border: ${theme.borderWidth} solid ${theme.colors.greyDay};

    ${BorderRadius.roundBorder(theme.shape.borderRadiusDefault)};
    ${dimensionStyle[dimension]};
  `};
`;

export const Placeholder = styled.div<ISuggestStyle>`
  position: relative;
  left: 16px;
  box-sizing: border-box;
  white-space: nowrap;
  max-width: calc(100% - 48px);
  transition: all 0.3s;
  pointer-events: none;
  z-index: 7;
`;

Placeholder.defaultProps = {
  theme: DefaultTheme,
  dimension: 'large',
  isFocused: false,
  hasValue: false,
};

StyledField.defaultProps = {
  theme: DefaultTheme,
  dimension: 'large',
  isDisabled: false,
  isError: false,
  isFocused: false,
};

export type TDimension = 'small' | 'medium' | 'large';

export interface ISuggestStyle {
  isSuggestionsListOpened?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
  hasValue?: boolean;
  isError?: boolean;
  isShowError?: boolean;
  dimension?: TDimension;
  width?: string;
  theme: ITheme;
}
