import { MotionBox, SEO } from '@app/components';
import { GithubData } from '@app/models';
import { MarkdownRemark } from '@app/models/MarkdownRemark';
import { CalendarIcon } from '@chakra-ui/icons';
import { Box, VStack, Flex, Avatar, Text, Button, Divider, Stack } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { FC, useEffect, useRef, useState } from 'react';
import format from 'date-fns/format';
import { useVerticalOffset } from '@app/contexts';
import { Variants } from 'framer-motion';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';

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
      <Flex w='100%' justify='center' bgGradient='linear(to-r,  #fc5c7d, #6a82fb)' py={4}>
        <VStack
          px={8}
          py={{ base: 12, lg: 24 }}
          w='100%'
          maxW='6xl'
          bgGradient='linear(to-br, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.2))'
          borderRadius='2rem'
        >
          <Text
            w={{ base: '100%', lg: '75%' }}
            textAlign='center'
            fontSize={{ base: '2xl', lg: '6xl' }}
            fontWeight='700'
            mb={8}
            color='gray.700'
          >
            {data.markdownRemark.frontmatter.title}
          </Text>
          <Box width='100%' mt={8} mb={8}>
            <Img alt='featured-image' fluid={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} />
          </Box>
          <Stack w={{ base: '100%', lg: '65%' }} direction={{ base: 'column', lg: 'row' }} spacing={{ base: 4, lg: 0 }}>
            <MotionBox
              d='flex'
              flexDirection='column'
              pos='fixed'
              top={12}
              p={4}
              borderRadius='1rem'
              left='calc((100vw - 1156px) / 2 + .5rem)'
              width='calc((1200px - 816px) / 2 - 16px)'
              bgGradient='linear(to-br, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.2))'
              variants={variants}
              animate={isSidebarVisible ? 'active' : 'inactive'}
            >
              <Text color='pink.700' mb={4} fontSize='lg' fontWeight='600'>
                <FormattedMessage id='home.greeting' />
              </Text>
              <Text fontSize='sm' mb={2} color='gray.800'>
                Get better on coding, cooking and gamming everyday.
              </Text>
              <Divider borderColor='brand.0' />
              <Button as={Link} to='/' mt={4} boxShadow='6px 6px 20px rgba(122, 122, 122, 0.2)'>
                Back
              </Button>
            </MotionBox>
            <Flex align='center' mr={12}>
              <Avatar mr={4} src={data.allGithubData.nodes[0].data.viewer.avatarUrl} />
              <Text color='gray.700' mr={1} fontSize={{ base: 'sm', lg: 'xl' }}>
                by
              </Text>
              <Text
                fontSize={{ base: 'sm', lg: 'xl' }}
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
              <Text fontSize={{ base: 'sm', lg: 'xl' }} color='gray.700'>
                {format(new Date(data.markdownRemark.frontmatter.date), 'dd MMMM, yyyy')}
              </Text>
            </Flex>
          </Stack>
          <Box
            className='article'
            data-testid='post-content'
            w={{ base: '100%', lg: '65%' }}
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
