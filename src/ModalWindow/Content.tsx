import React, { useState, ReactNode, useEffect } from "react";
import Loader from "../Loader/Loader";
import { COLORS } from "../Palette/Colors";

import { IContentProps, EAnimationType } from "./utils/interfaces";
import { ContentStyle } from "./style";

const Content = (props: IContentProps) => {
  const { isLoading, children, padding, alignItems, justifyContent, className } = props;

  const [animatedChildren, setAnimatedChildren] = useState<ReactNode>(children);
  const [animationType, setAnimationType] = useState<EAnimationType>(EAnimationType.No);

  useEffect(() => {
    // TODO: delete 1 row below after animation bug is solved
    setAnimatedChildren(children);

    // return () => {
    //   setAnimationType(EAnimationType.Out);
    // };
  }, [children, isLoading]);

  const handleAnimationEnd = () => {
    if (animationType === EAnimationType.Out) {
      setAnimationType(EAnimationType.In);
    }
    setAnimatedChildren(children);
  };

  return (
    <ContentStyle
      padding={padding}
      animationType={animationType}
      onAnimationEnd={handleAnimationEnd}
      alignItems={alignItems}
      justifyContent={justifyContent}
      className={className}
    >
      {isLoading ? <Loader color={COLORS.sapphire} center={true} dimension="large" /> : animatedChildren}
    </ContentStyle>
  );
};

export default Content;
