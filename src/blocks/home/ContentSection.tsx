import { Affix, MotionBox } from '@app/components';
import { Card } from '@app/components/Card';
import { MarkdownRemark } from '@app/models/MarkdownRemark';
import { Stack, Text, useToken } from '@chakra-ui/react';
import React, { VFC } from 'react';
import { subtract } from 'ramda';
import { Link } from 'gatsby-plugin-intl';

export interface ContentSectionProps {
  title: string;
  posts: MarkdownRemark[];
}

export const ContentSection: VFC<ContentSectionProps> = ({ title, posts }) => {
  const [gray800, pink600, gray900] = useToken('colors', ['gray.800', 'pink.600', 'gray.900']);

  return (
    <Stack direction='column' py={4} spacing={4} mb={8} w={{ base: '100%', lg: '50%' }}>
      <Affix height={10} d={{ md: 'none' }}>
        {isFixed => (
          <MotionBox
            px={isFixed ? 8 : 0}
            h={isFixed ? 16 : 10}
            borderBottom='1px solid'
            animate={{
              position: isFixed ? 'fixed' : 'static',
              background: isFixed ? `${gray800}` : `${gray900}`,
              borderBottomColor: isFixed ? `${pink600}` : `${gray800}`,
              opacity: isFixed ? [0, 1] : 1,
            }}
            transition={{ duration: 0.4 }}
            top={0}
            left={0}
            w='100%'
            d='flex'
            alignItems='center'
          >
            <Text
              color='white'
              fontSize='md'
              mb={0}
              textTransform='uppercase'
              letterSpacing={2}
              h={10}
              d='flex'
              alignItems='center'
            >
              {title}
            </Text>
          </MotionBox>
        )}
      </Affix>

      {posts
        .sort((a, b) => [b.frontmatter.date, a.frontmatter.date].map(Date.parse).reduce(subtract))
        .map(({ frontmatter, id, excerpt }) => (
          <Card
            tagLabel={frontmatter.tags.split(',').join(' | ')}
            createdDate={frontmatter.date}
            timeLabel={`${frontmatter.duration} minutes`}
            label={frontmatter.title}
            summary={excerpt}
            key={id}
            as={Link}
            to={frontmatter.path}
          ></Card>
        ))}
    </Stack>
  );
};
