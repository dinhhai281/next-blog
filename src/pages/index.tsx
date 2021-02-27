import { ContentSection, IntroSection } from '@app/blocks/home';
import { SEO } from '@app/components';
import { GithubData } from '@app/models';
import { MarkdownRemark } from '@app/models/MarkdownRemark';
import { Container, Stack, VStack } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
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
  const intl = useIntl();

  return (
    <>
      <SEO title={intl.formatMessage({ id: 'home.greeting' })} />
      <Container
        maxW='100%'
        px={[8]}
        py={{ base: 4, lg: 12 }}
        minH='100vh'
        bgGradient='linear(to-r,   #16222a, #3a6073)'
        centerContent
      >
        <Stack as='main' direction={{ base: 'column', lg: 'row' }} spacing={0} maxW='7xl' w='100%'>
          <IntroSection githubData={data.allGithubData.nodes[0]} activeKey={activeKey} />

          <VStack w={{ base: '100%', lg: '50%' }}>
            <ContentSection
              title={intl.formatMessage({ id: 'home.programming' })}
              posts={data.allMarkdownRemark.nodes.filter(node => node.frontmatter.category === 'PROGRAMMING')}
              onActive={secActiveKey}
            />
            <ContentSection
              title={intl.formatMessage({ id: 'home.cooking' })}
              posts={data.allMarkdownRemark.nodes.filter(node => node.frontmatter.category === 'COOKING')}
              onActive={secActiveKey}
            />
          </VStack>
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
          date
          duration
          category
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
