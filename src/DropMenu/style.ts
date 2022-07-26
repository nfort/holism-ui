import styled, { css } from "styled-components";
import { rgba } from "polished";
import Tippy from "@tippyjs/react";

import { DefaultTheme } from "../Palette/variables";

import { IMenuItem, ITippy, IDropMenu, IStylesProps } from "./interfaces";

const getMenuStyleMaxHeight = (): string => {
  const oneElementHeight = 40;
  const maxVisibleElements = 5;

  return `${oneElementHeight * maxVisibleElements}px`;
};

export const MenuContainer = styled.div`
  display: inline-flex;
  outline: none;
  width: 100%;
`;

export const OptionStyle = styled.a<IMenuItem>`
  display: block;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 16px;
  line-height: 40px;
  min-height: 40px;

  ${({ theme, isDisabled }: IMenuItem) => css`
    &:hover {
      color: ${theme.colors.plumbum};
      background-color: ${theme.colors.johnSnow};
      cursor: ${isDisabled ? `auto` : `pointer`};
    }

    pointer-events: ${isDisabled ? `none` : `auto`};
    background-color: "none";
    color: ${isDisabled ? theme.colors.asphalt : theme.colors.plumbum};
    font-size: ${theme.typography.fontSize2};
  `}
`;

export const MenuStyle = styled.div<IDropMenu>`
  box-sizing: border-box;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: center;
  overflow-y: scroll;
  pointer-events: auto;
  min-width: 140px;
  max-width: 220px;
  max-height: ${getMenuStyleMaxHeight};

  ${({ theme, width }: IDropMenu) => css`
    font-family: ${theme.typography.fontFamily};
    ${width && `width: ${width}px`};
    background-color: ${theme.colors.white};
    border-radius: ${({ theme }: IStylesProps) => theme.shape.borderRadiusDefault};
  `}

  &::-webkit-scrollbar {
    width: 12px;
    background: transparent;
    padding: 18px;
  }

  &::-webkit-scrollbar-track-piece:start {
    margin-top: 8px;
  }

  &::-webkit-scrollbar-track-piece:end {
    margin-bottom: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }: IStylesProps) => theme.colors.stonehenge};
    border-radius: ${({ theme }: IStylesProps) => theme.shape.borderRadiusDefault};
    border: 3px solid transparent;
    background-clip: content-box;
  }
`;

export const TippyContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// Стили из tippy.css from 'tippy.js'
export const TippyStyle = styled(Tippy)<ITippy>`
  max-width: 100% !important; /* Important обязателен, для того чтобы перебить inline стили библиотеки Tippy */
  padding: 8px 0;

  &.tippy-box[data-animation="fade"][data-state="hidden"] {
    opacity: 0;
    transform: translateY(8px);
  }

  &.tippy-box {
    top: -18px;
    background-clip: padding-box;
    position: relative;
    outline: 0;
    transition-property: transform, visibility, opacity;

    ${({ $componentTheme }: ITippy) => css`
      font-family: ${$componentTheme.typography.fontFamily};
      background-color: ${$componentTheme.colors.white};
      border: ${$componentTheme.borderWidth} solid ${$componentTheme.colors.rainySky};
      color: ${$componentTheme.colors.asphalt};
      font-size: ${$componentTheme.typography.fontSize2};
      line-height: ${$componentTheme.typography.lineHeight2};
      border-radius: ${$componentTheme.shape.borderRadiusDefault};
      box-shadow: 6px 6px 24px 0 ${rgba($componentTheme.colors.newYork, 0.15)};
    `}
  }

  & .tippy-content {
    position: relative;
    padding: 0;
    z-index: 1;
  }

  & .tippy-arrow {
    display: none;
  }

  &.tippy-box[data-inertia][data-state="visible"] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }

  &.tippy-box[data-theme~="light-border"] > .tippy-backdrop {
    ${({ $componentTheme }: ITippy) => css`
      background-color: ${$componentTheme.colors.white};
    `}
  }
`;

TippyStyle.defaultProps = {
  $componentTheme: DefaultTheme,
};

MenuStyle.defaultProps = {
  theme: DefaultTheme,
};

OptionStyle.defaultProps = {
  theme: DefaultTheme,
};
