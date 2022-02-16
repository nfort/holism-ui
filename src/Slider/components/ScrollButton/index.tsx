import React, { ReactElement } from 'react';

import { EDirection, IProps } from './interfaces';
import { Container, LeftButton, RightButton, Wrapper, Inner } from './styles';

const ScrollButton = ({
  direction,
  onPress,
  isOnAllScreen,
  isVisible,
}: IProps): ReactElement | null =>
  isVisible ? (
    <Wrapper isOnAllScreen={isOnAllScreen} direction={direction} onClick={() => onPress(direction)}>
      <Container>
        <Inner>
          {direction === EDirection.left && <LeftButton />}
          {direction === EDirection.right && <RightButton />}
        </Inner>
      </Container>
    </Wrapper>
  ) : null;

export default ScrollButton;
