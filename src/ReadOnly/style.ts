import { DefaultTheme } from "../Palette/variables";
import { IReadOnlyStyle } from "./interfaces";
import styled, { css } from "styled-components";

export const ReadOnlyWrapperStyle = styled.div<IReadOnlyStyle>`
  display: flex;
  flex-direction: row;
  align-items: ${({ type }: IReadOnlyStyle) => {
    switch (type) {
      case "input":
        return "start";
      case "select":
        return "center";
      default:
        return;
    }
  }};
  max-width: 460px;
  padding: ${({ isSelectDescription }: IReadOnlyStyle) => (isSelectDescription ? "0 0 0 55px" : "12px 16px")};
`;
export const ReadOnlyPrefixStyle = styled.div<IReadOnlyStyle>`
  height: 24px;
  width: 24px;
  margin: ${({ type }: IReadOnlyStyle) => {
    switch (type) {
      case "input":
        return "6px 20px 0 4px";
      case "select":
        return "-9px 16px 0 0";
      default:
        return;
    }
  }};
`;
export const ReadOnlyContentStyle = styled.div`
  width: 100%;
`;
export const ReadOnlyContentTitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ReadOnlyPlaceholderStyle = styled.div<IReadOnlyStyle>`
  font-weight: normal;

  ${({ type, theme }: IReadOnlyStyle) => {
    switch (type) {
      case "input":
        return css`
          font-size: 14px;
          color: ${theme.colors.asphalt};
          line-height: ${({
            theme: {
              typography: { lineHeight2 },
            },
          }: IReadOnlyStyle) => lineHeight2};
        `;
      case "select":
        return css`
          font-size: 16px;
          color: ${theme.colors.plumbum};
        `;
      default:
        return;
    }
  }}
`;

ReadOnlyPlaceholderStyle.defaultProps = {
  theme: DefaultTheme,
};

export const ReadOnlyValueStyle = styled.div<IReadOnlyStyle>`
  font-size: 16px;

  ${({ type, theme }: IReadOnlyStyle) => {
    switch (type) {
      case "input":
        return css`
          font-weight: normal;
          color: ${theme.colors.plumbum};
        `;
      case "select":
        return css`
          font-weight: bold;
          color: ${theme.colors.plumbum};
        `;
      default:
        return;
    }
  }}
`;

ReadOnlyValueStyle.defaultProps = {
  theme: DefaultTheme,
};

export const ReadOnlyDescriptionStyle = styled.div<IReadOnlyStyle>`
  font-weight: normal;

  ${({ type, theme }: IReadOnlyStyle) => {
    switch (type) {
      case "input":
        return css`
          font-size: 12px;
          color: ${theme.colors.asphalt};
          line-height: ${({
            theme: {
              typography: { lineHeight3 },
            },
          }: IReadOnlyStyle) => lineHeight3};
          margin-top: 4px;
        `;
      case "select":
        return css`
          font-size: 14px;
          line-height: 1.43;
          color: ${theme.colors.asphalt};
        `;
      default:
        return;
    }
  }}
`;

ReadOnlyDescriptionStyle.defaultProps = {
  theme: DefaultTheme,
};
