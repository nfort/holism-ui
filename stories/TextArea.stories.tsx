import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextArea from "../src/TextArea";

const meta = {
  title: "TextArea",
  component: TextArea,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof TextArea>;

export default meta;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Комментарии к заказу",
};
