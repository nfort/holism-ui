import React, { ReactElement, useRef, useEffect } from "react";

import { TextAreaElement as Element } from "./styles";
import { ITextAreaProps } from "./interfaces";

const TextAreaElement = (props: ITextAreaProps): ReactElement => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { getrefprop } = props;

  useEffect(() => {
    textAreaRef.current && getrefprop?.(textAreaRef);
  }, [textAreaRef.current, getrefprop]);

  return <Element {...props} inputRef={textAreaRef} />;
};

export default TextAreaElement;
