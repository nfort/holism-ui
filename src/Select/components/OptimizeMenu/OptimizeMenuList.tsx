import React, { useEffect, useRef, useState } from "react";
import { VariableSizeList } from "react-window";

import { OptimizeMenuListStyle } from "./style";
import { IOptimizeMenuList } from "./interfaces";
import Item from "./Item";

const OptimizeMenuList = (props: IOptimizeMenuList) => {
  const {
    children,
    isFocused,
    innerRef,
    selectProps: { dimension },
  } = props;

  const listRef = useRef<VariableSizeList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sizeMap, setSizeMap] = useState({});

  useEffect(() => {
    setCurrentIndex(getCurrentIndex(children));
    listRef.current?.scrollToItem(currentIndex, "center");
  }, []);

  useEffect(() => {
    if (currentIndex >= 1 && listRef.current) {
      listRef.current.scrollToItem(currentIndex);
    }
  }, [currentIndex]);

  const handleSetSize = (index: number, size: number | null): void => {
    setSizeMap({ ...sizeMap, [index]: size });
    listRef.current?.resetAfterIndex(index, true);
  };

  /* @ts-ignore */
  const handleGetSize = (index: number): number => sizeMap[index] || 45;

  const getCurrentIndex = (children: any): number => Math.max(children.findIndex(isFocused), 0);

  return (
    <OptimizeMenuListStyle
      width={""}
      ref={listRef}
      outerRef={innerRef}
      height={dimension === "small" ? 230 : 300}
      /* @ts-ignore */
      itemCount={children.length}
      itemData={children}
      itemSize={handleGetSize}
    >
      {({ index, style }) => (
        <div style={style}>
          {/* @ts-ignore */}
          <Item text={children[index]} index={index} onSetSize={handleSetSize} sizeMap={sizeMap} />
        </div>
      )}
    </OptimizeMenuListStyle>
  );
};

export default OptimizeMenuList;
