import React from "react";
import Select from "react-select";

import ClearIndicator from "./components/Indicators/ClearIndicator";
import ControlComponent from "./components/Control";
import DropdownIndicator from "./components/Indicators/DropdownIndicator";
import IndicatorsContainer from "./components/Indicators/IndicatorsContainer";
import Menu from "./components/Menu";
import MenuList from "./components/MenuList";
import NoOptionsMessage from "./components/NoOptionMessage";
import PlaceholderContainer from "./components/PlaceholderContainer";
import SelectContainerComponent from "./components/SelectContainer";
import SingleValue from "./components/SingleValue";
import ValueContainer from "./components/ValueContainer";
import Option from "./components/Option/Option";
import { ISelect } from "./interfaces";
import { colorStyles } from "./style";

// We customizing components witch react-select using and throw into Select from react-select
const SelectComponent = (props: ISelect) => {
  const {
    placeholder = "",
    label,
    isDisabled,
    options,
    menuIsOpen,
    onChange,
    defaultValue,
    isMulti = false,
    isClearable = true,
    optimizeLimit = 150,
    withoutOptionMessage,
    maxMenuHeight,
    dimension,
    errorMessage,
    isError = false,
    width,
    name,
    value,
    onFocus,
    onInputChange,
    onBlur,
    isMobile,
    isSearchable,
    filterOption,
    className,
    onInnerMenuOpen,
    onMenuOpen,
  } = props;

  return (
    <Select
      components={{
        DropdownIndicator: DropdownIndicator as any,
        Control: ControlComponent,
        ClearIndicator,
        IndicatorsContainer,
        Menu: Menu as any,
        MenuList,
        NoOptionsMessage,
        Option,
        Placeholder: PlaceholderContainer,
        SelectContainer: SelectContainerComponent as any,
        SingleValue,
        ValueContainer: ValueContainer as any,
      }}
      optimizeLimit={optimizeLimit}
      label={label}
      name={name}
      value={value}
      defaultValue={defaultValue}
      menuIsOpen={menuIsOpen}
      isMulti={isMulti}
      isSearchable={isSearchable}
      options={options}
      styles={colorStyles(props)}
      isDisabled={isDisabled}
      placeholder={placeholder}
      onChange={onChange}
      onInputChange={onInputChange}
      maxMenuHeight={maxMenuHeight}
      onFocus={onFocus}
      onBlur={onBlur}
      isClearable={isClearable}
      withoutOptionMessage={withoutOptionMessage}
      dimension={dimension}
      isError={isError}
      errorMessage={errorMessage}
      width={width}
      isMobile={isMobile}
      filterOption={filterOption}
      className={className}
      onInnerMenuOpen={onInnerMenuOpen}
      onMenuOpen={onMenuOpen}
    />
  );
};

export default SelectComponent;
