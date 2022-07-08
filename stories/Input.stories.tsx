import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChangeEvent, useState } from "react";
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

const InputDate: ComponentStory<typeof Input> = (args) => {
  const [value, onChange] = useState(args.value);
  return (
    <Input
      {...args}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>, value, id) => {
        onChange(event.target.value);
        args.onChange(event, value, id);
      }}
    />
  );
};
export const InputWithDate = InputDate.bind({});
InputWithDate.args = {
  type: "date",
  placeholder: "День рождения",
  value: new Date(),
};
