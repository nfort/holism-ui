import React from 'react';
import { OptionTypeBase } from 'react-select';

import {
  OptionContentStyle,
  OptionStyle,
  SubtitleStyle,
  TickIconStyled,
  TitleStyle,
} from './style';

const Option = ({
  children,
  isDisabled,
  isSelected,
  isFocused,
  innerRef,
  selectProps: { dimension },
  innerProps,
  data: { caption },
}: OptionTypeBase) => (
  <OptionStyle
    data-element="select-option"
    ref={innerRef}
    isDisabled={isDisabled}
    isSelected={isSelected}
    isFocused={isFocused}
    dimension={dimension}
    {...innerProps}>
    <OptionContentStyle>
      <TitleStyle isDisabled={isDisabled}>{children}</TitleStyle>
      {caption && <SubtitleStyle className="subtitle">{caption}</SubtitleStyle>}
    </OptionContentStyle>
    {isSelected && <TickIconStyled />}
  </OptionStyle>
);

export default Option;
