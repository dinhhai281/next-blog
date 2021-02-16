import { GithubData } from '@app/models';
import { Avatar, Box, Button, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { VFC } from 'react';

import githubLogo from '../../../static/github.png';
import { IndicatorSection } from './IndicatorSection';

interface IntroSectionProps {
  githubData: GithubData;
  activeKey: string;
}

export const IntroSection: VFC<IntroSectionProps> = ({ githubData, activeKey }) => {
  return (
    <>
      <Box h='calc(100vh - 2.5rem)' w={{ base: '50%' }} d={{ base: 'none', lg: 'block' }}>
        &nbsp;
      </Box>
      <Flex
        direction='column'
        h={{ lg: 'calc(100vh - 4.5rem)' }}
        pos={{ lg: 'fixed' }}
        w={{ base: '100%', lg: '50%' }}
        maxW={{ lg: '460px' }}
      >
        <VStack>
          <Box w={{ base: '100%' }} mb={{ base: 8 }}>
            <Text color='white' fontWeight={600} fontSize='3rem' lineHeight='4rem'>
              <FormattedMessage id='home.greeting' />
            </Text>
          </Box>
          <Box w={{ base: '100%' }} mb={{ base: 6 }}>
            <Text color='gray.300' fontSize='sm' lineHeight={7}>
              <FormattedMessage id='home.intro' />
            </Text>
          </Box>
        </VStack>
        <IndicatorSection activeKey={activeKey} />
        <Spacer />
        <Flex w={{ base: '100%' }} align='center' justify={{ base: 'space-between', lg: 'flex-start' }}>
          <Flex align='center' mr={{ base: 0, lg: 12 }}>
            <Avatar src={githubData.data.viewer.avatarUrl} size='md' mr={2} />
            <Text color='white' fontSize={['md', 'lg']}>
              {githubData.data.viewer.name}
            </Text>
          </Flex>

          <Button
            variant='outline'
            leftIcon={<Image src={githubLogo} alt='github logo' boxSize={4} objectFit='cover' />}
            iconSpacing={4}
            color='gray.200'
            size='sm'
            _hover={{
              bg: 'whiteAlpha.300',
              color: 'white',
            }}
            as='a'
            href={`https://github.com/${githubData.data.viewer.login}`}
            target='__blank'
          >
            Github
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
