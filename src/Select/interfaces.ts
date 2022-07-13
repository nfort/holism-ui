import { Option as OptionType } from "react-select/src/filters";

import { ITheme } from "../Palette/variables";

export type IDimension = "small" | "medium" | "large";

export interface IPropsItem {
  label: string | number | null;
  value: string | number | Date | null;
  isDisabled?: boolean;
  [propName: string]: any;
}

export interface IItem extends IPropsItem {
  isSelected?: boolean;
}

export interface ISelect {
  placeholder?: string;
  name?: string;
  label?: string;
  width?: string;
  options: IItem[];
  readonly selected?: (items: IItem[]) => void;
  onChange?: (value: any) => void;
  onInputChange?: (value: string) => void;
  onBlur?: (value: any) => void;
  onFocus?: (event: any) => void;
  isDisabled?: boolean;
  menuIsOpen?: boolean;
  defaultValue?: IItem[];
  withoutOptionMessage?: string;
  isMulti?: boolean;
  isClearable?: boolean;
  isError?: boolean;
  isMobile?: boolean;
  isSearchable?: boolean;
  optimizeLimit?: number;
  errorMessage?: string;
  value?: IItem[];
  filterOption?: ((option: OptionType, rawInput: string) => boolean) | null;
  className?: string;
  onInnerMenuOpen?: (clientRect: ClientRect) => void;
  onMenuOpen?: () => void;
  dimension: IDimension;
  maxMenuHeight?: number;
}

export interface ISelectStyle {
  menuIsOpen?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
  hasValue?: boolean;
  isError?: boolean;
  isMobile?: boolean;
  dimension?: IDimension | undefined;
  width?: string;
  maxHeight?: number;
  theme: ITheme;
}
