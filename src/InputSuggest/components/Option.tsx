import React from "react";

import { CompoundLargeOptionStyle, TickIconStyled } from "../styles";
import { IPropsItem } from "../interfaces";

const InputSuggestOption = ({ value, label, caption, isSelected }: IPropsItem) => (
  <CompoundLargeOptionStyle>
    <div>
      <div
        className="label"
        dangerouslySetInnerHTML={{
          __html: value ? label.replace(value, `<span>${value}</span>`) : label,
        }}
      />
      {caption && <div className="caption">{caption}</div>}
    </div>
    {isSelected && <TickIconStyled size={24} />}
  </CompoundLargeOptionStyle>
);

export default InputSuggestOption;
