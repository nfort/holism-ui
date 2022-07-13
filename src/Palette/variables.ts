import { rgba } from "polished";

import { ITypography, Typography } from "./Typography";
import { Shape, IShape } from "./Shape";
import { COLORS, IColors } from "./Colors";

export interface IMedia {
  onlyMobile: string;
  mobileSmall: string;
  onlyMobileSmall: string;
  mobileBig: string;
  onlyMobileBig: string;
  tablet: string;
  onlyTablet: string;
  desktopAndTablet: string;
  onlyDesktopAndTablet: string;
  desktop: string;

  IE11Detecting: string;
  iPhoneXPortrait: string;
  iPhoneXLandscape: string;
  iPhoneXRPortrait: string;
  iPhoneXRLandscape: string;
  iPhoneXSPortrait: string;
  iPhoneXSLandscape: string;
  iPhoneXSMaxPortrait: string;
  iPhoneXSMaxLandscape: string;
}

interface IShadows {
  shadowLarge?: string;
  shadowSmallLight?: string;
  shadowSmallDeep?: string;
}

interface IInnerShadows {
  shadowLarge: string;
  shadowSmall: string;
}

export interface IDimensions {
  maxWidth: string;
  cardWidth: string;
  borderRadius: string;
}

export interface ITheme {
  shape: IShape;
  borderWidth: string;
  typography: ITypography;
  shadows: IShadows;
  colors: IColors;
}

export const MEDIA: IMedia = {
  onlyMobile: "(min-width: 320px) and (max-width: 767px)",
  mobileSmall: "(min-width: 320px)",
  onlyMobileSmall: "(min-width: 320px) and (max-width: 374px)",
  mobileBig: "(min-width: 375px)",
  onlyMobileBig: "(min-width: 375px) and (max-width: 767px)",
  tablet: "(min-width: 768px)",
  onlyTablet: "(min-width: 768px) and (max-width: 1023px)",
  desktopAndTablet: "(min-width: 1024px)",
  onlyDesktopAndTablet: "(min-width: 1024px) and (max-width: 1279px)",
  desktop: "(min-width: 1280px)",

  IE11Detecting: "screen and (-ms-high-contrast: active), (-ms-high-contrast: none)",
  iPhoneXPortrait:
    "only screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3) and (orientation: portrait)",
  iPhoneXLandscape:
    "only screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3) and (orientation: landscape)",
  iPhoneXRPortrait:
    "only screen and (device-width: 414px)and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
  iPhoneXRLandscape:
    "only screen and (device-width: 414px)and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)",
  iPhoneXSPortrait:
    "only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio : 3) and (orientation: portrait)",
  iPhoneXSLandscape:
    "only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio : 3) and (orientation: landscape)",
  iPhoneXSMaxPortrait:
    "only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
  iPhoneXSMaxLandscape:
    "only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)",
};

export const SHADOWS: IShadows = {
  shadowLarge: `0 8px 20px 0 ${rgba(COLORS.ultramarine, 0.15)}`,
  shadowSmallLight: `0 4px 8px 0 ${rgba(COLORS.ultramarine, 0.15)}`,
  shadowSmallDeep: `0 4px 8px 0 ${rgba(COLORS.ultramarine, 0.3)}`,
};

export const INNERSHADOWS: IInnerShadows = {
  shadowLarge: "0 0 0 1000px",
  shadowSmall: "0 0 0 1px",
};

export const DIMENSIONS: IDimensions = {
  maxWidth: "1280px",
  cardWidth: "936px",
  borderRadius: "2px",
};

export const DefaultTheme: ITheme = {
  shape: Shape,
  borderWidth: "1px",
  typography: Typography,
  shadows: SHADOWS,
  colors: COLORS,
};
