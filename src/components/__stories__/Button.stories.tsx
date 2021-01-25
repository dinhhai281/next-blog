import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Primary = () => <Button colorScheme='blue'>Button</Button>;
