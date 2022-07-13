import React from "react";
import { components, OptionTypeBase } from "react-select";
import { IndicatorContainerProps } from "react-select/src/components/containers";

import { IndicatorsContainerStyle } from "./style";

/* @ts-ignore */
const IndicatorsContainer = (props: IndicatorContainerProps<OptionTypeBase>) => (
  <IndicatorsContainerStyle data-element="select-indicatorsContainer">
    <components.IndicatorsContainer {...props} />
  </IndicatorsContainerStyle>
);

export default IndicatorsContainer;
