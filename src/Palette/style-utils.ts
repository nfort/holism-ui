import { css, CSSObject, Interpolation } from "styled-components";

import { IMedia, MEDIA } from "../Palette/variables";

export const MediaQuery =
  (screen: keyof IMedia) =>
  (strings: TemplateStringsArray | CSSObject, ...expressions: Array<Interpolation<any>>) =>
    `
  @media ${MEDIA[screen]} {
    ${css(strings, ...expressions)}
  }
`;

export const BorderRadius = {
  roundBorder: (borderRadius: string) => css`
    border-radius: ${borderRadius};
  `,
  roundBorderTop: (borderRadius: string) => css`
    border-radius: ${borderRadius} ${borderRadius} 0 0;
  `,
  roundBorderBottom: (borderRadius: string) => css`
    border-radius: 0 0 ${borderRadius} ${borderRadius};
  `,
};
