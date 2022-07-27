import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "../src/Loader/Loader";
import { COLORS } from "../src/Palette/Colors";

const meta = {
  title: "Loader",
  component: Loader,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Loader>;
export default meta;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  dimension: "small",
  color: COLORS.azure,
};
