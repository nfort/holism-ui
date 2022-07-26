import React, { useState, MouseEvent, useEffect, useRef } from "react";
import { Instance } from "tippy.js";

import { DefaultTheme } from "../Palette/variables";

import { MenuContainer, TippyStyle, TippyContainer } from "./style";
import { IProps } from "./interfaces";
import Menu from "./components/Menu";
import { IMenuProps } from "./components/Menu/interfaces";

const DropMenu = (props: IProps) => {
  const {
    children,
    isDisabled,
    appendTo,
    placement,
    onClick,
    trigger,
    width,
    options,
    delay,
    onShow,
    onShown,
    onHide,
    onHidden,
    className,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const instance = useRef<Instance>();

  const handleOnShow = (): void => {
    if (isOpen) {
      instance.current?.disable();
      onShow?.();
    }
  };

  const handleOnClick = (id: string | number, event: MouseEvent<HTMLElement>): void => {
    onClick?.(String(id), event);
  };

  const handleOnMouseUp = (): void => {
    instance.current?.hide();
  };

  const handleDocumentClick = (): void => {
    if (!isOpen) {
      return;
    }

    setIsOpen(false);

    instance.current?.disable();
    instance.current?.hide();
  };

  const listenOutsideClicks = (): (() => void) => {
    document.addEventListener("click", handleDocumentClick);

    return () => document.removeEventListener("click", handleDocumentClick);
  };

  const toggleShownState = (): void => {
    instance.current && isOpen ? instance.current?.show() : instance.current?.hide();
  };

  const menuProps: IMenuProps = {
    options,
    width,
    onClick: handleOnClick,
    onMouseUp: handleOnMouseUp,
  };

  useEffect(listenOutsideClicks, [isOpen]);
  useEffect(toggleShownState, [isOpen]);

  return (
    <TippyContainer>
      <TippyStyle
        theme="light-border"
        $componentTheme={DefaultTheme}
        content={!isDisabled && <Menu {...menuProps} />}
        placement={placement}
        delay={delay}
        disabled={isDisabled}
        trigger={trigger}
        appendTo={appendTo}
        hideOnClick={false}
        onCreate={(i) => (instance.current = i)}
        onShown={onShown}
        onShow={handleOnShow}
        onHidden={onHidden}
        onHide={onHide}
      >
        <MenuContainer onClick={() => setIsOpen(true)} className={className}>
          {children}
        </MenuContainer>
      </TippyStyle>
    </TippyContainer>
  );
};

DropMenu.defaultProps = {
  placement: "bottom",
  trigger: "click",
  appendTo: "parent",
  delay: 50,
  onShown: () => void 0,
  onShow: () => void 0,
  onHidden: () => void 0,
  onHide: () => void 0,
};

export default DropMenu;
