import styled, { css } from "styled-components";
import Tippy from "@tippyjs/react";
import { rgba } from "polished";

import { DefaultTheme } from "../Palette/variables";

import { ITippy } from "./interfaces";

// Стили из tippy.css from 'tippy.js'
export const TippyStyle = styled(Tippy)<ITippy>`
  &.tippy-box[data-animation="fade"][data-state="hidden"] {
    opacity: 0;
  }
  &.tippy-box {
    background-clip: padding-box;
    position: relative;
    outline: 0;
    transition-property: transform, visibility, opacity;

    ${({ $componentTheme, $isTextArea }: ITippy) => css`
      font-family: ${$componentTheme.typography.fontFamily};
      background-color: ${$componentTheme.colors.newYork};
      border: solid ${$componentTheme.borderWidth} ${$componentTheme.colors.newYork};
      color: ${$componentTheme.colors.white};
      font-size: ${$componentTheme.typography.fontSize2};
      line-height: ${$componentTheme.typography.lineHeight2};
      border-radius: ${$componentTheme.shape.borderRadiusDefault};
      box-shadow: 6px 6px 24px 0 ${rgba($componentTheme.colors.newYork, 0.15)};
      left: ${$isTextArea ? "10px" : "0"};
    `}
  }
  &.tippy-box[data-placement^="top"] > .tippy-arrow {
    bottom: 0;
  }
  &.tippy-box[data-placement^="top"] > .tippy-arrow:before {
    bottom: -7px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: initial;
    transform-origin: center top;
  }
  &.tippy-box[data-placement^="bottom"] > .tippy-arrow {
    top: 0;
  }
  &.tippy-box[data-placement^="bottom"] > .tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom;
  }
  &.tippy-box[data-placement^="left"] > .tippy-arrow {
    right: 0;
  }
  &.tippy-box[data-placement^="left"] > .tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: initial;
    right: -7px;
    transform-origin: center left;
  }
  &.tippy-box[data-placement^="right"] > .tippy-arrow {
    left: 0;
  }
  &.tippy-box[data-placement^="right"] > .tippy-arrow:before {
    left: -7px;
    border-width: 8px 8px 8px 0;
    border-right-color: initial;
    transform-origin: center right;
  }
  &.tippy-box[data-inertia][data-state="visible"] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }

  &.tippy-box > div > div {
    max-height: 238px;
    min-width: 262px;
    max-width: 300px;
    padding-right: 4px;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 8px;
      background: transparent;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ $componentTheme }: ITippy) => $componentTheme.colors.stonehenge};
      border-radius: 8px;
      border: 1px solid transparent;
      background-clip: content-box;
    }
  }

  & .tippy-arrow {
    width: 16px;
    height: 16px;
  }
  & .tippy-arrow:before {
    content: "";
    position: absolute;
    border-color: transparent;
    border-style: solid;
  }
  & .tippy-content {
    position: relative;
    padding: 16px;
    padding-right: 4px;
    z-index: 1;
  }
  &.tippy-box[data-theme~="light-border"] > .tippy-backdrop {
    ${({ $componentTheme }: ITippy) => css`
      background-color: ${$componentTheme.colors.newYork};
    `}
  }
  &.tippy-box[data-theme~="light-border"] > .tippy-arrow:after {
    content: "";
    position: absolute;
    z-index: -1;
    border-color: transparent;
    border-style: solid;
  }
  &.tippy-box[data-theme~="light-border"][data-placement^="top"] > .tippy-arrow:before {
    ${({ $componentTheme }: ITippy) => css`
      border-top-color: ${$componentTheme.colors.newYork};
    `}
  }
  &.tippy-box[data-theme~="light-border"][data-placement^="top"] > .tippy-arrow:after {
    border-width: 7px 7px 0;
    top: 17px;
    left: 1px;
    ${({ $componentTheme }: ITippy) => css`
      border-top-color: ${$componentTheme.colors.newYork};
    `}
  }
  &.tippy-box[data-theme~="light-border"][data-placement^="bottom"] > .tippy-arrow:before {
    bottom: 16px;
    ${({ $componentTheme }: ITippy) => css`
      border-bottom-color: ${$componentTheme.colors.newYork};
    `}
  }
  &.tippy-box[data-theme~="light-border"][data-placement^="bottom"] > .tippy-arrow:after {
    border-width: 0 7px 7px;
    bottom: 17px;
    left: 1px;
    ${({ $componentTheme }: ITippy) => css`
      border-bottom-color: ${$componentTheme.colors.newYork};
    `}
  }
  &.tippy-box[data-theme~="light-border"][data-placement^="left"] > .tippy-arrow:before {
    ${({ $componentTheme }: ITippy) => css`
      border-left-color: ${$componentTheme.colors.newYork};
    `}
  }
  &.tippy-box[data-theme~="light-border"][data-placement^="left"] > .tippy-arrow:after {
    border-width: 7px 0 7px 7px;
    left: 17px;
    top: 1px;
    ${({ $componentTheme }: ITippy) => css`
      border-left-color: ${$componentTheme.colors.newYork};
    `}
  }
  &.tippy-box[data-theme~="light-border"][data-placement^="right"] > .tippy-arrow:before {
    right: 16px;
    ${({ $componentTheme }: ITippy) => css`
      border-right-color: ${$componentTheme.colors.newYork};
    `}
  }
  &.tippy-box[data-theme~="light-border"][data-placement^="right"] > .tippy-arrow:after {
    border-width: 7px 7px 7px 0;
    right: 17px;
    top: 1px;
    ${({ $componentTheme }: ITippy) => css`
      border-right-color: ${$componentTheme.colors.newYork};
    `}
  }
`;

TippyStyle.defaultProps = {
  $componentTheme: DefaultTheme,
};

export const Span = styled.span`
  outline: none;
`;
