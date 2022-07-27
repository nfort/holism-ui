import React, { KeyboardEvent, FocusEvent, FormEvent, ReactNode, useEffect, useRef, useState, MouseEvent } from "react";
import Autosuggest, {
  ChangeEvent,
  SuggestionSelectedEventData,
  SuggestionsFetchRequestedParams,
  /* @ts-ignore-next-line */
} from "@nfort/react-autosuggest";

import WithoutMessage from "../WithoutMessage/WithoutMessage";

import LoadingIndicator from "./components/LoadingIndicator";
import SuggestInputField from "./components/Input";
import { IProps, IPropsItem } from "./interfaces";
import { InputContainer, SuggestContainer, LabelStyle, ErrorMessageStyle, NoOptionStyle } from "./styles";

const defaultSuggestion = {
  label: "",
  value: "",
  isSelected: false,
};

const InputSuggest = (props: IProps) => {
  const {
    onChange: onChangeProps,
    onBlur: onBlurProps,
    onFocus: onFocusProps,
    onSelect: onSelectProps,
    onKeyDown: onKeyDownProps,
    onClear,
    onSuggestionsFetchRequested: onSuggestionsFetchRequestedProps,
    getSuggestionRef,
    getSuggestionValue: getSuggestionValueProps,
    optionRender,
    options,
    value: valueProps,
    dimension,
    label,
    name,
    errorMessage,
    width,
    noOptionsMessageTitle = "",
    noOptionsMessage = <WithoutMessage title={noOptionsMessageTitle || ""} subtitle="" />,
    alwaysRenderSuggestions,
    shouldRenderSuggestions: shouldRenderSuggestionsProps,
    className,
    placeholder,
    testID,
    type,
    isDisabled,
    isError,
    isLoading,
  } = props;

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [currentSuggestion, setCurrentSuggestion] = useState<IPropsItem>(defaultSuggestion);
  const [suggestions, setSuggestions] = useState<IPropsItem[]>([]);
  const [isFocused, setFocusedFlag] = useState<boolean>(false);
  const [isSuggestionsListOpened, setSuggestionsListOpenedFlag] = useState<boolean>(false);

  const updateSuggestionsFromValueProp = (): void => {
    !!options?.length && setSuggestions(getSuggestions(valueProps || "", options));
  };

  const updateSuggestionsFromValue = (): void => {
    setSuggestions(getSuggestions(valueProps || "", options));
  };

  const handleClear = (event: MouseEvent<HTMLInputElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    onChangeProps?.("");
    onClear?.(event);
  };

  const onFocus = (event: FocusEvent<HTMLInputElement>): void => {
    setFocusedFlag(true);
    onFocusProps?.(event, valueProps);
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>): void => {
    setFocusedFlag(false);
    setSuggestionsListOpenedFlag(false);
    onBlurProps?.(event, valueProps || "");
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    event.key === "Enter" && event.preventDefault();
    onKeyDownProps?.(event);
  };

  const onChange = (_event: FormEvent<HTMLInputElement>, { newValue, method }: ChangeEvent): void => {
    setSuggestions(getSuggestions(newValue || "", options));

    if (method === "up" || method === "down") {
      return;
    }

    onChangeProps?.(newValue);
  };

  const onSuggestionSelected = (
    _event: FormEvent<HTMLInputElement>,
    { suggestion }: SuggestionSelectedEventData<IPropsItem>
  ): void => {
    onSelectProps?.(suggestion);
    setCurrentSuggestion({
      ...suggestion,
      isSelected: true,
    });
    setFocusedFlag(false);
    setSuggestionsListOpenedFlag(true);
  };

  const onSuggestionsClearRequested = (): void => setSuggestions(getSuggestions(valueProps || "", options));

  const shouldRenderSuggestions = (): boolean => (shouldRenderSuggestionsProps ? shouldRenderSuggestionsProps() : true);

  const renderSuggestion = (suggestion: IPropsItem): ReactNode =>
    optionRender ? optionRender(suggestion, valueProps) : suggestion.label;

  // When user navigates the suggestions using the Up and Down keys,
  // the input value should be set according to the highlighted suggestion.
  // You design how suggestion is modelled.
  // Therefore, it's your responsibility to tell Autosuggest how to map suggestions to input values.
  const getSuggestionValue = (suggestion: IPropsItem): string =>
    typeof getSuggestionValueProps === "function" ? getSuggestionValueProps(suggestion) : suggestion.label;

  // Teach Autosuggest how to calculate suggestions for any given input value
  const getSuggestions = (value: string, options: IPropsItem[]): IPropsItem[] => {
    return options
      .filter((option: IPropsItem) => {
        const word = value.toLowerCase();
        const label = `${option.label}` || "";

        return option && label.toLowerCase().includes(word);
      })
      .map((suggestion: IPropsItem) => ({
        ...suggestion,
        isSelected: suggestion.value === currentSuggestion.value,
      }));
  };

  // instead reference for react-autosuggest
  const storeInputReference = (autosuggest: any): void => {
    if (autosuggest !== null) {
      inputRef.current = autosuggest.input;
      getSuggestionRef?.(inputRef);
    }
  };

  const onSuggestionsFetchRequested = ({ value }: SuggestionsFetchRequestedParams): void => {
    onSuggestionsFetchRequestedProps?.(value);
    setSuggestionsListOpenedFlag(true);
  };

  const renderInputComponent = (inputProps: any): ReactNode => {
    const styledProps = {
      isSuggestionsListOpened: isSuggestionsListOpened || false,
      isError: isError || false,
      dimension: dimension || "large",
      isFocused: isFocused || false,
      hasValue: !!valueProps,
      value: valueProps || "",
      isDisabled: isDisabled || false,
    };

    return (
      <SuggestInputField
        styledProps={styledProps}
        inputProps={inputProps}
        isFocused={isFocused}
        onClear={handleClear}
        placeholder={placeholder || ""}
        testID={testID || ""}
        type={type || "text"}
        autocomplete="off"
      />
    );
  };

  const inputProps = {
    value: valueProps,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
  };

  useEffect(updateSuggestionsFromValueProp, [options]);
  useEffect(updateSuggestionsFromValue, [valueProps]);

  return (
    <SuggestContainer
      dimension={dimension}
      isError={isError}
      isDisabled={isDisabled}
      width={width}
      hasValue={!!valueProps}
      className={className}
    >
      <InputContainer>
        {label && dimension === "small" && (
          <LabelStyle
            data-element="inputSuggest-label"
            htmlFor={name}
            hasValue={!!valueProps}
            isError={isError}
            isFocused={isFocused}
          >
            {label}
          </LabelStyle>
        )}
        <Autosuggest<IPropsItem>
          suggestions={suggestions}
          shouldRenderSuggestions={shouldRenderSuggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          renderInputComponent={renderInputComponent}
          ref={storeInputReference}
          alwaysRenderSuggestions={alwaysRenderSuggestions}
          highlightFirstSuggestion={true}
        />
      </InputContainer>
      {isLoading && !suggestions.length && <LoadingIndicator />}
      {isFocused && !isLoading && !suggestions.length && (
        <NoOptionStyle data-element="inputSuggest-noOption" isError={isError} dimension={dimension}>
          {noOptionsMessage}
        </NoOptionStyle>
      )}
      {isError && errorMessage && (
        <ErrorMessageStyle data-element="inputSuggest-error">{errorMessage}</ErrorMessageStyle>
      )}
    </SuggestContainer>
  );
};

export default InputSuggest;
