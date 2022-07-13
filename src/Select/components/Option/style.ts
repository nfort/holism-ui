import { TickIcon } from "@holism/icons";
import styled, { css } from "styled-components";
import { DefaultTheme } from "../../../Palette/export";

import { IDimension, ISelectStyle } from "../../interfaces";

const optionDimensions = (dimension: IDimension | undefined) => {
  switch (dimension) {
    case "small": {
      return "padding: 12px 4px 12px 20px";
    }
    case "large": {
      return "padding: 19px 4px 19px 20px";
    }
    case "medium":
    default: {
      return "padding: 17px 4px 17px 20px";
    }
  }
};

export const OptionStyle = styled.div<ISelectStyle>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme, isDisabled }: ISelectStyle) => css`
    font-size: ${theme.typography.fontSize1};
    color: ${isDisabled ? theme.colors.asphalt : theme.colors.plumbum};
    cursor: ${isDisabled ? "default" : "pointer"};
    pointer-events: ${isDisabled ? "none" : "auto"};
  `}
  ${({ dimension }) => optionDimensions(dimension)};

  &:hover {
    background-color: ${({ theme }: ISelectStyle) => theme.colors.johnSnow};
  }
`;

OptionStyle.defaultProps = {
  theme: DefaultTheme,
};

export const OptionContentStyle = styled.div<ISelectStyle>`
  width: 100%;
`;

export const TitleStyle = styled.p<ISelectStyle>`
  color: ${({ theme, isDisabled }: ISelectStyle) => (isDisabled ? theme.colors.asphalt : theme.colors.plumbum)};
`;

TitleStyle.defaultProps = {
  theme: DefaultTheme,
};

export const SubtitleStyle = styled.p<ISelectStyle>`
  font-size: 14px;
  color: ${({ theme }: ISelectStyle) => theme.colors.asphalt};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

SubtitleStyle.defaultProps = {
  theme: DefaultTheme,
};

export const TickIconStyled = styled(TickIcon)<ISelectStyle>`
  width: 26px;
  height: 24px;

  & svg {
    fill: ${({ theme }: ISelectStyle) => theme.colors.azure};
  }
`;

TickIconStyled.defaultProps = {
  theme: DefaultTheme,
};
