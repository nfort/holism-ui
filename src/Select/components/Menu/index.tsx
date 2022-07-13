import React, { useEffect, useRef } from "react";

import { IMenu } from "./interfaces";
import { MenuStyle } from "./style";

export const Menu = (props: IMenu) => {
  const { innerProps, isDisabled, isFocused, selectProps, children } = props;
  const { menuIsOpen, isError, isMobile, onInnerMenuOpen } = selectProps;

  const menuRef = useRef<HTMLDivElement>(null);

  onInnerMenuOpen &&
    useEffect(() => {
      menuRef.current && onInnerMenuOpen(menuRef.current.getBoundingClientRect());
    });

  return (
    <MenuStyle
      data-element="select-menu"
      ref={menuRef}
      menuIsOpen={menuIsOpen}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isError={isError}
      isMobile={isMobile}
      {...innerProps}
    >
      {children}
    </MenuStyle>
  );
};

export default Menu;
