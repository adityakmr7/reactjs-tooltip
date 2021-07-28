import React, { ReactChild, ReactNode } from 'react';
import { Meta, Story } from '@storybook/react';
import { ToolTip } from '../src';

const meta: Meta = {
  title: 'RJS-ToolTip',
  component: ToolTip,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
interface Props {
  children: ReactNode | ReactChild,
  render: string,
  color?: string,
  textColor?: string,
}
const Render = () => {
  return <div>
    <h1>Hover over me</h1>
  </div>
}

const Template: Story<Props> = args => <ToolTip render='Hello world' ><Render /></ToolTip>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
