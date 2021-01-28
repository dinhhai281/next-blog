import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Card, CardProps } from '../Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'State Management Trong Angular Với NgRx',
  tagLabel: 'Typescript | Angular | RxJs',
  timeLabel: '10 Minutes',
  createdDate: 'September 28, 2020',
  summary:
    'State Management hay quản lý state là một khái niệm khá phổ biến ở React và Angular cũng đã có một sự giao lưu tuyệt vời với nó qua NgRx…',
};
