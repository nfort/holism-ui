import React from "react";

import { ValueContainerStyle } from "./style";
import { IValueContainer } from "./interface";

const ValueContainer = ({ selectProps: { dimension }, children }: IValueContainer) => (
  <ValueContainerStyle data-element="select-valueContainer" dimension={dimension}>
    {children}
  </ValueContainerStyle>
);

export default ValueContainer;
