import React, { useRef, useState, useEffect, ReactNode, useContext } from 'react';

import { ModalContext } from './index';
import { FooterStyle, StickyCheckerStyle } from './style';
import { IFooterProps, EAnimationType, IModalContext } from './utils/interfaces';
import useIntersection from './utils/useIntersection';

const Footer = (props: IFooterProps) => {
  const {
    children,
    isWithActions,
    isSticky = false,
    isLoading,
    alignItems,
    justifyContent,
    padding,
    className,
  } = props;

  const { isMobile, isOpen, modalOverlayRef } = useContext<IModalContext>(ModalContext);
  if (isLoading) {
    return null;
  }

  const refFooter = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState<boolean>(true);

  const refSticky = useRef<HTMLDivElement>(null);
  const isStickyNow: boolean = isSticky ? useIntersection(isSticky, refSticky) : isShow;

  const [animatedChildren, setAnimatedChildren] = useState<ReactNode>(children);
  const [animationType, setAnimationType] = useState<EAnimationType>(EAnimationType.In);

  const handleScroll = (): void => {
    const ModalOverlay = modalOverlayRef?.current;
    if (isOpen && isMobile && !isSticky && isShow && ModalOverlay && ModalOverlay.scrollTop > 150) {
      setAnimationType(EAnimationType.Out);
    } else {
      setIsShow(true);
      setAnimationType(EAnimationType.In);
    }
  };

  useEffect(() => {
    const ModalOverlay = modalOverlayRef?.current;
    isOpen && isMobile && !isSticky && ModalOverlay?.addEventListener('scroll', handleScroll);
    return () => {
      ModalOverlay?.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen, isMobile]);

  useEffect(() => {
    // TODO: delete 1 row below after animation bug is solved
    setAnimatedChildren(children);

    // return () => {
    //   setAnimationType(EAnimationType.Out);
    // };
  }, [children]);

  useEffect(() => {
    if (isOpen && isMobile && isShow && !isSticky && animationType === EAnimationType.Out) {
      setTimeout((): void => setIsShow(false), 200);
    }
  }, [animationType]);

  const handleAnimationEnd = (): void => {
    if (animationType === EAnimationType.Out && isShow) {
      setAnimationType(EAnimationType.In);
      setAnimatedChildren(children);
    }
  };

  return (
    <>
      <FooterStyle
        ref={refFooter}
        isSticky={(isSticky && isStickyNow) || (isMobile && isShow)}
        isWithActions={isWithActions}
        alignItems={alignItems}
        justifyContent={justifyContent}
        isMobile={isMobile}
        padding={padding}
        animationType={animationType}
        onAnimationEnd={handleAnimationEnd}
        className={className}>
        {animatedChildren}
      </FooterStyle>
      {isSticky && <StickyCheckerStyle ref={refSticky} />}
    </>
  );
};

export default Footer;
