import React, { useState, useRef, useEffect } from "react";

import Button from "../Button/Button";

import { useConstructor } from "./hooks";
import { Wrapper, Content, TextMessage, MessageIconWrapper, ButtonsWrapper, TextContent, TitleMessage } from "./style";
import { IProps } from "./interfaces";

const Notification = (props: IProps) => {
  const {
    title,
    type,
    message,
    btn1,
    btn2,
    className,
    emojiIcon,
    onRequestHide,
    isInfinite,
    isCloseClickInside = true,
    lifetime = 10000,
  } = props;
  const [animation, setAnimation] = useState<null | "hide" | "show">(null);
  const [height, setHeight] = useState<number>(0);
  const showTimeout = 500;
  const hideTimeout = 500;
  const wrapperNotificationEl = useRef<HTMLDivElement>(null);

  useConstructor(() => {
    setAnimation("show");
    wrapperNotificationEl.current && setHeight(wrapperNotificationEl.current.getBoundingClientRect().height);
  });

  const handleClick = () => {
    if (!btn1 && !btn2 && isCloseClickInside) {
      closeNotification();
    }
  };

  const closeNotification = () => {
    setAnimation("hide");
    onRequestHide();
  };

  const handleBtn1Click = () => {
    btn1 && btn1.callback && btn1.callback();
    closeNotification();
  };

  const handleBtn2Click = () => {
    btn2 && btn2.callback && btn2.callback();
    closeNotification();
  };

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (!isInfinite) {
      timerId = setTimeout(closeNotification, lifetime);
    }

    return () => {
      timerId && clearTimeout(timerId);
    };
  }, []);

  return (
    <Wrapper
      data-element="notification"
      animation={animation}
      height={height}
      type={type}
      showTime={showTimeout}
      hideTime={hideTimeout}
      ref={wrapperNotificationEl}
      buttons={btn1 || btn2}
      onClick={handleClick}
      className={className}
    >
      <Content>
        {emojiIcon && <MessageIconWrapper>{emojiIcon}</MessageIconWrapper>}
        <TextContent type={type}>
          <TitleMessage>{title}</TitleMessage>
          <TextMessage>{message}</TextMessage>
          {(btn1 || btn2) && (
            <ButtonsWrapper>
              {btn1 && (
                <Button dimension={btn1.dimension || "small"} color={btn1.color || "white"} onClick={handleBtn1Click}>
                  {btn1.label}
                </Button>
              )}
              {btn2 && (
                <Button dimension={btn2.dimension || "small"} color={btn2.color || "white"} onClick={handleBtn2Click}>
                  {btn2.label}
                </Button>
              )}
            </ButtonsWrapper>
          )}
        </TextContent>
      </Content>
    </Wrapper>
  );
};

export default Notification;
