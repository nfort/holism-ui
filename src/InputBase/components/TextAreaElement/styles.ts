import styled from "styled-components";
import Textarea from "react-textarea-autosize";

import { IWrapper, TDimension } from "../../../TextArea/interfaces";
import { DefaultTheme } from "../../../Palette/variables";

import { ITextAreaProps } from "./interfaces";

const getTextAreaPadding = (iconsOffset: number): string => {
  const scrollbarOffset = 16;
  const paddingRight: number = scrollbarOffset + iconsOffset;

  return `0 ${paddingRight}px 11px 0`;
};

const getTextAreaMargin = (dimension: TDimension): string => {
  switch (dimension) {
    case "small":
      return "15px";
    case "large":
      return "30px";
    case "medium":
    default:
      return "27px";
  }
};

export const TextAreaElement = styled(Textarea)<ITextAreaProps>`
  resize: none;
  border: none;
  outline: none;
  z-index: 1;
  background: transparent;
  box-sizing: border-box;
  position: relative;
  font-weight: normal;
  min-height: 30px;
  width: 100%;
  text-overflow: ellipsis;
  scrollbar-width: thin;
  margin-right: 5px;
  margin-top: ${({ dimension = "medium" }: ITextAreaProps) => getTextAreaMargin(dimension)};
  padding: ${({ iconsoffset }: ITextAreaProps) => getTextAreaPadding(iconsoffset)};
  color: ${({ theme }) => theme.colors.plumbum};
  font-family: ${({ theme }: IWrapper) => theme.typography.fontFamily};
  scrollbar-color: ${({ theme }: IWrapper) => theme.colors.stonehenge} transparent;
  font-size: ${({ theme }: IWrapper) => theme.typography.fontSize1};

  &::-webkit-scrollbar {
    width: 7px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 5px solid transparent;
    background-color: ${({ theme }: ITextAreaProps) => theme?.colors.stonehenge};
  }

  &::-webkit-scrollbar-thumb:hover {
    border-radius: 8px;
    border: 5px solid transparent;
    background-color: ${({ theme }: ITextAreaProps) => theme?.colors.greyDay};
  }
`;

TextAreaElement.defaultProps = {
  theme: DefaultTheme,
};
