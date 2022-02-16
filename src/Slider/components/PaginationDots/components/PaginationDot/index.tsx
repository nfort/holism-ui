import React, { ReactElement } from 'react';

import { IProps } from './interfaces';
import { AnimatedPart, Container, Dot } from './styles';

const PaginationDot = ({
  isActive,
  isAnimated,
  animationDuration,
  onSetActive,
  dotIndex,
}: IProps): ReactElement => (
  <Container isActive={isActive} onClick={() => !isActive && onSetActive(dotIndex)}>
    {isActive && isAnimated && <AnimatedPart animationDuration={animationDuration} />}

    <Dot isActive={isActive} isAnimated={isAnimated} animationDuration={animationDuration} />
  </Container>
);

export default PaginationDot;
