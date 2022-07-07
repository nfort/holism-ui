import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../src/Input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Input>;

export default meta;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Город",
};
