import React from "react";
import { components } from "react-select";

// TODO: Add type
const NoOptionsMessage = ({ selectProps: { withoutOptionMessage }, ...props }: any) => (
  <components.NoOptionsMessage {...props}>{withoutOptionMessage}</components.NoOptionsMessage>
);

export default NoOptionsMessage;
