import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../src/Button/Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Button>;

export default meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Отправить",
};
