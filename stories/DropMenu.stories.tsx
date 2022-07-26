import { ComponentStory, ComponentMeta } from "@storybook/react";
import DropMenu from "../src/DropMenu/DropMenu";
import Button from "../src/Button/Button";

const meta = {
  title: "DropMenu",
  component: DropMenu,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof DropMenu>;

export default meta;
const optionsData = [
  {
    label: "Text",
    id: "another-option",
  },
  {
    label: "Text1",
    id: "option-1",
  },
  {
    label: "Text2",
    id: "option-2",
  },
  {
    label: "disabled 7",
    id: "option-7",
    isDisabled: true,
  },
  {
    label: "disabled 8",
    id: "option-8",
    isDisabled: true,
  },
];

const Template: ComponentStory<typeof DropMenu> = (args) => {
  return (
    <DropMenu {...args}>
      <Button>Меню</Button>
    </DropMenu>
  );
};
export const Default = Template.bind({});
Default.args = {
  options: optionsData,
  onClick: (option) => console.log(option),
};
