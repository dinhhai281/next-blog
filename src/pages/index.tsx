import { SEO } from '@app/components';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Home = () => (
  <Box p={8}>
    <SEO title='Home Page'></SEO>
    <Text>Hello World</Text>
  </Box>
);

export default Home;
