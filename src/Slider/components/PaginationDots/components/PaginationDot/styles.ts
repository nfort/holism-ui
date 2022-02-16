import styled, { keyframes, css, FlattenSimpleInterpolation } from 'styled-components';
import { DefaultTheme } from '../../../../../Palette/export';

import { IStyles } from './interfaces';

const setDotWidth = ({ isActive }: IStyles): string => (isActive ? '32px' : '8px');
const setCursor = ({ isActive }: IStyles): string => (isActive ? 'default' : 'pointer');
const setDotOpacity = ({ isActive }: IStyles): number => (isActive ? 0.8 : 0.3);
const setColorAsphalt = ({ theme }: IStyles): string => theme.colors.asphalt;
const setAnimation = ({ animationDuration }: IStyles): FlattenSimpleInterpolation => css`
  animation: ${setProgress} ${animationDuration}s linear;
`;

const setProgress = keyframes`
  from {
    width: 14%;
  }

  to {
    width: calc(100% - 12px);
  }
`;

export const Container = styled.button<IStyles>`
  position: relative;
  padding: 4px 6px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: ${setCursor};
`;

export const Dot = styled.div<IStyles>`
  height: 8px;
  width: ${setDotWidth};
  background-color: ${setColorAsphalt};
  opacity: ${setDotOpacity};
  border-radius: 4px;
  transition: opacity 350ms ease-in-out, background-color 350ms ease-in-out, width 350ms ease-in-out;
`;

export const AnimatedPart = styled.div<IStyles>`
  position: absolute;
  top: 4px;
  left: 6px;
  width: calc(100% - 12px);
  height: 8px;
  border-radius: 4px;
  background-color: ${setColorAsphalt};

  ${setAnimation}
`;

Dot.defaultProps = {
  theme: DefaultTheme,
};
AnimatedPart.defaultProps = {
  theme: DefaultTheme,
};
