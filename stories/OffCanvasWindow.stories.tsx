import { Meta } from "@storybook/react";
import OffCanvasWindow from "../src/ModalWindow/OffCanvasWindow";
import Header from "../src/ModalWindow/Header";
import Content from "../src/ModalWindow/Content";
import Footer from "../src/ModalWindow/Footer";
import Button from "../src/Button/Button";
import { useState } from "react";

const meta: Meta = {
  title: "OffCanvasWindow",
  component: OffCanvasWindow,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const modalWindowSticky = () => {
  const [open, toggle] = useState(false);
  return (
    <div>
      <button onClick={() => toggle(true)}>Открыть модальное окно</button>
      <OffCanvasWindow isOpen={open} isMobile={false} onClickOutside={() => toggle(false)}>
        <Header onClickIconInHeader={() => toggle(false)} title="Перенос доставки" isSticky={true} />
        <Content>
          Контент PhD, Associate Professor at the Chair of Periodical Press, Faculty of Journalism, Lomonosov Moscow
          State PhD, Associate Professor at the Chair of Periodical Press, Faculty of Journalism, Lomonosov Moscow State
          PhD, Associate Professor at the Chair of Periodical Press, Faculty of Journalism, Lomonosov Moscow State PhD,
          Associate Professor at the Chair of Periodical Press, Faculty of Journalism, Lomonosov Moscow State
          University, april-7@yandex.ru First, you should choose a text that you think is interesting. Maybe you like
          reading about history, or maybe you find the news more interesting. Lots of students like to read fiction,
          like stories or novels. You must also choose a text that is right for your English level. If the reading is
          too difficult, you will be frustrated and you will not enjoy your reading practice. Finally, you should choose
          a text that is short. The best reading material is short enough for you to read it all at once. This is why
          short stories are such a great option! Whether you read the text in class with your teacher or on your own, it
          is best if you can read it from start to finish without stopping for a break. University, april-7@yandex.ru
          First, you should choose a text that you think is interesting. Maybe you like reading about history, or maybe
          you find the news more interesting. Lots of students like to read fiction, like stories or novels. You must
          also choose a text that is right for your English level. If the reading is too difficult, you will be
          frustrated and you will not enjoy your reading practice. Finally, you should choose a text that is short. The
          best reading material is short enough for you to read it all at once. This is why short stories are such a
          great option! Whether you read the text in class with your teacher or on your own, it is best if you can read
          it from start to finish without stopping for a break. University, april-7@yandex.ru First, you should choose a
          text that you think is interesting. Maybe you like reading about history, or maybe you find the news more
          interesting. Lots of students like to read fiction, like stories or novels. You must also choose a text that
          is right for your English level. If the reading is too difficult, you will be frustrated and you will not
          enjoy your reading practice. Finally, you should choose a text that is short. The best reading material is
          short enough for you to read it all at once. This is why short stories are such a great option! Whether you
          read the text in class with your teacher or on your own, it is best if you can read it from start to finish
          without stopping for a break. University, april-7@yandex.ru First, you should choose a text that you think is
          interesting. Maybe you like reading about history, or maybe you find the news more interesting. Lots of
          students like to read fiction, like stories or novels. You must also choose a text that is right for your
          English level. If the reading is too difficult, you will be frustrated and you will not enjoy your reading
          practice. Finally, you should choose a text that is short. The best reading material is short enough for you
          to read it all at once. This is why short stories are such a great option! Whether you read the text in class
          with your teacher or on your own, it is best if you can read it from start to finish without stopping for a
          break. j
        </Content>
        <Footer isSticky={true} justifyContent="flex-start">
          <Button dimension="small">Обновить</Button>
          <Button dimension="small">Сбросить</Button>
        </Footer>
      </OffCanvasWindow>
    </div>
  );
};
