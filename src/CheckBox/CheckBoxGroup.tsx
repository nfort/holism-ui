import React, { ChangeEvent, useEffect, useState } from "react";

import { CheckboxGroupItems, CheckBoxGroupItem } from "./style";
import { TGroupItem, IPropsGroup } from "./interfaces";
import CheckBox from "./CheckBox";

const CheckBoxGroup = (props: IPropsGroup) => {
  const { dimension, isDisabled, isError, list, onChange, className } = props;
  const [localList, setLocalList] = useState<TGroupItem[]>(list);

  useEffect(() => {
    setLocalList(list);
  }, [list]);

  const onChangeHandler = (event: ChangeEvent, item: TGroupItem): void => {
    const { isDisabled, isChecked } = item;
    if (isDisabled) {
      return;
    }

    const copyItem = {
      ...item,
      isChecked: !isChecked,
    };

    const replacementList = localList.map((listItem: TGroupItem) => (listItem.id === item.id ? copyItem : listItem));

    setLocalList(replacementList);
    onChange(event, replacementList);
  };

  return (
    <CheckboxGroupItems className={className}>
      {localList.map((item: TGroupItem) => {
        const { isChecked, label, tooltipContent, tooltipPosition, id } = item;
        return (
          <CheckBoxGroupItem key={id} data-element="checkbox-group-item">
            <CheckBox
              dimension={dimension}
              onChange={(event: ChangeEvent): void => onChangeHandler(event, item)}
              isDisabled={isDisabled || item.isDisabled}
              isChecked={isChecked}
              label={label}
              isError={isError || item.isError}
              tooltipContent={tooltipContent}
              tooltipPosition={tooltipPosition}
            />
          </CheckBoxGroupItem>
        );
      })}
    </CheckboxGroupItems>
  );
};

export default CheckBoxGroup;
