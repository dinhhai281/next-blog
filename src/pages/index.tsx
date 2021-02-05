import { ContentSection, IntroSection } from '@app/blocks/home';
import { SEO } from '@app/components';
import { VerticalOffsetProvider } from '@app/contexts';
import { GithubData } from '@app/models';
import { MarkdownRemark } from '@app/models/MarkdownRemark';
import { Container, Stack, VStack } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React, { FC, useState } from 'react';

interface HomeProps {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownRemark[];
    };
    allGithubData: {
      nodes: GithubData[];
    };
  };
}

const Home: FC<HomeProps> = ({ data }) => {
  const [activeKey, secActiveKey] = useState('');

  return (
    <VerticalOffsetProvider>
      {/* <ActiveSectionProvider> */}
      <SEO title='Welcome' />
      <Container maxW='100%' px={[8]} py={{ base: 4, lg: 12 }} minH='100vh' background='gray.900' centerContent>
        <Stack as='main' direction={{ base: 'column', lg: 'row' }} spacing={0} maxW='7xl' w='100%'>
          <IntroSection githubData={data.allGithubData.nodes[0]} activeKey={activeKey} />

          <VStack w={{ base: '100%', lg: '50%' }}>
            <ContentSection title='Programming' posts={data.allMarkdownRemark.nodes} onActive={secActiveKey} />
            <ContentSection title='Cooking' posts={data.allMarkdownRemark.nodes} onActive={secActiveKey} />
          </VStack>
        </Stack>
      </Container>
      {/* </ActiveSectionProvider> */}
    </VerticalOffsetProvider>
  );
};

export default Home;

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          path
          title
          tags
          date
          duration
        }
        id
        excerpt
      }
    }
    allGithubData {
      nodes {
        data {
          viewer {
            avatarUrl
            email
            login
            name
          }
        }
      }
    }
  }
`;
