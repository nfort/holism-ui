import React, { ChangeEvent, useEffect, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@holism/icons";
import { DefaultTheme } from "../Palette/export";
import CheckBox from "./CheckBox";

import { TGroupItem, IPropsCompGroup } from "./interfaces";
import { CheckBoxCompItems, CheckBoxCompItem, GroupWrapper, IconBox } from "./style";

const CheckBoxCompGroup = (props: IPropsCompGroup) => {
  const {
    label,
    dimension,
    isDisabled,
    isCanHideItems,
    isError,
    list,
    onChange,
    tooltipContent,
    tooltipPosition,
    className,
  } = props;
  const [localList, setLocalList] = useState<TGroupItem[]>(list);
  const [isOpened, setIsOpened] = useState<boolean>(true);

  useEffect(() => {
    setLocalList(list);
  }, [list]);

  const onItemChangeHandler = (event: ChangeEvent, item: TGroupItem): void => {
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

  // Метод ставит и сбрасывает флажки со всех элементов группы CheckBox
  const onChangeHandler = (event: ChangeEvent, isChecked: boolean): void => {
    if (isDisabled) {
      return;
    }

    const replacementList = localList.map((listItem: TGroupItem) => ({
      ...listItem,
      isChecked: !isChecked,
    }));

    setLocalList(replacementList);
    onChange(event, replacementList);
  };

  const getCheckedStatus = (list: TGroupItem[]): boolean => list.every((item: TGroupItem) => item.isChecked);

  const getPartCheckedStatus = (list: TGroupItem[]): boolean =>
    !list.every((item: TGroupItem) => item.isChecked) && list.some((item: TGroupItem) => item.isChecked);

  const toggleOpened = (isOpened: boolean): void => setIsOpened(isOpened);

  return (
    <GroupWrapper data-element="checkbox-compGroup" isCanHideItems={isCanHideItems} className={className}>
      <IconBox isCanHideItems={isCanHideItems}>
        {!isOpened && (
          <ArrowDownIcon
            data-element="checkbox-compGroup-arrowDownIcon"
            color={DefaultTheme.colors.asphalt}
            size={16}
            onClick={(): void => toggleOpened(true)}
          />
        )}
        {isOpened && (
          <ArrowUpIcon
            data-element="checkbox-compGroup-arrowUpIcon"
            color={DefaultTheme.colors.asphalt}
            size={16}
            onClick={(): void => toggleOpened(false)}
          />
        )}
      </IconBox>
      <CheckBox
        dimension={dimension}
        onChange={(event: ChangeEvent) => onChangeHandler(event, getCheckedStatus(localList))}
        isDisabled={isDisabled}
        isChecked={getCheckedStatus(localList)}
        isError={isError}
        label={label}
        isPartChecked={getPartCheckedStatus(localList)}
        tooltipContent={tooltipContent}
        tooltipPosition={tooltipPosition}
      />
      {isOpened && (
        <CheckBoxCompItems dimension={dimension} isCanHideItems={isCanHideItems}>
          {localList.map((item: TGroupItem) => {
            const { isDisabled, isChecked, label, tooltipContent, tooltipPosition, id } = item;
            return (
              <CheckBoxCompItem key={id} data-element="checkbox-compGroup-item">
                <CheckBox
                  dimension={dimension}
                  onChange={(event: ChangeEvent): void => onItemChangeHandler(event, item)}
                  isDisabled={isDisabled}
                  isChecked={isChecked}
                  label={label}
                  isError={isError || item.isError}
                  tooltipContent={tooltipContent}
                  tooltipPosition={tooltipPosition}
                />
              </CheckBoxCompItem>
            );
          })}
        </CheckBoxCompItems>
      )}
    </GroupWrapper>
  );
};

export default CheckBoxCompGroup;
