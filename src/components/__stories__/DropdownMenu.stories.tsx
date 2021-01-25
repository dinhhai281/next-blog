import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { DropdownMenu, DropdownMenuProps } from '../DropdownMenu';

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
} as Meta;

const Template: Story<DropdownMenuProps & { title?: string }> = ({ title, ...args }) => (
  <DropdownMenu {...args}>{title}</DropdownMenu>
);

export const Primray = Template.bind({});
Primray.args = { title: 'Songs', items: ['Plastic Love', 'Love Dramatic'] };
