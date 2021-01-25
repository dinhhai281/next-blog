import { Meta, Story } from '@storybook/react/types-6-0';
import React, { ReactNode } from 'react';
import { DropdownMenu, DropdownMenuProps } from '../DropdownMenu';

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
} as Meta;

const Template: Story<DropdownMenuProps & { children: ReactNode }> = args => <DropdownMenu {...args} />;

export const Primray = Template.bind({});
Primray.args = { label: 'Songs', items: ['Plastic Love', 'Love Dramatic'] };
