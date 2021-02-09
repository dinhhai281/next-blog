import { VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { IndicatorItem } from './IndicatorItem';

export interface IndicatorSectionProps {
  activeKey: string;
}

export const IndicatorSection: FC<IndicatorSectionProps> = ({ activeKey }) => {
  return (
    <VStack mt={8} align='flex-start' w='50%' spacing={4} d={{ base: 'none', lg: 'flex' }}>
      <IndicatorItem index={1} label='Programming' isActive={activeKey === 'Programming'} />
      <IndicatorItem index={2} label='Cooking' isActive={activeKey === 'Cooking'} />
    </VStack>
  );
};
