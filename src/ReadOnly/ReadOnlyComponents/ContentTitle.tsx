import React from "react";

import { IReadOnlyContentTitle } from "../interfaces";
import { ReadOnlyContentTitleStyle } from "../style";

const ReadOnlyContentTitle = ({ suffix, children }: IReadOnlyContentTitle) => (
  <ReadOnlyContentTitleStyle>
    <div>{children}</div>
    {suffix}
  </ReadOnlyContentTitleStyle>
);

ReadOnlyContentTitle.defaultProps = {
  type: "input",
};

export default ReadOnlyContentTitle;
