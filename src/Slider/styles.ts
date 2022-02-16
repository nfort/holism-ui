import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { IStyles } from './interfaces';

const setHeightForAllScreen = ({
  isOnAllScreen,
}: IStyles): FlattenSimpleInterpolation | undefined =>
  isOnAllScreen
    ? css`
        height: 100%;
      `
    : undefined;

const setSlideSizeStyles = ({ isOnAllScreen }: IStyles): FlattenSimpleInterpolation | undefined =>
  !isOnAllScreen
    ? css`
        position: relative;
      `
    : undefined;

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SlidesWrapper = styled.div<IStyles>`
  width: 100%;
  outline: none;

  ${setHeightForAllScreen};
  ${setSlideSizeStyles};
`;
