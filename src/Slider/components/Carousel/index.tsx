import React, { isValidElement, ReactElement, ReactNode, TouchEvent, useState } from "react";

import { ISlide } from "../../interfaces";

import {
  SliderContent,
  SliderContentContainer,
  ImageWrapper,
  ImageContainer,
  Image,
  ReactElementContainer,
} from "./styles";
import { IProps } from "./interfaces";

const Carousel = ({
  slides,
  contentRef,
  currentPosition,
  contentWidth,
  sliderWidth,
  overlap = 0,
  isVisible,
  onNextSlide,
  onPrevSlide,
}: IProps): ReactElement | null => {
  const [firstTouch, setFirstTouch] = useState<number>(0);

  const handleTouchEnd = (event: TouchEvent): void => {
    const offset = parseInt((event.changedTouches[0].clientX - firstTouch).toFixed(0), 10);

    if (offset < 0) {
      onNextSlide(true);
    } else if (offset > 0) {
      onPrevSlide(true);
    }
  };
  // Если наполнение из React элемента
  const isReactElement = isValidElement(slides);
  const isLastSlide: boolean = isReactElement && currentPosition === Math.ceil(contentWidth / sliderWidth) - 1;
  // Отступ, если последний слайд
  const slideShift: number = isLastSlide
    ? contentWidth - sliderWidth
    : currentPosition * sliderWidth - (isReactElement ? overlap : 0);

  return isVisible ? (
    <>
      {isValidElement(slides) && (
        <SliderContentContainer isReactElement={isReactElement}>
          <SliderContent
            onTouchStart={(event: TouchEvent<HTMLDivElement>) => setFirstTouch(event.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
            ref={contentRef}
            slideShift={slideShift}
          >
            {slides}
          </SliderContent>
        </SliderContentContainer>
      )}

      {Array.isArray(slides) && typeof slides[0] === "function" && (
        <SliderContentContainer>
          <SliderContent
            ref={contentRef}
            slideShift={slideShift}
            onTouchStart={(event: TouchEvent<HTMLDivElement>) => setFirstTouch(event.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            {(slides as unknown as Array<() => ReactNode>).map((slide: () => ReactNode, index: number) => (
              <ReactElementContainer key={slide.toString() + index} isActive={index === currentPosition}>
                {slide()}
              </ReactElementContainer>
            ))}
          </SliderContent>
        </SliderContentContainer>
      )}

      {Array.isArray(slides) && typeof slides[0] !== "function" && (
        <ImageWrapper>
          {(slides as ISlide[]).map(({ id, url }: ISlide) => (
            <ImageContainer
              key={id}
              ref={contentRef}
              slideShift={slideShift}
              onTouchStart={(event: TouchEvent<HTMLDivElement>) => setFirstTouch(event.touches[0].clientX)}
              onTouchEnd={handleTouchEnd}
            >
              <Image src={url} />
            </ImageContainer>
          ))}
        </ImageWrapper>
      )}
    </>
  ) : null;
};

export default Carousel;
