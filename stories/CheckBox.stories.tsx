import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckBox from "../src/CheckBox/CheckBox";

const meta = {
  title: "CheckBox",
  component: CheckBox,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof CheckBox>;
export default meta;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Согласен на обработку персональных данных",
};
