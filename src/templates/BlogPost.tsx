import { SEO } from '@app/components';
import { GithubData } from '@app/models';
import { MarkdownRemark } from '@app/models/MarkdownRemark';
import { CalendarIcon } from '@chakra-ui/icons';
import { Box, VStack, Flex, Avatar, Text, HStack } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { FC } from 'react';
import format from 'date-fns/format';

export interface BlogPostProps {
  data: {
    markdownRemark: MarkdownRemark;
    allGithubData: {
      nodes: GithubData[];
    };
  };
}

const BlogPost: FC<BlogPostProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <Flex w='100%' justify='center'>
        <VStack px={8} py={24} w='100%' maxW='4xl'>
          <Text w='100%' textAlign='center' fontSize='6xl' fontWeight='700' mb={8} color='gray.700'>
            {data.markdownRemark.frontmatter.title}
          </Text>
          <Box width='150%' mt={8} mb={8}>
            <Img alt='featured-image' fluid={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
          </Box>
          <HStack w='100%'>
            <Flex align='center' mr={12}>
              <Avatar mr={4} src={data.allGithubData.nodes[0].data.viewer.avatarUrl} />
              <Text color='gray.700' mr={1} fontSize='xl'>
                by
              </Text>
              <Text
                fontSize='xl'
                color='gray.700'
                as='a'
                textDecoration='underline'
                href={`https://github.con/${data.allGithubData.nodes[0].data.viewer.login}`}
              >
                {data.allGithubData.nodes[0].data.viewer.name}
              </Text>
            </Flex>
            <Flex align='center'>
              <CalendarIcon color='gray.700' mr={4} w={6} h={6} />
              <Text fontSize='xl' color='gray.700'>
                {format(new Date(data.markdownRemark.frontmatter.date), 'dd MMMM, yyyy')}
              </Text>
            </Flex>
          </HStack>
          <Box
            className='article'
            data-testid='post-content'
            w='100%'
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></Box>
        </VStack>
      </Flex>
    </>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($mdpath: String!) {
    allGithubData {
      nodes {
        data {
          viewer {
            avatarUrl
            email
            name
            login
          }
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $mdpath } }) {
      html
      frontmatter {
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date
        tags
        duration
      }
    }
  }
`;
