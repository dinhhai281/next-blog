import { SEO } from '@app/components';
import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';

const Home = () => (
  <Box p={8}>
    <SEO title='Home Page'></SEO>
    <Text>Hello World</Text>
    <Button colorScheme='teal'>Hello</Button>
  </Box>
);

export default Home;
