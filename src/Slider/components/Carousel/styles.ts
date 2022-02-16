import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { IStyles, TSlideShift } from './interfaces';

const setSlideShift = (slideShift: number | undefined, type: TSlideShift) => {
  switch (type) {
    case 'positive':
      return css`
        right: ${`${slideShift}px`};
      `;
    case 'negative':
      return css`
        margin-left: ${`-${slideShift}px`};
      `;
  }
};
const setActiveState = ({ isActive }: IStyles): FlattenSimpleInterpolation | undefined =>
  !isActive
    ? css`
        & > div {
          pointer-events: none;
          opacity: 0;
          transition: opacity 1.5s ease-out;
        }
      `
    : undefined;
const setBorderRadius = ({ isReactElement }: IStyles): FlattenSimpleInterpolation | undefined =>
  !isReactElement
    ? css`
        border-radius: 16px;
      `
    : undefined;

export const SliderContentContainer = styled.div<IStyles>`
  overflow: hidden;

  ${setBorderRadius};
`;

export const SliderContent = styled.div<IStyles>`
  width: 100%;
  display: flex;
  transition: margin-left 1.5s;

  ${({ slideShift }: IStyles) => setSlideShift(slideShift, 'negative')};
`;

export const ImageWrapper = styled.div<IStyles>`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  border-radius: 16px;
`;

export const ImageContainer = styled.picture<IStyles>`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  position: relative;
  transition: right 1.5s;

  ${({ slideShift }: IStyles) => setSlideShift(slideShift, 'positive')};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ReactElementContainer = styled.div<IStyles>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  ${setActiveState};
`;
