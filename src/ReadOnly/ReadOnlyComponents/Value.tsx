import React from "react";

import { IReadOnlyValue } from "../interfaces";
import { ReadOnlyValueStyle } from "../style";

const ReadOnlyValue = ({ type, value }: IReadOnlyValue) => <ReadOnlyValueStyle type={type}>{value}</ReadOnlyValueStyle>;

ReadOnlyValue.defaultProps = {
  type: "input",
};

export default ReadOnlyValue;
