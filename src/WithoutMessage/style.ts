import styled from "styled-components";

import { DefaultTheme } from "../Palette/variables";

export const WithoutMessageStyle = styled.div`
  &.title {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.asphalt};
  }

  &.subtitle {
    font-size: 14px;
  }
`;

WithoutMessageStyle.defaultProps = {
  theme: DefaultTheme,
};
