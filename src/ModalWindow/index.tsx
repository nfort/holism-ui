import React, { useRef, createContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import useModal from './utils/useModal';
import ModalRoot from './ModalRoot';
import { useOnClickOutside } from './utils/useOnClickOutside';
import { IModalWindowProps, IModalContext } from './utils/interfaces';
import {
  GlobalBodyOverflowHiddenStyle,
  ModalOverlay,
  ModalWrapper,
} from './style';

export const ModalContext = createContext<IModalContext>({
  isMobile: false,
  isOpen: false,
  modalOverlayRef: null,
});

const ModalWindow = ({
  isOpen,
  onClickOutside,
  modalRootName,
  isMobile,
  animationDuration = 350,
  maxWidthStyle,
  children,
  className,
}: IModalWindowProps) => {
  const targetDomElement = document.querySelector(`#${modalRootName}`) as Element;
  const modalOverlayRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const [isUseHeightIE11, setIsUseHeightIE11] = useState<boolean>(false);

  useOnClickOutside(modalContentRef, onClickOutside, isOpen);

  useEffect(() => {
    modalContentRef.current && setIsUseHeightIE11(modalContentRef.current.clientHeight <= 536);
  });

  return (
    targetDomElement &&
    createPortal(
      <>
        {isOpen && (
          <ModalOverlay
            ref={modalOverlayRef}
            animationDuration={animationDuration}
            isMobile={isMobile}
            className={className}>
            <ModalWrapper
              animationDuration={animationDuration}
              ref={modalContentRef}
              isUseHeightIE11={isUseHeightIE11}
              isMobile={isMobile}
              aria-modal={true}
              aria-hidden={true}
              tabIndex={-1}
              maxWidthStyle={maxWidthStyle}
              role="dialog">
              <ModalContext.Provider
                value={{
                  isMobile,
                  isOpen,
                  modalOverlayRef,
                }}>
                {children}
              </ModalContext.Provider>
            </ModalWrapper>
            <GlobalBodyOverflowHiddenStyle />
          </ModalOverlay>
        )}
      </>,
      targetDomElement
    )
  );
};

export { ModalRoot, useModal };

export default ModalWindow;
