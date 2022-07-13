import styled, { FlattenSimpleInterpolation, css } from "styled-components";

import { IStyles } from "./interfaces";

const stylesForAllScreen = ({ isOnAllScreen }: IStyles): FlattenSimpleInterpolation | undefined =>
  isOnAllScreen
    ? css`
        position: absolute;
        left: 50%;
        bottom: 32px;
        margin: 0;
        transform: translateX(-50%);
      `
    : undefined;

export const Container = styled.div<IStyles>`
  margin-top: 32px;
  text-align: center;

  ${stylesForAllScreen};
`;
