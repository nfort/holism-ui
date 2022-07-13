import React from "react";

import { IIndicatorContainer } from "./interfaces";

const IndicatorContainer = ({
  getStyles,
  innerProps: { ref, ...restInnerProps },
  children,
  ...props
}: IIndicatorContainer) => (
  <div
    data-element="select-dropdownIndicator"
    {...restInnerProps}
    ref={ref}
    style={{
      ...getStyles("clearIndicator", props),
      padding: 0,
    }}
  >
    {children}
  </div>
);

export default IndicatorContainer;
