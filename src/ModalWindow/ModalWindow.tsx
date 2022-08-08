import React, { useRef, createContext } from "react";
import { createPortal } from "react-dom";

import useModal from "./utils/useModal";
import { IModalWindowProps, IModalContext } from "./utils/interfaces";
import { GlobalBodyOverflowHiddenStyle, ModalOverlay, ModalDialog } from "./style";

export const ModalContext = createContext<IModalContext>({
  isMobile: false,
  isOpen: false,
  modalOverlayRef: null,
});

const ModalWindow = ({
  isOpen,
  onClickOutside = () => {},
  isMobile,
  animationDuration = 300,
  width = "650px",
  children,
  className,
}: IModalWindowProps) => {
  const modalOverlayRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  return createPortal(
    <>
      <ModalOverlay
        animationDuration={animationDuration}
        onClick={onClickOutside}
        isMobile={isMobile}
        className={className}
      />
      <ModalDialog
        animationDuration={animationDuration}
        ref={modalContentRef}
        isMobile={isMobile}
        aria-modal={true}
        aria-hidden={true}
        tabIndex={-1}
        width={width}
        role="dialog"
      >
        <ModalContext.Provider
          value={{
            isMobile,
            isOpen,
            modalOverlayRef,
          }}
        >
          {children}
        </ModalContext.Provider>
      </ModalDialog>
      <GlobalBodyOverflowHiddenStyle />
    </>,
    document.body
  );
};

export { useModal };

export default ModalWindow;
