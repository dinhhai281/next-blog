import { MotionBox, SEO } from '@app/components';
import { GithubData } from '@app/models';
import { MarkdownRemark } from '@app/models/MarkdownRemark';
import { CalendarIcon } from '@chakra-ui/icons';
import { Box, VStack, Flex, Avatar, Text, HStack, Button, Divider } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { FC, useEffect, useRef, useState } from 'react';
import format from 'date-fns/format';
import { useVerticalOffset } from '@app/contexts';
import { Variants } from 'framer-motion';
import { Link } from 'gatsby-plugin-intl';

export interface BlogPostProps {
  data: {
    markdownRemark: MarkdownRemark;
    allGithubData: {
      nodes: GithubData[];
    };
  };
}

const BlogPost: FC<BlogPostProps> = ({ data }) => {
  const verticalOffset = useVerticalOffset();
  const mainRef = useRef<HTMLDivElement>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const variants: Variants = {
    active: {
      opacity: 1,
    },
    inactive: {
      opacity: 0,
      y: 200,
      transition: {
        duration: 0,
      },
    },
  };

  useEffect(() => {
    if (mainRef.current?.offsetTop && verticalOffset >= mainRef.current.offsetTop && !isSidebarVisible) {
      setIsSidebarVisible(true);
    }
    if (mainRef.current?.offsetTop && verticalOffset < mainRef.current.offsetTop && isSidebarVisible) {
      setIsSidebarVisible(false);
    }
  }, [verticalOffset]);

  return (
    <>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <Flex w='100%' justify='center'>
        <VStack px={8} py={24} w='100%' maxW='4xl'>
          <Text w='100%' textAlign='center' fontSize='6xl' fontWeight='700' mb={8} color='gray.700'>
            {data.markdownRemark.frontmatter.title}
          </Text>
          <Box width='150%' mt={8} mb={8} maxW='1200px'>
            <Img alt='featured-image' fluid={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
          </Box>
          <HStack w='100%'>
            <MotionBox
              d='flex'
              flexDirection='column'
              pos='fixed'
              top={12}
              left='calc((100vw - 1200px) / 2 + .5rem)'
              width='calc((1200px - 896px) / 2 - 16px)'
              variants={variants}
              animate={isSidebarVisible ? 'active' : 'inactive'}
            >
              <Text color='pink.700' mb={4} fontSize='lg' fontWeight='600'>
                Hai Nguyen&apos;s Blog
              </Text>
              <Text fontSize='sm' mb={2} color='gray.800'>
                Get better on coding, cooking and gamming everyday.
              </Text>
              <Divider />
              <Button as={Link} to='/' mt={4}>
                Back
              </Button>
            </MotionBox>
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
            <Flex align='center' ref={mainRef}>
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
