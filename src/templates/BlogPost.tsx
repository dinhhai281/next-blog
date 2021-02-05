import { SEO } from '@app/components';
import { MarkdownRemark } from '@app/models/MarkdownRemark';
import { Box, Heading, VStack, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { FC } from 'react';

export interface BlogPostProps {
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const BlogPost: FC<BlogPostProps> = ({ data }) => {
  console.log(data.markdownRemark);
  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <Flex w='100%' justify='center'>
        <VStack px={8} py={24} w='100%' maxW='4xl'>
          <Heading w='100%' textAlign='center' fontSize='6xl' mb={8}>
            {data.markdownRemark.frontmatter.title}
          </Heading>
          <Box width='150%' mt={8} mb={8}>
            <Img alt='featured-image' fluid={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
          </Box>
          <div
            className='article'
            data-testid='post-content'
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
        </VStack>
      </Flex>
    </>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query($mdpath: String!) {
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
