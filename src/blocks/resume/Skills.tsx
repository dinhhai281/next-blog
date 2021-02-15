import { Flex, Tag, Text } from '@chakra-ui/react';
import { map } from 'fp-ts/lib/Array';
import { pipe } from 'fp-ts/lib/pipeable';
import React, { VFC } from 'react';

interface SkillsProps {
  items: string[];
}

export const Skills: VFC<SkillsProps> = ({ items }) => {
  return (
    <Flex wrap='wrap'>
      {pipe(
        items,
        map(item => (
          <Tag mr={1} ml={0} mt={2} variant='solid' borderRadius='full' colorScheme='whiteAlpha'>
            <Text key={item} fontSize='xs'>
              {item}
            </Text>
          </Tag>
        )),
      )}
    </Flex>
  );
};
