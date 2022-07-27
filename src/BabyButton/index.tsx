import React, { MouseEvent } from "react";

import { ButtonBabyStyle, ButtonBabyWrapperStyle, ButtonBabyTextStyle } from "./styles";
import { IProps, IBabyButtonHardCodedProps } from "./interfaces";

const HardCodedProps: IBabyButtonHardCodedProps = {
  width: "48px",
  dimension: "medium",
  isWithIcon: true,
  color: "secondary",
};

const BabyButton = ({ id, className, icon, text, isDisabled, isLoading, type, testID, onClick }: IProps) => {
  const handleClick = (event: MouseEvent): void => {
    if (isDisabled) {
      return;
    }

    onClick?.(event, id);
  };

  return (
    <ButtonBabyWrapperStyle
      onClick={handleClick}
      isDisabled={isDisabled}
      isLoading={isLoading}
      testID={testID}
      className={className}
    >
      <ButtonBabyStyle id={id} isLoading={isLoading} isDisabled={isDisabled} type={type} {...HardCodedProps}>
        {icon}
      </ButtonBabyStyle>
      <ButtonBabyTextStyle isDisabled={isDisabled}>{text}</ButtonBabyTextStyle>
    </ButtonBabyWrapperStyle>
  );
};

export default BabyButton;
