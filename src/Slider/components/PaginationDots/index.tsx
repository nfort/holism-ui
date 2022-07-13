import React, { ReactElement, useState, useEffect } from "react";

import PaginationDot from "./components/PaginationDot";
import { IProps, IPaginationDot } from "./interfaces";
import { Container } from "./styles";

const PaginationDots = ({
  isAnimated,
  slideDuration,
  controlItemsLength,
  isOnAllScreen,
  currentPosition,
  setCurrentPosition,
  isVisible,
}: IProps): ReactElement | null => {
  const [pagination, setPagination] = useState<IPaginationDot[]>([]);

  const calculatePagination = (): IPaginationDot[] =>
    new Array(controlItemsLength || 0).fill("").map(
      (_item: string, index: number): IPaginationDot => ({
        dotIndex: index,
        isActive: index === currentPosition,
        isAnimated,
        animationDuration: slideDuration,
      })
    );

  const setActivePaginationDot = (activeDot: number): void => {
    const updatedPagination = pagination.map(
      (dot: IPaginationDot): IPaginationDot => ({
        ...dot,
        isActive: dot.dotIndex === activeDot,
      })
    );

    setPagination(updatedPagination);
    setCurrentPosition(activeDot);
  };

  const createPagination = (): void => {
    setPagination(calculatePagination());
  };

  useEffect(createPagination, [controlItemsLength, currentPosition]);

  return isVisible ? (
    <Container isOnAllScreen={isOnAllScreen}>
      {pagination.map(({ isActive, isAnimated, animationDuration, dotIndex }: IPaginationDot) => (
        <PaginationDot
          key={dotIndex}
          isActive={isActive}
          isAnimated={isAnimated}
          animationDuration={animationDuration}
          dotIndex={dotIndex}
          onSetActive={setActivePaginationDot}
        />
      ))}
    </Container>
  ) : null;
};

export default PaginationDots;
