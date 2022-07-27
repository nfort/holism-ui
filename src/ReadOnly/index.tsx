import React from "react";

import ReadOnlyDescription from "./ReadOnlyComponents/Description";
import { ReadOnlyContentStyle, ReadOnlyPrefixStyle, ReadOnlyWrapperStyle } from "./style";
import { IReadOnly } from "./interfaces";

const ReadOnly = (props: IReadOnly) => {
  const { prefix, children, type, selectTypeDescription } = props;

  return (
    <>
      <ReadOnlyWrapperStyle type={type}>
        {prefix && <ReadOnlyPrefixStyle type={type}>{prefix}</ReadOnlyPrefixStyle>}
        <ReadOnlyContentStyle>{children}</ReadOnlyContentStyle>
      </ReadOnlyWrapperStyle>
      {type === "select" && !!selectTypeDescription && (
        <ReadOnlyWrapperStyle type={type} isSelectDescription={true}>
          <ReadOnlyDescription text={selectTypeDescription} type={type} />
        </ReadOnlyWrapperStyle>
      )}
    </>
  );
};

ReadOnly.defaultProps = {
  prefix: null,
};

export default ReadOnly;
