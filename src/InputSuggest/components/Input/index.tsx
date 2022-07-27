import React, { ReactNode } from "react";

import { CloseIconStyle, Placeholder, SearchIconStyle, StyledField } from "./style";
import { ISuggestInputField } from "./interfaces";

const SuggestInputField = ({
  styledProps,
  styledProps: { isDisabled, dimension, hasValue },
  inputProps,
  placeholder,
  testID,
  type,
  isFocused,
  onClear,
}: ISuggestInputField) => {
  const renderIcons = (): ReactNode => <SearchIconStyle dimension={dimension} size={24} isFocused={isFocused} />;

  const renderCloseIcon = (): ReactNode =>
    isDisabled ? (
      <CloseIconStyle dimension={dimension} size={24} isDisabled={true} />
    ) : (
      <CloseIconStyle dimension={dimension} size={24} onClick={onClear} />
    );

  return (
    <StyledField data-element="inputSuggest-field" className="input-suggest__field" {...styledProps}>
      {placeholder && (
        <Placeholder data-element="inputSuggest-placeholder" {...styledProps}>
          {placeholder}
        </Placeholder>
      )}
      <input
        data-test-id={`input_suggest_${testID}`}
        data-element="inputSuggest-input"
        {...inputProps}
        type={type}
        disabled={isDisabled}
        autoComplete="off"
      />
      {hasValue && renderCloseIcon()}
      {!hasValue && renderIcons()}
    </StyledField>
  );
};

export default SuggestInputField;
