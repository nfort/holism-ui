import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReadOnly from "../src/ReadOnly";
import Tooltip from "../src/Tooltip/Tooltip";
import ReadOnlyPlaceholder from "../src/ReadOnly/ReadOnlyComponents/Placeholder";
import ReadOnlyValue from "../src/ReadOnly/ReadOnlyComponents/Value";
import ReadOnlyDescription from "../src/ReadOnly/ReadOnlyComponents/Description";
import ReadOnlyContentTitle from "../src/ReadOnly/ReadOnlyComponents/ContentTitle";
import { InfoIcon } from "@holism/icons";

const meta = {
  title: "ReadOnly",
  component: ReadOnly,
  subcomponents: { ReadOnlyPlaceholder, ReadOnlyValue, ReadOnlyContentTitle, ReadOnlyDescription },
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof ReadOnly>;
export default meta;

const Template: ComponentStory<typeof ReadOnly> = (args) => <ReadOnly {...args} />;
export const Default = Template.bind({});
Default.args = {
  type: "input",
  children: (
    <>
      <ReadOnlyPlaceholder type="input" placeholder="Название поля" />
      <ReadOnlyValue type="input" value="Текст" />
      <ReadOnlyDescription
        type="input"
        text="Текст подсказки лучше умещать в две строки, не стоит писать длинный текст. Лучше сформулировать более ёмко и понятно"
      />
    </>
  ),
};

const TooltipExample = (
  <Tooltip title="Tooltip" position="right-start">
    <InfoIcon size={24} />
  </Tooltip>
);
export const ContentTitle = Template.bind({});
ContentTitle.args = {
  type: "input",
  children: (
    <>
      <ReadOnlyContentTitle suffix={TooltipExample}>
        <ReadOnlyPlaceholder type="input" placeholder="Название поля" />
        <ReadOnlyValue type="input" value="Текст" />
      </ReadOnlyContentTitle>
      <ReadOnlyDescription
        type="input"
        text="Текст подсказки лучше умещать в две строки, не стоит писать длинный текст. Лучше сформулировать более ёмко и понятно"
      />
    </>
  ),
};
