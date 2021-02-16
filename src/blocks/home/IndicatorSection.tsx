import { VStack } from '@chakra-ui/react';
import { useIntl } from 'gatsby-plugin-intl';
import React, { FC } from 'react';
import { IndicatorItem } from './IndicatorItem';

export interface IndicatorSectionProps {
  activeKey: string;
}

export const IndicatorSection: FC<IndicatorSectionProps> = ({ activeKey }) => {
  const intl = useIntl();
  return (
    <VStack mt={8} align='flex-start' w='50%' spacing={4} d={{ base: 'none', lg: 'flex' }}>
      <IndicatorItem
        index={1}
        label={intl.formatMessage({ id: 'home.programming' })}
        isActive={activeKey === 'Programming'}
      />
      <IndicatorItem index={2} label={intl.formatMessage({ id: 'home.cooking' })} isActive={activeKey === 'Cooking'} />
    </VStack>
  );
};
