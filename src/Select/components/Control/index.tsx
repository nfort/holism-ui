import React from "react";
import { ControlProps, OptionTypeBase } from "react-select";

import { ControlSelectStyle } from "./style";

/* @ts-ignore */
export const ControlComponent = (props: ControlProps<OptionTypeBase>) => {
  const { innerRef, innerProps, isDisabled, selectProps, isFocused, children } = props;
  const { dimension, menuIsOpen, isError, isMobile } = selectProps;

  return (
    <ControlSelectStyle
      data-element="select-controlComponent"
      ref={innerRef}
      menuIsOpen={menuIsOpen}
      dimension={dimension}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isError={isError}
      isMobile={isMobile}
      {...innerProps}
    >
      {children}
    </ControlSelectStyle>
  );
};

export default ControlComponent;
