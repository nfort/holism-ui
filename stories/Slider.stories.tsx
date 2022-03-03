import * as React from 'react';
import { Meta } from '@storybook/react';
import Slider from "../src/Slider";

const meta: Meta = {
  title: 'Slider',
  component: Slider,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Slides = () => <Slider slides={[() => <div>Hello</div>,() => <div>World</div>]}/>

