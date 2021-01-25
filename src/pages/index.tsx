import { SEO } from '@app/components';
import { Avatar, Box, Button, Container, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

import githubLogo from '../../static/github.png';

const Home = () => {
  return (
    <>
      <SEO title='Welcome' />

      <Container maxW={['100%']} px={[8]} py={[4]} minH='100vh' background='gray.900'>
        <Flex as='main' direction={{ base: 'column' }}>
          <Box w={{ base: '100%' }} mb={{ base: 8 }}>
            <Text color='white' fontWeight={600} fontSize='3rem' lineHeight='4rem'>
              Hello, I&apos;m Hai Dinh Nguyen.
            </Text>
          </Box>
          <Spacer />
          <Box w={{ base: '100%' }} mb={{ base: 6 }}>
            <Text color='gray.500' fontSize='sm' lineHeight={7}>
              I&apos;m a Software Engineer. I mostly do front-end development. I can work well with React and Angular,
              also a big fan of Functional Programming and Reactive Programming.
            </Text>
          </Box>
          <Flex w={{ base: '100%' }} align='center'>
            <Avatar name='Hai Nguyen' size='md' mr={6} />
            <Button
              variant='outline'
              leftIcon={<Image src={githubLogo} alt='github logo' boxSize={4} objectFit='cover' />}
              iconSpacing={4}
              color='gray.300'
              size='sm'
              _hover={{
                bg: 'gray.600',
                color: 'white',
              }}
            >
              Github
              {/* <Text color='gray.300' fontSize='sm'>
              </Text> */}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
