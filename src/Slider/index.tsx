import React, { useRef, useEffect, useState, KeyboardEvent } from "react";
import ResizeObserver from "resize-observer-polyfill";

import PaginationDots from "./components/PaginationDots";
import ScrollButton from "./components/ScrollButton";
import { EDirection } from "./components/ScrollButton/interfaces";
import Carousel from "./components/Carousel";
import { IProps, Timeout } from "./interfaces";
import { SlidesWrapper, Wrapper } from "./styles";

const Slider = ({
  isOnAllScreen = false,
  isAnimated = false,
  slides = [],
  slideDuration = 5,
  withControls = true,
  isAutoSwitching = false,
  isLoop = false,
  overlap = 0,
  isMobile = false,
  isAutoFocus = false,
  currentValue = 0,
  onChange,
}: IProps) => {
  const timerRef = useRef<Timeout>();
  const sliderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [secondsForChangeSlide, setSecondsForChangeSlide] = useState<number>(slideDuration);
  const [sliderWidth, setSliderWidth] = useState<number>(0);
  const [contentWidth, setContentWidth] = useState<number>(0);
  const [currentPosition, setCurrentPosition] = useState<number>(currentValue);
  const [isLeftBtnVisible, setIsLeftBtnVisible] = useState<boolean>(false);
  const [isRightBtnVisible, setIsRightBtnVisible] = useState<boolean>(false);
  const [isControlPanelVisible, setIsControlPanelVisible] = useState<boolean>(withControls);

  const controlItemsLength = Array.isArray(slides)
    ? slides.length
    : Math.ceil(Math.ceil(contentWidth) / Math.ceil(sliderWidth));

  // Save interval timer for use in another methods of component;
  const setTimer = (): void => {
    timerRef.current = setInterval(() => {
      setSecondsForChangeSlide((seconds) => seconds - 1);
    }, 1000);
  };

  // Go to next slide manually;
  const changeToNextSlide = (isTouch: boolean = false): void => {
    let newPosition: number;

    if (!isTouch && isLoop) {
      newPosition = currentPosition < controlItemsLength - 1 ? currentPosition + 1 : 0;
    } else {
      newPosition = currentPosition < controlItemsLength - 1 ? currentPosition + 1 : currentPosition;
    }

    onChange?.(newPosition);
    setCurrentPosition(newPosition);
  };

  // Go to prev slide manually;
  const changeToPrevSlide = (): void => {
    const newPosition: number = currentPosition > 0 ? currentPosition - 1 : 0;

    onChange?.(newPosition);
    setCurrentPosition(newPosition);
  };

  const handleKeyDown = ({ keyCode }: KeyboardEvent<HTMLDivElement>): void => {
    switch (keyCode) {
      case 37:
        changeToPrevSlide();
        break;
      case 39:
        changeToNextSlide();
        break;
      default:
        return;
    }
  };

  // Timer control when slider auto changed by chosen time;
  useEffect(() => {
    controlItemsLength && isAutoSwitching && setTimer();

    if (secondsForChangeSlide === 0 && isAutoSwitching) {
      clearInterval(timerRef.current as Timeout);
      changeToNextSlide();
    }

    return () => clearInterval(timerRef.current as Timeout);
  }, [secondsForChangeSlide, controlItemsLength]);

  // Get slider content width on create window and resize;
  useEffect(() => {
    const ro = new ResizeObserver(() => {
      sliderRef.current && setSliderWidth(parseFloat(sliderRef.current.getBoundingClientRect().width.toFixed(2)));

      contentRef.current && setContentWidth(contentRef.current.scrollWidth);
    });
    ro.observe(document.body);

    return () => {
      ro.unobserve(document.body);
    };
  }, []);

  useEffect(() => {
    if (isAutoFocus) {
      setTimeout(() => {
        sliderRef!.current!.focus();
      }, 5);
    }
  }, []);

  // Buttons state control
  useEffect(() => {
    if (controlItemsLength === 1) {
      setIsLeftBtnVisible(false);
      setIsRightBtnVisible(false);
    } else if (currentPosition === 0) {
      setIsLeftBtnVisible(false);
      setIsRightBtnVisible(true);
    } else if (currentPosition === controlItemsLength - 1) {
      setIsLeftBtnVisible(true);
      setIsRightBtnVisible(false);
    } else {
      setIsLeftBtnVisible(true);
      setIsRightBtnVisible(true);
    }

    isAutoSwitching && setSecondsForChangeSlide(slideDuration);
    setIsControlPanelVisible(controlItemsLength !== 1);

    // Update currentPosition if controlsItemsLength goes down;
    if (currentPosition > 0 && currentPosition >= controlItemsLength) {
      setCurrentPosition(controlItemsLength - 1);
    }
  }, [currentPosition, controlItemsLength]);

  return (
    <Wrapper>
      <Carousel
        isVisible={isOnAllScreen}
        onNextSlide={changeToNextSlide}
        onPrevSlide={changeToPrevSlide}
        slides={slides}
        contentRef={contentRef}
        currentPosition={currentPosition}
        contentWidth={contentWidth}
        sliderWidth={sliderWidth}
        overlap={overlap}
      />

      <SlidesWrapper ref={sliderRef} tabIndex={0} onKeyDown={handleKeyDown} isOnAllScreen={isOnAllScreen}>
        <Carousel
          isVisible={!isOnAllScreen}
          onNextSlide={changeToNextSlide}
          onPrevSlide={changeToPrevSlide}
          slides={slides}
          contentRef={contentRef}
          currentPosition={currentPosition}
          contentWidth={contentWidth}
          sliderWidth={sliderWidth}
          overlap={overlap}
        />

        <ScrollButton
          isVisible={isLeftBtnVisible && !isMobile}
          isOnAllScreen={isOnAllScreen}
          direction={EDirection.left}
          onPress={() => changeToPrevSlide()}
        />
        <ScrollButton
          isVisible={isRightBtnVisible && !isMobile}
          isOnAllScreen={isOnAllScreen}
          direction={EDirection.right}
          onPress={() => changeToNextSlide()}
        />
      </SlidesWrapper>

      <PaginationDots
        isVisible={withControls && isControlPanelVisible && !isMobile}
        slideDuration={slideDuration}
        controlItemsLength={controlItemsLength}
        currentPosition={currentPosition}
        setCurrentPosition={setCurrentPosition}
        isOnAllScreen={isOnAllScreen}
        isAnimated={isAnimated}
        animationDuration={slideDuration}
      />
    </Wrapper>
  );
};

export default Slider;
