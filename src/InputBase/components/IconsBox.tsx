import React from "react";
import {
  EyeOpenedIcon,
  EyeClosedIcon,
} from "@nfort/logistics-icons";

import Tooltip from "../../Tooltip/Tooltip";
import { IIconsBox } from "../interfaces";
import { IconWrapper, ClearIconStyled, IconsBoxStyled, InformerOkIconStyled, InfoDetailedIconStyled } from "../style";

const IconsBox = ({
  isHasValue,
  isDisabled,
  type,
  isPasswordVisible,
  tooltipContent,
  tooltipPosition,
  isShowClearIcon,
  onClear,
  onPasswordToggle,
  testID,
  isSuccess,
  error,
  isTextArea,
  dimension,
}: IIconsBox) => {
  return (
    <IconsBoxStyled isTextArea={isTextArea} dimension={dimension}>
      {isSuccess && !isDisabled && (
        <IconWrapper>
          <InformerOkIconStyled size={24} />
        </IconWrapper>
      )}
      {isShowClearIcon && isHasValue && !isDisabled && (
        <IconWrapper>
          <ClearIconStyled data-element="input-clearIcon" size={24} onClick={onClear} />
        </IconWrapper>
      )}
      {type === "password" && (
        <IconWrapper>
          {isPasswordVisible ? (
            <EyeOpenedIcon
              data-test-id={`input_eye_${testID}`}
              data-element="input-hidePasswordIcon"
              size={24}
              onClick={onPasswordToggle}
            />
          ) : (
            <EyeClosedIcon
              data-test-id={`input_eye_${testID}`}
              data-element="input-showPasswordIcon"
              size={24}
              onClick={onPasswordToggle}
            />
          )}
        </IconWrapper>
      )}
      {tooltipContent && (
        <IconWrapper>
          <Tooltip title={tooltipContent} position={tooltipPosition}>
            <InfoDetailedIconStyled size={24} error={error} />
          </Tooltip>
        </IconWrapper>
      )}
    </IconsBoxStyled>
  );
};

export default IconsBox;
