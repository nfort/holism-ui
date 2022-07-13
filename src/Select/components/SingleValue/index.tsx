import React from "react";
import { SingleValueStyle } from "./style";

const SingleValue = ({ children, selectProps: { dimension } }: any) => (
  <SingleValueStyle data-element="select-singleValue" dimension={dimension}>
    {children}
  </SingleValueStyle>
);

export default SingleValue;
