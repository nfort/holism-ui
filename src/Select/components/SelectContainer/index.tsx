import React from "react";
import { components } from "react-select";

import { ContainerSelectStyle, ErrorMessageStyle, LabelStyle, Placeholder, WrapperSelectStyle } from "./style";
import { ISelectComponent } from "./interfaces";

export const SelectContainerComponent = (props: ISelectComponent) => {
  const { hasValue, isFocused, selectProps, children } = props;
  const {
    dimension,
    width,
    className,
    menuIsOpen,
    isError,
    isDisabled,
    isMobile,
    errorMessage,
    placeholder,
    label,
    name = "",
  } = selectProps;

  return (
    <WrapperSelectStyle width={width} className={className}>
      {label && (
        <LabelStyle
          data-element="select-label"
          htmlFor={name || ""}
          hasValue={hasValue}
          isError={isError}
          isFocused={isFocused}
        >
          {label}
        </LabelStyle>
      )}
      <ContainerSelectStyle
        data-element="select-container"
        menuIsOpen={menuIsOpen}
        isDisabled={isDisabled}
        isMobile={isMobile}
      >
        <Placeholder
          error={errorMessage}
          data-element="select-placeholder"
          isFocused={isFocused}
          isHasValue={hasValue}
          dimension={dimension}
        >
          {placeholder}
        </Placeholder>
        {/* @ts-ignore */}
        <components.SelectContainer {...props}>{children}</components.SelectContainer>
      </ContainerSelectStyle>
      {isError && errorMessage && (
        <ErrorMessageStyle data-element="select-errorMessage">{errorMessage}</ErrorMessageStyle>
      )}
    </WrapperSelectStyle>
  );
};

export default SelectContainerComponent;
