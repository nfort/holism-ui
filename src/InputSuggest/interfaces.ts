import { ReactElement, FocusEvent, RefObject, MouseEvent, KeyboardEvent } from "react";

import { ITheme } from "../Palette/variables";

export interface ISuggestStyle {
  isSuggestionsListOpened?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
  hasValue?: boolean;
  isError?: boolean;
  isShowError?: boolean;
  dimension?: TDimension;
  width?: string;
  theme: ITheme;
}

export interface IPropsItem {
  label: string;
  value: string;
  [propName: string]: any;
}

export interface IProps {
  autocomplete?: TAutocomplete;
  dimension?: TDimension;
  value: string;
  label?: string;
  placeholder?: string;
  width?: string;
  name?: string;
  options: IPropsItem[];
  isDisabled?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  isVisibleIcons?: boolean;
  errorMessage?: string;
  noOptionsMessage?: string | ReactElement;
  noOptionsMessageTitle?: string;
  type?: TInputSuggestion;
  onSelect?: (item: IPropsItem) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>, value: string) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>, value: string | undefined) => void;
  onChange?: (value: string) => void;
  onSuggestionsFetchRequested?: (value: string) => void;
  onClear?: (event: MouseEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  optionRender?: (suggestion: IPropsItem, value: string) => ReactElement;
  getSuggestionRef?: (autosuggestionRef: RefObject<HTMLElement>) => void;
  getSuggestionValue?: (suggestion: IPropsItem) => string;
  getSuggestionsProp?: (value: string, suggestions: IPropsItem[]) => IPropsItem[];
  alwaysRenderSuggestions?: boolean;
  shouldRenderSuggestions?: () => boolean;
  className?: string;
  testID?: string;
}

export interface IState {
  value: string;
  suggestions: IPropsItem[];
  isLoading?: boolean;
  isFocused: boolean;
  isSuggestionsListOpened: boolean;
  noSuggestions: boolean;
  currentSuggest: IPropsItem;
}

export type TDimension = "small" | "medium" | "large";

export type TInputSuggestion = "tel" | "email" | "number" | "search" | "text" | "url";

export type TAutocomplete = "on" | "off" | "new-password";
