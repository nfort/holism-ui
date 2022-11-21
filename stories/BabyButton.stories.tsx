import { RefreshIcon } from "@nfort/logistics-icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BabyButton from "../src/BabyButton";

const meta = {
  title: "BabyButton",
  component: BabyButton,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof BabyButton>;
export default meta;

const Template: ComponentStory<typeof BabyButton> = (args) => <BabyButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Oбновить",
  icon: <RefreshIcon size={20} />,
};
