import { MouseEvent } from "react";

import { IItem } from "../../interfaces";

export interface IMenuProps {
  options: IItem[];
  width?: string;
  onClick: (id: string | number, event: MouseEvent<HTMLElement>) => void;
  onMouseUp: () => void;
}
