import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { DefaultTheme, ITheme } from "../../../Palette/variables";
import OptimizeMenuList from "../OptimizeMenu/OptimizeMenuList";

import { MenuListStyle } from "./style";

// TODO: Add type
const MenuList = ({ inputRef, children, selectProps: { dimension, optimizeLimit }, ...props }: any) => {
  console.log(props);

  /* @ts-ignore */
  const theme: ITheme = useContext(ThemeContext) || DefaultTheme;

  if (Array.isArray(children) && children.length >= optimizeLimit) {
    return <OptimizeMenuList {...props} />;
  }

  return (
    <MenuListStyle ref={inputRef} maxHeight={props.maxHeight} dimension={dimension} theme={theme} children={children} />
  );
};

export default MenuList;
