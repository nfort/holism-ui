import { rgba } from "polished";
import styled, { css } from "styled-components";
import { DefaultTheme } from "../../../Palette/export";

import { ISelectStyle } from "../../interfaces";

export const MenuStyle = styled.div<ISelectStyle>`
  display: flex;
  justify-content: center;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  border: 1px solid ${({ theme }: ISelectStyle) => theme.colors.johnSnow};
  transition: all 0.3s ease-out;

  ${({ theme }: ISelectStyle) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0 24px 56px -16px ${rgba(theme.colors.plumbum, 0.2)}, 0 0 4px 0 ${rgba(theme.colors.plumbum, 0.02)};
  `};

  ${({ isError, menuIsOpen, isFocused }: ISelectStyle) =>
    !isError &&
    (menuIsOpen || isFocused) &&
    css`
      left: -2px;
    `};
  border-radius: 8px;
  box-sizing: border-box;
  z-index: 8;
`;

MenuStyle.defaultProps = {
  theme: DefaultTheme,
};
