import React, { useRef, useState, useEffect } from "react";

import useIntersection from "./utils/useIntersection";
import { HeaderStyle, IconContainer, StickyCheckerStyle, TitleStyle } from "./style";
import { IHeaderProps, EAnimationType } from "./utils/interfaces";
import { CloseIcon } from "@holism/icons";

const Header = (props: IHeaderProps) => {
  const { isSticky = false, title, onClickIconInHeader, padding, className } = props;
  const [isStickyNow, setIsStickyNow] = useState<boolean>(isSticky);

  const [animatedTitle, setAnimatedTitle] = useState<string | undefined>(title);
  const [animationType, setAnimationType] = useState<EAnimationType>(EAnimationType.No);

  const refChecker = useRef<HTMLDivElement>(null);
  const refHeader = useRef<HTMLDivElement>(null);
  const isIntersectsChecker = useIntersection(isSticky, refChecker);
  const isIntersectsHeader = useIntersection(isSticky, refHeader);

  if (isStickyNow) {
    !isIntersectsChecker && setIsStickyNow(false);
  } else {
    isIntersectsChecker && isIntersectsHeader && setIsStickyNow(true);
  }

  useEffect(() => {
    // TODO: delete 1 row below after animation bug is solved
    setAnimatedTitle(title);

    // return () => {
    //   setAnimationType(EAnimationType.Out);
    // };
  }, [title]);

  const handleAnimationEnd = () => {
    if (animationType === EAnimationType.Out) {
      setAnimationType(EAnimationType.In);
    }
    setAnimatedTitle(title);
  };

  return (
    <>
      {isSticky && <StickyCheckerStyle ref={refChecker} />}
      <HeaderStyle isSticky={isStickyNow} padding={padding} ref={refHeader} className={className}>
        <IconContainer onClick={onClickIconInHeader}>
          <CloseIcon size={20} />
        </IconContainer>
        {animatedTitle && (
          <TitleStyle animationType={animationType} onAnimationEnd={handleAnimationEnd}>
            {animatedTitle}
          </TitleStyle>
        )}
      </HeaderStyle>
    </>
  );
};

export default Header;
