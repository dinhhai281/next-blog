import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { DropdownMenu } from './DropdownMenu';

export interface NavigationBarProps {
  title: string;
}

export const NavigationBar: FC<NavigationBarProps> = ({ title }) => {
  return (
    <Box bg='whiteAlpha.900' py={6}>
      <Container maxW={['full', '3xl']} h={10} d='flex' alignItems='center'>
        <Text fontSize='4xl' color='blue.600' as='em' mr={6}>
          {title}
        </Text>
        <DropdownMenu items={['Programming', 'Cooking', 'Gaming']}>Sections</DropdownMenu>
      </Container>
    </Box>
  );
};
