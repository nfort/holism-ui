import React from "react";

import { ISharedInputBase, IIconsBox } from "./interfaces";
import IconsBox from "./components/IconsBox";
import { InputWrapper, Placeholder, Error, Field, InputComponent, InputAddonsLeft, PlaceholderMask } from "./style";

const InputBase = (props: ISharedInputBase) => {
  const {
    error,
    type,
    isDisabled,
    placeholder,
    tooltipContent,
    tooltipPosition,
    dimension,
    icon,
    iconPosition,
    alignText,
    className,
    children,
    isFocused,
    placeholderMask,
    isCardChecking,
    onClear,
    onPasswordToggle,
    onIconClick,
    onInputAreaClick,
    isPasswordVisible,
    isHasValue,
    isHidePlaceholderMaskOnType,
    isShowClearIcon,
    isShowMask,
    testID,
    isReadOnly,
    isSuccess,
    isTextArea,
  } = props;

  const IconsBoxProps: IIconsBox = {
    isHasValue,
    isDisabled,
    isShowClearIcon,
    isSuccess,
    type,
    isPasswordVisible,
    tooltipContent,
    tooltipPosition,
    onClear,
    onPasswordToggle,
    testID,
    error,
    isTextArea,
    dimension,
  };

  const isHideMaskOnTyping = !isHidePlaceholderMaskOnType || (isHidePlaceholderMaskOnType && !isHasValue);

  return (
    <InputWrapper
      onClick={onInputAreaClick}
      isFocused={isFocused}
      isDisabled={isDisabled}
      dimension={dimension}
      alignText={alignText}
      className={className}
    >
      <InputComponent
        data-element="inputBase-inputComponent"
        dimension={dimension}
        error={error}
        isFocused={isFocused && !error}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        isTextArea={isTextArea}
        isSuccess={isSuccess}
      >
        {icon && (
          <InputAddonsLeft
            data-test-id={`input_addon_icon_${testID}`}
            dimension={dimension}
            isFocused={isFocused}
            isIconOnClick={!!onIconClick}
            iconPosition={iconPosition}
            onClick={() => onIconClick && onIconClick()}
          >
            {icon}
          </InputAddonsLeft>
        )}
        <Field data-element="input-field">
          {children}
          {placeholderMask && isFocused && isHideMaskOnTyping && <PlaceholderMask>{placeholderMask}</PlaceholderMask>}
          {placeholder && (
            <Placeholder
              data-element="input-placeholder"
              error={error}
              dimension={dimension}
              isFocused={isFocused}
              isHasValue={isHasValue || !!isShowMask}
              isDisabled={isDisabled}
              title={placeholder}
            >
              {placeholder}
            </Placeholder>
          )}
        </Field>
        {(isCardChecking || isShowClearIcon || !!tooltipContent || type === "password") && (
          <IconsBox {...IconsBoxProps} />
        )}
      </InputComponent>
      {typeof error === "string" && !!error.trim() && <Error data-element="input-error">{error}</Error>}
    </InputWrapper>
  );
};

export default InputBase;
