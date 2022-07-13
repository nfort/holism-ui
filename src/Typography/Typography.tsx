import React, { forwardRef, Ref } from "react";
import { TypographyColors } from "../Palette/export";

import {
  HL1Style,
  HL2Style,
  HL3Style,
  HL4Style,
  HL5Style,
  HL6Style,
  HS0Style,
  HS1Style,
  HS2Style,
  HS3Style,
  HS4Style,
  P,
} from "./style";

export interface IProps {
  children: any;
  size?: number;
  lineHeight?: number;
  font?:
    | "48/52/bold"
    | "28/32/bold"
    | "24/28/bold"
    | "20/24/bold"
    | "16/20/bold"
    | "16/20"
    | "14/20"
    | "14/20/bold"
    | "12/16/bold";
  fontWeight?: "bold";
  [propName: string]: any;
}

export interface IHL extends IProps {
  color?: TypographyColors.azure | TypographyColors.greyDay | TypographyColors.plumbum | TypographyColors.white;
}

export interface IParagraph extends IProps {
  color?:
    | TypographyColors.orange
    | TypographyColors.green
    | TypographyColors.redMain
    | TypographyColors.azure
    | TypographyColors.greyDay
    | TypographyColors.plumbum
    | TypographyColors.white;
}

export const H0 = forwardRef((props: IHL, ref: Ref<HTMLDivElement>) => (
  <HS0Style {...props} ref={ref}>
    {props.children}
  </HS0Style>
));

export const H1 = forwardRef((props: IHL, ref: Ref<HTMLDivElement>) => (
  <HS1Style {...props} ref={ref}>
    {props.children}
  </HS1Style>
));

export const H2 = forwardRef((props: IHL, ref: Ref<HTMLDivElement>) => (
  <HS2Style {...props} ref={ref}>
    {props.children}
  </HS2Style>
));

export const H3 = forwardRef((props: IHL, ref: Ref<HTMLDivElement>) => (
  <HS3Style {...props} ref={ref}>
    {props.children}
  </HS3Style>
));

export const H4 = forwardRef((props: IHL, ref: Ref<HTMLDivElement>) => (
  <HS4Style {...props} ref={ref}>
    {props.children}
  </HS4Style>
));

export const TypographyLarge = {
  H1: forwardRef((props: IHL, ref: Ref<HTMLDivElement>) => (
    <HL1Style {...props} ref={ref}>
      {props.children}
    </HL1Style>
  )),
  H2: forwardRef((props: IHL, ref: Ref<HTMLDivElement>) => (
    <HL2Style {...props} ref={ref}>
      {props.children}
    </HL2Style>
  )),
  H3: forwardRef((props: IHL, ref: Ref<HTMLDivElement>) => (
    <HL3Style {...props} ref={ref}>
      {props.children}
    </HL3Style>
  )),
  H4: forwardRef((props: IHL, ref: Ref<HTMLDivElement>) => (
    <HL4Style {...props} ref={ref}>
      {props.children}
    </HL4Style>
  )),
  H5: forwardRef((props: IHL, ref: Ref<HTMLDivElement>) => (
    <HL5Style {...props} ref={ref}>
      {props.children}
    </HL5Style>
  )),
  H6: forwardRef((props: IHL, ref: Ref<HTMLDivElement>) => (
    <HL6Style {...props} ref={ref}>
      {props.children}
    </HL6Style>
  )),
};

export const Paragraph = forwardRef((props: IParagraph, ref: Ref<HTMLDivElement>) => (
  <P {...props} ref={ref}>
    {props.children}
  </P>
));
