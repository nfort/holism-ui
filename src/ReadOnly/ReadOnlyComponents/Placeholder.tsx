import React from "react";

import { IReadOnlyPlaceholder } from "../interfaces";
import { ReadOnlyPlaceholderStyle } from "../style";

const ReadOnlyPlaceholder = ({ type, placeholder }: IReadOnlyPlaceholder) => (
  <ReadOnlyPlaceholderStyle type={type}>{placeholder}</ReadOnlyPlaceholderStyle>
);

ReadOnlyPlaceholder.defaultProps = {
  type: "input",
};

export default ReadOnlyPlaceholder;
