import { Box } from '@chakra-ui/react';
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';

export interface AffixProps {
  children: (isFixed: boolean) => ReactNode;
  topOffset?: number;
  height: number;
}

export const Affix: FC<AffixProps> = ({ children, topOffset = 0, height }) => {
  const [isFixed, setIsFixed] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsFixed(!entry.isIntersecting && entry.boundingClientRect.top <= 0);
        });
      },
      { root: null, threshold: 1.0, rootMargin: `${topOffset}px` },
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box ref={boxRef}>
      {isFixed && <Box h={height} />}
      {children(isFixed)}
    </Box>
  );
};
