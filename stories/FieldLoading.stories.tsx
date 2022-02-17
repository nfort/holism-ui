import {Meta} from "@storybook/react";
import { FieldLoading } from "../src/FieldLoading/FieldLoading";

const meta: Meta = {
  title: 'FieldLoading',
  component: FieldLoading,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const smallSize = () => <FieldLoading dimension="small"/>
export const mediumSize = () => <FieldLoading dimension="medium"/>
export const largeSize = () => <FieldLoading dimension="large"/>

