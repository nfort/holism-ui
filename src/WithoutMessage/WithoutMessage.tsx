import React from "react";

import { WithoutMessageStyle } from "./style";
import { IWithoutMessage } from "./interfaces";

const WithoutMessage = ({ title, subtitle }: IWithoutMessage) => (
  <WithoutMessageStyle>
    <p className="title">{title}</p>
    <span className="subtitle">{subtitle}</span>
  </WithoutMessageStyle>
);

export default WithoutMessage;
