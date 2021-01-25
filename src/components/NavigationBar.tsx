import { Box, BoxProps, Button, Container, Spacer, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React, { FC } from 'react';

import { DropdownMenu } from './DropdownMenu';

export interface NavigationBarProps extends BoxProps {
  title: string;
}

export const NavigationBar: FC<NavigationBarProps> = ({ title, ...rest }) => {
  return (
    <Box bg='white' py={6} {...rest}>
      <Container maxW={['full', '6xl']} h={10} d='flex' alignItems='center'>
        <Text fontSize='3xl' color='blue.600' mr={6} as={Link} to='/'>
          {title}
        </Text>
        <Spacer />
        <DropdownMenu items={['Programming', 'Cooking', 'Gaming']} label='Blogs' mr={4}>
          {item => (
            <Button
              as={Link}
              to={`/${item.toLowerCase()}`}
              variant='ghost'
              isFullWidth
              justifyContent='flex-start'
              h={12}
            >
              {item}
            </Button>
          )}
        </DropdownMenu>
        <Button variant='ghost' mr={4} as={Link} to='/about'>
          <Text fontSize='lg' fontWeight={400}>
            About Me
          </Text>
        </Button>
        <Button variant='ghost' as={Link} to='/works'>
          <Text fontSize='lg' fontWeight={400}>
            My Work
          </Text>
        </Button>
      </Container>
    </Box>
  );
};
