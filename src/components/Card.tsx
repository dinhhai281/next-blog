import { Text, VStack, StackProps, forwardRef } from '@chakra-ui/react';
import { fold, Option } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/pipeable';
import { Variants } from 'framer-motion';
import React, { useMemo } from 'react';
import { MotionBox } from '.';

export interface CardProps extends StackProps {
  tagLabel: string;
  createdDate: string;
  timeLabel: string;
  label: string;
  summary: string;
  onFocusIn: VoidFunction;
  onFocusOut: VoidFunction;
  isFocus: Option<boolean>;
}

export const Card = forwardRef<CardProps, 'div'>(
  ({ onFocusIn, onFocusOut, isFocus, tagLabel, createdDate, timeLabel, label, summary, ...rest }, ref) => {
    const variants: Variants = {
      active: {
        scale: 1.05,
      },
      inactive: {
        opacity: 0.4,
      },
      none: {
        scale: 1,
      }
    }

    const resolveAnimate = useMemo(() => pipe(
      isFocus,
      fold(() => 'none', value => value ? 'active' : 'inactive')
    ), [isFocus])

    return (
      <MotionBox variants={variants} animate={resolveAnimate}>
        <VStack
          p={10}
          bg='gray.800'
          align='flex-start'
          borderRadius={4}
          {...rest}
          ref={ref}
          onMouseEnter={onFocusIn}
          onMouseLeave={onFocusOut}
        >
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
      </MotionBox>
    );
  },
);
