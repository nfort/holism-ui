import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { DefaultTheme, ITheme } from "../../../Palette/variables";

import { IIndicatorContainer } from "./interfaces";
import { ArrowDownIconStyle, LockIconStyle } from "./style";
import IndicatorContainer from "./Indicator";

interface IDropdownIndicator extends IIndicatorContainer {
  selectProps: {
    isMobile: boolean;
    isDisabled: boolean;
    menuIsOpen: boolean;
  };
}

const DropdownIndicator = (props: IDropdownIndicator) => {
  const {
    selectProps: { isMobile, isDisabled, menuIsOpen },
  } = props;
  /* @ts-ignore */
  const theme: ITheme = useContext(ThemeContext) || DefaultTheme;

  return (
    <IndicatorContainer {...props}>
      {isMobile && isDisabled ? (
        <LockIconStyle menuIsOpen={menuIsOpen} size={24} color={theme.colors.asphalt} />
      ) : (
        <ArrowDownIconStyle menuIsOpen={menuIsOpen} size={24} color={theme.colors.asphalt} />
      )}
    </IndicatorContainer>
  );
};

export default DropdownIndicator;
