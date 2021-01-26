import { ContentSection, IntroSection } from '@app/blocks/home';
import { SEO } from '@app/components';
import { GithubData } from '@app/models';
import { MarkdownRemark } from '@app/models/MarkdownRemark';
import { Container, Stack } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React, { FC } from 'react';

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
  return (
    <>
      <SEO title='Welcome' />
      <Container maxW='100%' px={[8]} py={{ base: 4, lg: 12 }} minH='100vh' background='gray.900' centerContent>
        <Stack as='main' direction={{ base: 'column', lg: 'row' }} spacing={0} maxW='7xl' w='100%'>
          <IntroSection githubData={data.allGithubData.nodes[0]} />
          <ContentSection title='Programming' posts={data.allMarkdownRemark.nodes} />
        </Stack>
      </Container>
    </>
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
          featuredImage
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
