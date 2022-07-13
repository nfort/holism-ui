import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Select from "../src/Select/Select";

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof Select>;

export default meta;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Город",
  value: [{ label: "Москва", value: "Moscow" }],
  options: [
    { label: "Москва", value: "Moscow" },
    { label: "Париж", value: "Paris" },
    { label: "Прага", value: "Prague" },
    { label: "Амстердам", value: "Amsterdam", isDisabled: true },
    { label: "Берлин", value: "Berlin" },
    { label: "Лондон", value: "London" },
    { label: "Рига", value: "Riga" },
  ],
};

export const SelectWithMaxMenuHeightProps = Template.bind({});
SelectWithMaxMenuHeightProps.args = {
  ...Default.args,
  maxMenuHeight: 650,
};

const SelectDate: ComponentStory<typeof Select> = (args) => {
  const [value, onChange] = useState(args.value);
  return (
    <Select
      {...args}
      value={value}
      onChange={(value) => {
        onChange([value]);
      }}
    />
  );
};
export const SelectWithDate = SelectDate.bind({});
SelectWithDate.args = {
  placeholder: "День рождения",
  options: [
    { label: "2022-08-01", value: new Date(2022, 7, 1) },
    { label: "2022-08-02", value: new Date(2022, 7, 2) },
  ],
  value: [
    {
      label: "2022-08-01",
      value: new Date(2022, 7, 1),
    },
  ],
};
