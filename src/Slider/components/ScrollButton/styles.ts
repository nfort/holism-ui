import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { ArrowLeftIcon, ArrowRightIcon } from "@nfort/logistics-icons";

import { EDirection, IStyles } from "./interfaces";
import { DefaultTheme } from "../../../Palette/export";

const setColorJohnSnow = ({ theme }: IStyles): string => theme.colors.johnSnow;
const setColorSapphire = ({ theme }: IStyles): string => theme.colors.sapphire;
const setColorWhite = ({ theme }: IStyles): string => theme.colors.white;
const setPositionForAllScreen = (direction: EDirection): FlattenSimpleInterpolation => {
  switch (direction as EDirection) {
    case EDirection.left:
      return css`
        left: 32px;
      `;
    case EDirection.right:
      return css`
        right: 32px;
      `;
  }
};
const setBtnPosition = ({ direction, isOnAllScreen }: IStyles): FlattenSimpleInterpolation => {
  if (isOnAllScreen) {
    return setPositionForAllScreen(direction as EDirection);
  }

  switch (direction as EDirection) {
    case EDirection.left:
      return css`
        left: -24px;
      `;
    case EDirection.right:
      return css`
        right: -24px;
      `;
  }
};

const BaseWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
const BaseIcon = css<IStyles>`
  width: 24px;
  height: 24px;
  cursor: pointer;

  svg {
    fill: ${setColorSapphire};
  }
`;

export const Container = styled.button<IStyles>`
  ${BaseWrapper};

  width: 40px;
  height: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
  background-color: ${setColorJohnSnow};

  &:active {
    transform: scale(0.9);
    transition: transform 150ms ease-in-out;
  }
`;

export const Inner = styled.div<IStyles>`
  ${BaseWrapper};

  width: 30px;
  height: 30px;
  transition: background-color 200ms ease-in-out;
  background-color: ${setColorWhite};
`;

export const Wrapper = styled.div<IStyles>`
  ${BaseWrapper};
  ${setBtnPosition};

  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(1);
  width: 48px;
  height: 48px;
  cursor: pointer;

  &:hover {
    transform: translateY(-50%) scale(1.05);
    transition: transform 200ms ease-in-out;

    ${Container} {
      background-color: ${setColorWhite};
    }

    ${Inner} {
      background-color: ${setColorJohnSnow};
    }
  }
`;

export const LeftButton = styled(ArrowLeftIcon)<IStyles>`
  ${BaseIcon}
`;

export const RightButton = styled(ArrowRightIcon)<IStyles>`
  ${BaseIcon}
`;

Container.defaultProps = {
  theme: DefaultTheme,
  type: "button",
};
Inner.defaultProps = {
  theme: DefaultTheme,
};
Wrapper.defaultProps = {
  theme: DefaultTheme,
};
LeftButton.defaultProps = {
  theme: DefaultTheme,
};
RightButton.defaultProps = {
  theme: DefaultTheme,
};
