import React, { useRef, useEffect } from "react";

import { IOptimizeMenuItem } from "./interfaces";

export default ({ text, index, onSetSize, sizeMap }: IOptimizeMenuItem) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* @ts-ignore */
    const oldSize = sizeMap && sizeMap[index];
    const newSize = rootRef.current && rootRef.current?.getBoundingClientRect().height;

    if (newSize !== oldSize) {
      onSetSize(index, newSize);
    }
  }, []);

  return <div ref={rootRef}>{text}</div>;
};
