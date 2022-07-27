import { MouseEvent } from "react";

import { TAutocomplete, TDimension, TInputSuggestion } from "../../interfaces";

export interface ISuggestInputField {
  styledProps: {
    isSuggestionsListOpened: boolean;
    isError: boolean;
    dimension: TDimension;
    isFocused: boolean;
    value: string;
    hasValue: boolean;
    isDisabled: boolean;
  };
  inputProps: any;
  isFocused: boolean;
  placeholder: string;
  testID: string;
  type: TInputSuggestion;
  autocomplete?: TAutocomplete;
  onClear?: (event: MouseEvent<HTMLInputElement>) => void;
}
