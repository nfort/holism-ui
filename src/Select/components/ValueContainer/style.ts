import styled from "styled-components";

import { ISelectStyle, IDimension } from "../../interfaces";

const inputDimension = (dimension: IDimension | undefined) => {
  switch (dimension) {
    case "small": {
      return "padding: 14px 0;";
    }
    case "large": {
      return "padding: 32px 0 12px;";
    }
    case "medium":
    default: {
      return "padding: 28px 0 8px;";
    }
  }
};

export const ValueContainerStyle = styled.div<ISelectStyle>`
  ${({ dimension }) => inputDimension(dimension)};

  -webkit-overflow-scrolling: touch;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;

  input {
    position: relative;
    right: 2px;
  }
`;
