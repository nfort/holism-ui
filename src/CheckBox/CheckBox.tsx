import React, { cloneElement, KeyboardEvent } from "react";
import Tooltip from "../Tooltip/Tooltip";

import { IProps } from "./interfaces";
import { CheckBoxComponent, Mark, Input, Label, StyledInfoIcon } from "./style";

const CheckBox = (props: IProps) => {
  const {
    id,
    isDisabled,
    dimension,
    className,
    isPartChecked,
    isChecked,
    labelComponent,
    tooltipContent,
    tooltipPosition,
    isError,
    label,
    onChange,
  } = props;

  const handleOnChange = (event: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
    onChange(event, !isChecked, id);
  };

  const handlePressEnter = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      onChange && onChange(event, !isChecked, id);
    }
  };

  return (
    <CheckBoxComponent
      data-element="checkbox"
      dimension={dimension}
      tabIndex={isDisabled ? -1 : 1}
      isPartChecked={isPartChecked}
      isError={!isChecked && isError}
      isDisabled={isDisabled}
      onKeyUp={!isDisabled ? handlePressEnter : () => undefined}
      onClick={handleOnChange}
      className={className}
    >
      <Label data-element="checkbox-label" tabIndex={-1}>
        {labelComponent && cloneElement(labelComponent)}
        {!labelComponent && <span>{label}</span>}
        {tooltipContent && (
          <Tooltip title={tooltipContent} position={tooltipPosition}>
            <StyledInfoIcon data-element="checkbox-infoIcon" size={20} />
          </Tooltip>
        )}
      </Label>
      <Input
        data-element="checkbox-input"
        type="checkbox"
        dimension={dimension}
        readOnly={true}
        checked={isChecked}
        disabled={isDisabled}
        isDisabled={isDisabled}
        onClick={handleOnChange}
      />
      <Mark
        data-element="checkbox-mark"
        dimension={dimension}
        isDisabled={isDisabled}
        isPartChecked={isPartChecked}
        tabIndex={-1}
      />
    </CheckBoxComponent>
  );
};

CheckBox.defaultProps = {
  tooltipPosition: "top",
  dimension: "medium",
};

export default CheckBox;
