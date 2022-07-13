import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { DefaultTheme, ITheme } from "../../../Palette/variables";

import { IIndicatorContainer } from "./interfaces";
import IndicatorContainer from "./Indicator";
import { CloseIconStyle } from "./style";

const ClearIndicator = (props: IIndicatorContainer) => {
  /* @ts-ignore */
  const theme: ITheme = useContext(ThemeContext) || DefaultTheme;

  return (
    <IndicatorContainer {...props}>
      <CloseIconStyle size={24} color={theme.colors.asphalt} />
    </IndicatorContainer>
  );
};

export default ClearIndicator;
