import { ArrowDownIcon, CloseIcon, LockIcon } from "@nfort/logistics-icons";
import styled, { css } from "styled-components";

import { DefaultTheme, ITheme } from "../../../Palette/variables";
import { ISelectStyle } from "../../interfaces";

const svgRepeatedStyles = (theme: ITheme) => css`
  svg {
    fill: ${theme.colors.greyDay};
  }

  &:hover {
    svg {
      fill: ${theme.colors.asphalt};
    }
  }
`;

export const IndicatorsContainerStyle = styled.div`
  align-self: stretch;
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  align-items: baseline;
`;

export const CloseIconStyle = styled(CloseIcon)<ISelectStyle>`
  cursor: pointer;
  margin-right: 5px;

  ${({ theme }: ISelectStyle) => svgRepeatedStyles(theme)}
`;

CloseIconStyle.defaultProps = {
  theme: DefaultTheme,
};

export const ArrowDownIconStyle = styled(ArrowDownIcon)<ISelectStyle>`
  cursor: pointer;
  ${({ theme }: ISelectStyle) => svgRepeatedStyles(theme)}
  ${({ menuIsOpen }) =>
    menuIsOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

ArrowDownIconStyle.defaultProps = {
  theme: DefaultTheme,
};

export const LockIconStyle = styled(LockIcon)<ISelectStyle>`
  cursor: pointer;
  ${({ theme }: ISelectStyle) => svgRepeatedStyles(theme)}
  ${({ menuIsOpen }) =>
    menuIsOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

LockIconStyle.defaultProps = {
  theme: DefaultTheme,
};
