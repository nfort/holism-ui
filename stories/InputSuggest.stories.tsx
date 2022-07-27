import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputSuggest from "../src/InputSuggest/InputSuggest";

const meta = {
  title: "InputSuggest",
  component: InputSuggest,
  parameters: {
    controls: { expanded: true },
  },
} as ComponentMeta<typeof InputSuggest>;

export default meta;

const Template: ComponentStory<typeof InputSuggest> = (args) => <InputSuggest {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Выберите городе",
  value: "",
  options: [
    {
      label: "Москва",
      value: "Moscow",
    },
    {
      label: "Париж",
      value: "Paris",
    },
    {
      label: "Прага",
      value: "Prague",
    },
    {
      label: "Амстердам",
      value: "Amsterdam",
    },
    {
      label: "Берлин",
      value: "Berlin",
    },
    {
      label: "Лондон",
      value: "London",
    },
    {
      label: "Рига",
      value: "Riga",
    },
  ],
};
