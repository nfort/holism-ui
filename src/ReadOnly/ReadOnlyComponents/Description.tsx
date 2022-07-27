import React from "react";

import { IReadOnlyDescription } from "../interfaces";
import { ReadOnlyDescriptionStyle } from "../style";

const ReadOnlyDescription = ({ type, text }: IReadOnlyDescription) => (
  <ReadOnlyDescriptionStyle type={type}>{text}</ReadOnlyDescriptionStyle>
);

ReadOnlyDescription.defaultProps = {
  type: "input",
};

export default ReadOnlyDescription;
