import React from "react";
import Loader from "../../../Loader/Loader";
import { COLORS } from "../../../Palette/export";

import { NoOptionStyle } from "../../styles";

import { LoaderIndicatorContainer } from "./style";

const LoadingIndicator = () => (
  <NoOptionStyle>
    <LoaderIndicatorContainer>
      <Loader dimension="large" color={COLORS.azure} />
    </LoaderIndicatorContainer>
  </NoOptionStyle>
);

export default LoadingIndicator;
