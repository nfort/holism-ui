import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { DefaultTheme, ITheme } from '../Palette/variables';

import { IParagraph } from './Typography';

interface IThemeStyle extends Partial<IParagraph> {
  theme: ITheme;
}

const getColor = (theme: ITheme, color?: string) => css<IThemeStyle>`
  color: ${color || theme.colors.plumbum};
`;

const fontStyle = (font: string): FlattenSimpleInterpolation => {
  const [fontSize, lineHeight, fontWeight] = font.split('/');
  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    ${fontWeight === 'bold' ? 'font-weight: bold;' : 'font-weight: normal;'};
  `;
};

export const HL1Style = styled.h1<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-size: ${theme.typography.large.fontSizeH1};
    line-height: ${theme.typography.large.lineHeightH1};
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}

  font-weight: bold;
`;

HL1Style.defaultProps = {
  theme: DefaultTheme,
};

export const HL2Style = styled.h2<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-size: ${theme.typography.large.fontSizeH2};
    line-height: ${theme.typography.large.lineHeightH2};
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}

  font-weight: bold;
`;

HL2Style.defaultProps = {
  theme: DefaultTheme,
};

export const HL3Style = styled.h3<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-size: ${theme.typography.large.fontSizeH3};
    line-height: ${theme.typography.large.lineHeightH3};
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}

  font-weight: bold;
`;

HL3Style.defaultProps = {
  theme: DefaultTheme,
};

export const HL4Style = styled.h4<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-size: ${theme.typography.large.fontSizeH4};
    line-height: ${theme.typography.large.lineHeightH4};
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}

  font-weight: bold;
`;

HL4Style.defaultProps = {
  theme: DefaultTheme,
};

export const HL5Style = styled.h5<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-size: ${theme.typography.large.fontSizeH5};
    line-height: ${theme.typography.large.lineHeightH5};
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}

  font-weight: bold;
`;

HL5Style.defaultProps = {
  theme: DefaultTheme,
};

export const HL6Style = styled.h6<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-size: ${theme.typography.large.fontSizeH6};
    line-height: ${theme.typography.large.lineHeightH6};
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}

  font-weight: bold;
`;

HL6Style.defaultProps = {
  theme: DefaultTheme,
};

export const P = styled.p<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}
  ${({ size, lineHeight, fontWeight, font, theme }: IThemeStyle) => {
    const sizeNew = size ? size : parseInt(theme.typography.large.fontSize1 || '16', 10);
    const lineHeightNew = lineHeight
      ? lineHeight
      : parseInt(theme.typography.large.lineHeight2 || '20', 10);

    return font ? fontStyle(font) : fontStyle(`${sizeNew}/${lineHeightNew}/${fontWeight}`);
  }}
`;

P.defaultProps = {
  theme: DefaultTheme,
};

export const HS0Style = styled.h1<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-size: ${theme.typography.fontSizeH0};
    line-height: ${theme.typography.lineHeightH0};
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}

  font-weight: bold;
`;

HS0Style.defaultProps = {
  theme: DefaultTheme,
};

export const HS1Style = styled.h1<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-size: ${theme.typography.fontSizeH1};
    line-height: ${theme.typography.lineHeightH1};
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}

  font-weight: bold;
`;

HS1Style.defaultProps = {
  theme: DefaultTheme,
};

export const HS2Style = styled.h2<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-size: ${theme.typography.fontSizeH2};
    line-height: ${theme.typography.lineHeightH2};
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}

  font-weight: bold;
`;

HS2Style.defaultProps = {
  theme: DefaultTheme,
};

export const HS3Style = styled.h3<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-size: ${theme.typography.fontSizeH3};
    line-height: ${theme.typography.lineHeightH3};
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}

  font-weight: bold;
`;

HS3Style.defaultProps = {
  theme: DefaultTheme,
};

export const HS4Style = styled.h4<IThemeStyle>`
  ${({ theme, color }: IThemeStyle) => css`
    font-size: ${theme.typography.fontSizeH4};
    line-height: ${theme.typography.lineHeightH4};
    font-family: ${theme.typography.fontFamily};
    ${getColor(theme, color)}
  `}

  font-weight: bold;
`;

HS4Style.defaultProps = {
  theme: DefaultTheme,
};
