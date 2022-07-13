import styled, { css } from "styled-components";
import { DefaultTheme } from "../../../Palette/export";

import { ISelectStyle } from "../../interfaces";

export const MenuListStyle = styled.div<ISelectStyle>`
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  overflow-y: auto;
  position: relative;
  border-radius: 8px;
  width: calc(100% - 2px);
  margin-right: 2px;
  ${({ dimension, maxHeight }: ISelectStyle) =>
    dimension === "small"
      ? css`
          max-height: ${maxHeight || 230}px;
        `
      : css`
          max-height: ${maxHeight || 300}px;
        `};

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }: ISelectStyle) => theme.colors.stonehenge};
    border-radius: 8px;
    border: 1px solid transparent;
    background-clip: content-box;
  }
`;

MenuListStyle.defaultProps = {
  theme: DefaultTheme,
};
