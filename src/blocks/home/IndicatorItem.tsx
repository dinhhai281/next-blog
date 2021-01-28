import { Flex, useToken } from '@chakra-ui/react';
import { MotionBox, MotionText } from '@app/components';
import React, { FC, useCallback, useState } from 'react';
import { Variants } from 'framer-motion';

interface IndicatorItemProps {
  index: number;
  label: string;
}

export const IndicatorItem: FC<IndicatorItemProps> = ({ index, label }) => {
  const [gray500, white] = useToken('colors', ['gray.500', 'white']);
  const [isActive, setIsActive] = useState(false);
  const resolveVariant = useCallback((isActive: boolean) => (isActive ? 'active' : 'inactive'), []);
  const variants: Variants = {
    active: {
      width: '3rem',
      backgroundColor: white,
    },
    inactive: {
      width: '1.5rem',
      backgroundColor: gray500,
    },
  };
  const textVariants: Variants = {
    active: {
      color: white,
    },
    inactive: {
      color: gray500,
    },
  };

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <Flex color='gray.300' w='100%' align='center' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <MotionText mr={4} variants={textVariants} animate={resolveVariant(isActive)}>
        {index.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </MotionText>
      <MotionBox
        h='1px'
        bgColor='gray.500'
        alignSelf='center'
        mr={4}
        w={6}
        variants={variants}
        animate={resolveVariant(isActive)}
      />
      <MotionText variants={textVariants} animate={resolveVariant(isActive)}>
        {label}
      </MotionText>
    </Flex>
  );
};
