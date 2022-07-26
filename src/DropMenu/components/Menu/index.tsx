import React, { MouseEvent, ReactElement } from "react";

import { MenuStyle, OptionStyle } from "../../style";
import { IItem } from "../../interfaces";

import { IMenuProps } from "./interfaces";

const Menu = ({ onClick, onMouseUp, width, options }: IMenuProps): ReactElement => {
  const mapOptions = ({ id, label, isDisabled, elementsDataName }: IItem): ReactElement => (
    <OptionStyle
      key={id}
      isDisabled={isDisabled}
      onClick={(event: MouseEvent<HTMLElement>) => onClick(id, event)}
      data-element={elementsDataName}
      onMouseUp={onMouseUp}
    >
      {label}
    </OptionStyle>
  );

  return <MenuStyle width={width}>{options.map(mapOptions)}</MenuStyle>;
};

export default Menu;
