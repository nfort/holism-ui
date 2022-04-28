import {Meta} from "@storybook/react";
import ModalWindow, {ModalRoot} from "../src/ModalWindow";
import Header from "../src/ModalWindow/Header";
import Content from "../src/ModalWindow/Content";
import {useState} from "react";
import {CloseIcon} from "@holism/icons";

const meta: Meta = {
  title: 'ModalWindow',
  component: ModalWindow,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const modalWindowSticky = () => {
  const [open, toggle] = useState(false);
  return (
    <div>
      <ModalRoot modalRootName="change-delivery" />
      <button onClick={() => toggle(true)}>Открыть модальное окно</button>
      <ModalWindow
        modalRootName="change-delivery"
        isOpen={open}
        isMobile={false}
        onClickOutside={() => toggle(false)}
        maxWidthStyle="75%"
      >
        <Header
          onClickIconInHeader={() => toggle(false)}
          title="Перенос доставки"
          isSticky={true}
          icon={<CloseIcon size={20} />}
        />
        <Content>
          Контент
        </Content>
      </ModalWindow>
    </div>
  )
}
