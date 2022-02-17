import React from 'react';

import { IProps } from './interfaces';
import { LoaderStyle } from './style';

const Loader = ({ dimension, color, background, center }: IProps) => (
  <LoaderStyle dimension={dimension} color={color} background={background} center={center}>
    <div />
    <div />
    <div />
  </LoaderStyle>
);

Loader.defaultProps = {
  dimension: 'medium',
};

export default Loader;
