import { VStack } from '@chakra-ui/react';
import React from 'react';
import { IndicatorItem } from './IndicatorItem';

export const IndicatorSection = () => {
  return (
    <VStack mt={8} align='flex-start' w='50%' spacing={4}>
      <IndicatorItem index={1} label='Programming' />
      <IndicatorItem index={2} label='Cooking' />
    </VStack>
  );
};
