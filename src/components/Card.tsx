import { Text, VStack, StackProps } from '@chakra-ui/react';
import React, { FC } from 'react';

export interface CardProps extends StackProps {
  tagLabel: string;
  createdDate: string;
  timeLabel: string;
  label: string;
  summary: string;
}

export const Card: FC<CardProps> = ({ tagLabel, createdDate, timeLabel, label, summary, ...rest }) => {
  return (
    <VStack p={10} bg='gray.800' align='flex-start' borderRadius={4} {...rest}>
      <Text color='white' textTransform='uppercase' letterSpacing={2} fontSize='xs'>
        {tagLabel}
      </Text>
      <VStack align='flex-start' spacing={0}>
        <Text color='gray.500' fontSize='xs' textTransform='capitalize'>
          {createdDate}
        </Text>
        <Text color='gray.500' fontSize='xs' textTransform='capitalize'>
          {timeLabel}
        </Text>
      </VStack>
      <Text color='white' fontSize='2xl' lineHeight='32px'>
        {label}
      </Text>
      <Text color='gray.400' fontSize='sm'>
        {summary}
      </Text>
    </VStack>
  );
};
