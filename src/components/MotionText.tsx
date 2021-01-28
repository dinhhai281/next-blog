import { ComponentWithAs, forwardRef, TextProps, Text } from '@chakra-ui/react';
import { isValidMotionProp, motion, MotionProps } from 'framer-motion';
import React, { ReactElement } from 'react';

export type MotionTextProps = Omit<TextProps, keyof MotionProps> & MotionProps & { as?: ReactElement };
export const MotionText = motion.custom(
  forwardRef<MotionTextProps, 'p'>((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    );
    return <Text ref={ref} {...chakraProps} />;
  }),
) as ComponentWithAs<'p', MotionTextProps>;
