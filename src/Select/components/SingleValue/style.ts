import styled from "styled-components";
import { DefaultTheme } from "../../../Palette/export";

import { ISelectStyle } from "../../interfaces";

export const SingleValueStyle = styled.div<ISelectStyle>`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ dimension, theme }: ISelectStyle) => (dimension === "small" ? theme.colors.azure : theme.colors.plumbum)};
`;

SingleValueStyle.defaultProps = {
  theme: DefaultTheme,
};
