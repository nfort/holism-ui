export interface IColors {
  white: string;
  johnSnow: string;
  rainySky: string;
  stonehenge: string;
  greyDay: string;
  asphalt: string;
  newYork: string;
  plumbum: string;
  black: string;
  diamond: string;
  blueberry: string;
  blueLake: string;
  sapphire: string;
  azure: string;
  indigo: string;
  ultramarine: string;
  lavander: string;
  violet: string;
  galaxy: string;
  purpleFog: string;
  pink: string;
  jam: string;
  maroon: string;
  pig: string;
  embarrassedPig: string;
  redMain: string;
  redRose: string;
  redBrick: string;
  dust: string;
  orange: string;
  carrot: string;
  darkCheddar: string;
  mint: string;
  embarrassedMint: string;
  green: string;
  spring: string;
  lime: string;
  cards: string;
  accounts: string;
  deposits: string;
  credits: string;
  privateMain: string;
  privateDarkGrey: string;
  burgundy: string;
  sterling: string;
  pewter: string;
}

export const COLORS: IColors = {
  white: "#FFFFFF",
  johnSnow: "#F6F6F9",
  rainySky: "#E3E5EC",
  stonehenge: "#C8CCDB",
  greyDay: "#ADB3C6",
  asphalt: "#8189A3",
  newYork: "#343D57",
  plumbum: "#262C40",
  black: "#111521",
  // Цветная палитра
  diamond: "#EEF2FF",
  blueberry: "#D4DEFE",
  blueLake: "#AABDFD",
  sapphire: "#2355D7",
  azure: "#0057B6",
  indigo: "#3351BA",
  ultramarine: "#003594",
  lavander: "#5960EA",
  violet: "#7752C6",
  galaxy: "#5F4AC7",
  purpleFog: "#432EAB",
  pink: "#C54592",
  jam: "#9E0979",
  maroon: "#800769",
  pig: "#FFE7E7",
  embarrassedPig: "#FFC8C8",
  redMain: "#DA4D4D",
  redRose: "#C34545",
  redBrick: "#AE3D3D",
  dust: "#FFEFE7",
  orange: "#F5984E",
  carrot: "#E96115",
  darkCheddar: "#E05405",
  mint: "#E1F5E5",
  embarrassedMint: "#C5F5CF",
  green: "#5DBD72",
  spring: "#53A966",
  lime: "#4A975B",
  // Основные цвета
  cards: "#3889EF",
  accounts: "#00C0B8",
  deposits: "#9660D6",
  credits: "#73CE6C",
  // Private
  privateMain: "#B29A6D",
  privateDarkGrey: "#2D2F36",
  // Premium
  burgundy: "#562737",
  sterling: "#6E727D",
  pewter: "#A2ACAB",
};

export enum TypographyColors {
  asphalt = "#8189a3",
  carrot = "#e96115",
  orange = "#FF6D0C",
  green = "#3AC459",
  redMain = "#DA4D4D",
  azure = "#0057B6",
  greyDay = "#ADB3C6",
  plumbum = "#262C40",
  redRose = "#c34545",
  sapphire = "#2355d7",
  spring = "#53a966",
  ultramarine = "#003594",
  white = "#FFFFFF",
}

export interface IGradients {
  private: string;
  premium: string;
  blue: string;
  bronze: string;
  silver: string;
  gold: string;
  platinum: string;
  signature: string;
  premiumCard: string;
  babyGold: string;
  babyPlatinum: string;
  black: string;
  basic: string;
}

export const GRADIENTS: IGradients = {
  private: "#B29A6D, #DBBE88",
  premium: "#8B5567, #562737",
  blue: "#4066E9, #5960EA",
  bronze: "#A46E48, #FFD5B1",
  silver: "#AAA9A9, #EFEFEF",
  // Cards
  gold: "#B69C3D, #90712A",
  platinum: "#57565C, #919194",
  signature: "#000000, #303030",
  premiumCard: "#562737, #7D3B52",
  babyGold: "#E78956, #D82200",
  babyPlatinum: "#9B3EBF, #76052A",
  black: "#15151D, #27274E",
  basic: "#2355D7, #3889EF",
};

export type IColorsPalette =
  | "white"
  | "johnSnow"
  | "rainySky"
  | "stonehenge"
  | "greyDay"
  | "asphalt"
  | "newYork"
  | "plumbum"
  | "black"
  | "diamond"
  | "blueberry"
  | "blueLake"
  | "sapphire"
  | "azure"
  | "indigo"
  | "ultramarine"
  | "lavander"
  | "violet"
  | "galaxy"
  | "purpleFog"
  | "pink"
  | "jam"
  | "maroon"
  | "pig"
  | "embarrassedPig"
  | "redMain"
  | "redRose"
  | "redBrick"
  | "dust"
  | "orange"
  | "carrot"
  | "darkCheddar"
  | "mint"
  | "embarrassedMint"
  | "green"
  | "spring"
  | "lime"
  | "cards"
  | "accounts"
  | "deposits"
  | "credits"
  | "privateMain"
  | "privateDarkGrey"
  | "burgundy"
  | "sterling"
  | "pewter";
