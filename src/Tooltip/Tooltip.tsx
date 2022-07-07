import React from "react";

import { DefaultTheme } from "../Palette/variables";

import { IProps } from "./interfaces";
import { Span, TippyStyle } from "./style";

const Tooltip = (props: IProps) => {
  const {
    children,
    title,
    position,
    isDelay,
    isDisabled,
    appendTo,
    className,
    trigger = "mouseenter focus",
    interactive = true,
    isTextArea = false,
  } = props;

  return (
    <TippyStyle
      theme="light-border"
      $componentTheme={DefaultTheme}
      content={title}
      placement={position}
      delay={isDelay ? [1500, 0] : 0}
      disabled={isDisabled}
      appendTo={appendTo}
      maxWidth={300}
      trigger={trigger}
      interactive={interactive}
      $isTextArea={isTextArea}
    >
      <Span tabIndex={0} data-element="tooltip-component" className={className}>
        {children}
      </Span>
    </TippyStyle>
  );
};

Tooltip.defaultProps = {
  position: "bottom",
  appendTo: "parent",
};

export default Tooltip;
