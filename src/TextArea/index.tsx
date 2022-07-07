import React, { useEffect, useState, ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from "react";
import { InfoDetailedIcon } from "@holism/icons";
import { withTheme } from "styled-components";

import { DefaultTheme } from "../Palette/variables";
import Tooltip from "../Tooltip/Tooltip";

import { IProps, IShared, TDimension } from "./interfaces";
import {
  InputWrapper,
  Placeholder,
  Error,
  Field,
  TextareaComponent,
  TextareaElement,
  IconsBox,
  IconWrapper,
  StyledErrorIcon,
  Title,
} from "./style";

const Textarea = (props: IProps) => {
  const {
    autoFocus,
    error,
    name,
    isDisabled,
    placeholder,
    tooltipContent,
    tooltipPosition,
    value: valueProp,
    dimension,
    maxLength,
    icon,
    title,
    minRows,
    maxRows,
    className,
    onChange,
    onFocus,
    onBlur,
    onKeyPress,

    isClearable,
    theme,
  } = props;

  const [value, setValue] = useState<string | undefined>(valueProp);
  const [isFocused, setFocus] = useState<boolean>(false);

  const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    onChange?.(event, value);
    setValue(value);
  };

  const onFocusHandler = (event: FocusEvent<HTMLTextAreaElement>) => {
    onFocus && onFocus(event);
    setFocus(true);
  };

  const onBlurHandler = (event: FocusEvent<HTMLTextAreaElement>) => {
    onBlur && onBlur(event);
    setFocus(false);
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    onKeyPress && onKeyPress(event);
  };

  const onMouseDownErrorIcon = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setValue("");
    onChange?.(event, "");
  };

  const renderIcon = () => {
    return (
      <>
        {!!error && isClearable && (
          <IconWrapper>
            <StyledErrorIcon
              data-element="textarea-errorIcon"
              color={theme.colors.plumbum}
              size={24}
              onMouseDown={onMouseDownErrorIcon}
            />
          </IconWrapper>
        )}
      </>
    );
  };

  const checkMaxRowsForSmallDimension = (maxRows: number, dimension: TDimension = "large"): number => {
    const largestRowsNumber = 12;
    if (dimension === "small" && maxRows > largestRowsNumber) {
      return largestRowsNumber;
    }

    return maxRows;
  };

  useEffect(() => {
    value && setValue(valueProp);
  }, [valueProp]);

  const sharedProps: IShared = {
    maxLength,
    name,
    autoFocus,
    value,
    onChange: onInputChange,
    onKeyPress: onKeyPressHandler,
    onFocus: onFocusHandler,
    onBlur: onBlurHandler,
  };

  // Ненативное свойство isDisabled, нативное свойство disabled
  // disabled нужен для передачи  нативный html element textarea
  isDisabled && (sharedProps.disabled = isDisabled);
  maxRows && (sharedProps.maxRows = checkMaxRowsForSmallDimension(maxRows, dimension));

  const calcMinRows = (dimension === "large" && 5) || (dimension === "medium" && 4) || 1;

  return (
    <InputWrapper isClearable={isClearable} isDisabled={isDisabled} dimension={dimension} className={className}>
      {title && dimension === "small" && (
        <Title data-element="textarea-title" isHasValue={!!value} isFocused={isFocused} error={error}>
          {title}
        </Title>
      )}
      <TextareaComponent dimension={dimension} error={error} isFocused={isFocused && !error} isDisabled={isDisabled}>
        <Field>
          <TextareaElement data-element="textarea" minRows={minRows || calcMinRows} {...sharedProps} />
          <IconsBox dimension={dimension}>
            {icon && <IconWrapper>{icon}</IconWrapper>}
            {renderIcon()}
            {tooltipContent && (
              <Tooltip title={tooltipContent} position={tooltipPosition} isTextArea={true}>
                <IconWrapper>
                  <InfoDetailedIcon data-element="textarea-infoDetailedIcon" size={24} />
                </IconWrapper>
              </Tooltip>
            )}
          </IconsBox>
          {placeholder && (
            <Placeholder
              data-element="textarea-placeholder"
              error={error}
              dimension={dimension}
              isFocused={isFocused}
              isHasValue={!!value}
              isDisabled={isDisabled}
            >
              {placeholder}
            </Placeholder>
          )}
        </Field>
      </TextareaComponent>
      {typeof error === "string" && <Error data-element="textarea-error">{error}</Error>}
    </InputWrapper>
  );
};

Textarea.defaultProps = {
  error: false,
  isClearable: false,
  dimension: "large",
  isDisabled: false,
  popoverTickPosition: "right",
  theme: DefaultTheme,
};

export default withTheme(Textarea);
