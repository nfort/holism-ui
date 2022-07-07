import React, {
  useRef,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useState,
  useEffect,
  RefObject,
} from "react";

import InputBase from "../InputBase";
import { ISharedInputBase } from "../InputBase/interfaces";
import TextAreaElement from "../InputBase/components/TextAreaElement";

import { IProps, IShared } from "./interfaces";

const Input = (props: IProps) => {
  const {
    id,
    isAutoFocus,
    isAutoSelect,
    error,
    name,
    type,
    isDisabled,
    isShowClearIcon = true,
    placeholder,
    tooltipContent,
    tooltipPosition,
    dimension,
    maxLength,
    icon,
    title,
    isMultiLine,
    onKeyDown,
    alignText,
    isAutoFill,
    className,
    inputMode,
    pattern,
    value,
    onChange,
    onFocus,
    onBlur,
    onKeyPress,
    testID,
    isSuccess,
    getRefProp,
  } = props;
  const inputTargetRef = useRef<HTMLInputElement>(null);
  const [textAreaRef, setTextAreaRef] = useState<RefObject<HTMLTextAreaElement>>();
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  useEffect(() => {
    getRefProp?.(inputTargetRef);
  }, [inputTargetRef]);

  useEffect(() => {
    if (isAutoSelect) {
      const textArea = inputTargetRef.current;
      textArea && textArea.select();
    }
  }, [isAutoSelect]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { value } = event.target;
    onChange(event as FocusEvent<HTMLInputElement>, value, id);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { value } = event.target;

    wrapperFixChromeCursorBug(value.length, setSelectionRange);

    onFocus?.(event as FocusEvent<HTMLInputElement>);
    setFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { value } = event.target;
    onBlur?.(event as FocusEvent<HTMLInputElement>, value);
    setFocused(false);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    onKeyPress?.(event as KeyboardEvent<HTMLInputElement>);
  };

  const handlePasswordToggle = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleClear = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    onChange(event, "", id);
  };

  const setSelectionRange = (index: number) => {
    const { current } = inputTargetRef;
    current?.setSelectionRange(index, index);
  };

  const wrapperFixChromeCursorBug = (valueLength: number, callback: (value: number) => void): void => {
    setTimeout(() => {
      callback(valueLength);
    }, 0);
  };

  const handleInputAreaClick = (): void => {
    textAreaRef?.current?.focus();
  };

  const baseInputProps: ISharedInputBase = {
    error,
    placeholder,
    tooltipContent,
    tooltipPosition,
    type,
    dimension,
    title,
    icon,
    alignText,
    className,
    isDisabled,
    isShowClearIcon,
    isFocused,
    isSuccess,
    isPasswordVisible,
    testID,
    isHasValue: !!value,
    isTextArea: isMultiLine,
    onInputAreaClick: handleInputAreaClick,
    onClear: handleClear,
    onPasswordToggle: handlePasswordToggle,
  };

  const sharedProps: IShared = {
    id,
    maxLength,
    name,
    autoFocus: isAutoFocus,
    value: value || "",
    inputMode,
    onChange: handleChange,
    onKeyPress: handleKeyPress,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown,
    pattern,
    disabled: isDisabled,
  };

  const getIconsOffset = (): number => {
    const iconMargin = 8;
    const iconWidth = 24 + iconMargin;
    const isHasPasswordIcon = type === "password";
    const isHasTooltipIcon = !!tooltipContent;
    const isHasErrorIcon = !!error;

    const iconsCount: number = [isHasErrorIcon, isShowClearIcon, isSuccess, isHasTooltipIcon, isHasPasswordIcon].reduce(
      (accumulation: number, condition) => (accumulation += condition ? 1 : 0),
      0
    );

    return iconsCount * iconWidth - iconMargin;
  };

  const calculatedIconsPadding = getIconsOffset();

  const handleGetTextAreaContainerRef = (refProp: RefObject<HTMLTextAreaElement>): void => {
    setTextAreaRef(refProp);
  };

  return (
    <InputBase {...baseInputProps}>
      {!isMultiLine ? (
        <input
          data-test-id={`input_${testID}`}
          data-element="input"
          {...sharedProps}
          autoComplete={type === "password" || !isAutoFill ? "new-password" : "on"}
          type={type === "password" && isPasswordVisible ? "text" : type}
          ref={inputTargetRef}
        />
      ) : (
        <TextAreaElement
          {...sharedProps}
          getrefprop={handleGetTextAreaContainerRef}
          dimension={dimension}
          iconsoffset={calculatedIconsPadding}
          data-element="textarea"
          maxRows={4}
        />
      )}
    </InputBase>
  );
};

Input.defaultProps = {
  type: "text",
  dimension: "medium",
  alignText: "left",
  isAutoFill: true,
  tooltipPosition: "bottom",
};

export default Input;
