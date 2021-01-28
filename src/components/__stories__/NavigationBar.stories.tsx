import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { NavigationBar, NavigationBarProps } from '../NavigationBar';

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
} as Meta;

const Template: Story<NavigationBarProps> = args => <NavigationBar {...args} />;

export const Primary = Template.bind({});
Primary.args = { title: 'Title' };
