import { ComponentStory, ComponentMeta } from "@storybook/react";
import { KeyboardIcon } from "@holism/icons";
import Tooltip from "../src/Tooltip/Tooltip";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Tooltip>;

export default meta;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <KeyboardIcon size={20} />,
  title: "Это клавиатура",
};
