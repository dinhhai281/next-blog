import { ContentSection } from '@app/blocks/home';
import { SEO } from '@app/components';
import { Avatar, Box, Button, Container, Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React from 'react';

import githubLogo from '../../static/github.png';

// import { graphql } from 'gatsby';
// interface HomeProps {
//   data: {
//     allGithubData: {
//       edges: {
//         node: {
//           data: GithubData;
//         };
//       };
//     };
//   };
// }

const Home = () => {
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <>
      <SEO title='Welcome' />
      <Container maxW={['100%']} px={[8]} py={[4]} minH='100vh' background='gray.900'>
        <Flex as='main' direction={{ base: 'column' }}>
          <Box w={{ base: '100%' }} mb={{ base: 8 }}>
            <Text color='white' fontWeight={600} fontSize='3rem' lineHeight='4rem'>
              <FormattedMessage id='home.greeting' values={{ name: 'Hai Dinh Nguyen' }} />
            </Text>
          </Box>
          <Spacer />
          <Box w={{ base: '100%' }} mb={{ base: 6 }}>
            <Text color='gray.500' fontSize='sm' lineHeight={7}>
              <FormattedMessage id='home.intro' />
            </Text>
          </Box>
          <Flex w={{ base: '100%' }} align='center'>
            <Avatar name='Hai Nguyen' size='md' mr={6} />
            <Spacer />
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
            </Button>
          </Flex>

          <ContentSection title='Programming' />
          <ContentSection title='Cooking' />
        </Flex>
      </Container>
    </>
  );
};

export default Home;

// export const query = graphql`
//   query {
//     allGithubData {
//       edges {
//         node {
//           viewer {
//             avatarUrl
//             email
//             login
//             name
//           }
//         }
//       }
//     }
//   }
// `;
