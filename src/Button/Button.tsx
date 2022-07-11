import React, { MouseEvent } from "react";
import Loader from "../Loader/Loader";

import { ButtonComponent, ButtonContent, LoaderStyle } from "./style";
import { IProps } from "./interfaces";
import { COLORS } from "../Palette/Colors";

const Button = (props: IProps) => {
  const {
    id,
    color,
    dimension,
    type,
    width,
    isWithIcon,
    isFullWidth,
    isLoading,
    isDisabled,
    onClick,
    children,
    className,
    testID,
  } = props;

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>): void => {
    onClick?.(event, id);
  };

  const loaderColors = {
    primary: COLORS.white,
    secondary: COLORS.sapphire,
    tertiary: COLORS.azure,
    danger: COLORS.redMain,
    green: COLORS.lime,
    white: COLORS.azure,
    disabled: COLORS.greyDay,
  };

  return (
    <ButtonComponent
      data-test-id={`button_${testID}`}
      data-element="button-component"
      id={id}
      onClick={handleOnClick}
      color={color}
      type={type}
      dimension={dimension}
      isWithIcon={isWithIcon}
      isFullWidth={isFullWidth}
      isLoading={isLoading}
      width={width}
      disabled={isDisabled}
      isDisabled={isDisabled}
      className={className}
    >
      {isLoading && (
        <LoaderStyle>
          <Loader color={loaderColors[isDisabled ? "disabled" : color]} dimension="medium" />
        </LoaderStyle>
      )}
      <ButtonContent
        data-element="button-content"
        tabIndex={-1}
        isWithIcon={isWithIcon}
        isFullWidth={isFullWidth}
        dimension={dimension}
      >
        {children}
      </ButtonContent>
    </ButtonComponent>
  );
};

Button.defaultProps = {
  dimension: "large",
  type: "button",
  color: "primary",
};

export default Button;
