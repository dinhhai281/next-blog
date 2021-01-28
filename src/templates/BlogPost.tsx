import { Box, Heading } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React, { FC } from 'react';

export interface BlogPostProps {
  data: any;
}

const BlogPost: FC<BlogPostProps> = ({ data }) => {
  return (
    <Box>
      <Heading>{data.markdownRemark.frontmatter.title}</Heading>
    </Box>
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
      }
    }
  }
`;
