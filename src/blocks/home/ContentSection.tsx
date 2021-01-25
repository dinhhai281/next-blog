import { Affix, MotionBox } from '@app/components';
import { Card } from '@app/components/Card';
import { Stack, Text, useToken } from '@chakra-ui/react';
import React, { VFC } from 'react';

export interface ContentSectionProps {
  title: string;
}

export const ContentSection: VFC<ContentSectionProps> = ({ title }) => {
  const [gray800, pink600, gray900] = useToken('colors', ['gray.800', 'pink.600', 'gray.900']);

  return (
    <Stack direction='column' py={4} spacing={4} mb={8}>
      <Affix height={10}>
        {isFixed => (
          <MotionBox
            px={isFixed ? 8 : 0}
            h={isFixed ? 16 : 10}
            borderBottom='1px solid'
            animate={{
              position: isFixed ? 'fixed' : 'static',
              background: isFixed ? `${gray800}` : `${gray900}`,
              borderBottomColor: isFixed ? `${pink600}` : `${gray800}`,
              opacity: isFixed ? [0, 1] : 1,
            }}
            transition={{ duration: 0.4 }}
            top={0}
            left={0}
            w='100%'
            d='flex'
            alignItems='center'
          >
            <Text
              color='white'
              fontSize='md'
              mb={0}
              textTransform='uppercase'
              letterSpacing={2}
              h={10}
              d='flex'
              alignItems='center'
            >
              {title}
            </Text>
          </MotionBox>
        )}
      </Affix>

      <Card
        tagLabel={['Typescript', 'Angular', 'RxJS'].join(' | ')}
        createdDate='September 28, 2020'
        timeLabel='10 Minutes'
        label='State Management Trong Angular Với NgRx'
        summary='State Management hay quản lý state là một khái niệm khá phổ biến ở React và Angular cũng đã có một sự giao lưu tuyệt vời với nó qua NgRx…'
      />
      <Card
        tagLabel={['Typescript', 'Angular', 'RxJS'].join(' | ')}
        createdDate='September 28, 2020'
        timeLabel='10 Minutes'
        label='State Management Trong Angular Với NgRx'
        summary='State Management hay quản lý state là một khái niệm khá phổ biến ở React và Angular cũng đã có một sự giao lưu tuyệt vời với nó qua NgRx…'
      />
      <Card
        tagLabel={['Typescript', 'Angular', 'RxJS'].join(' | ')}
        createdDate='September 28, 2020'
        timeLabel='10 Minutes'
        label='State Management Trong Angular Với NgRx'
        summary='State Management hay quản lý state là một khái niệm khá phổ biến ở React và Angular cũng đã có một sự giao lưu tuyệt vời với nó qua NgRx…'
      />
      <Card
        tagLabel={['Typescript', 'Angular', 'RxJS'].join(' | ')}
        createdDate='September 28, 2020'
        timeLabel='10 Minutes'
        label='State Management Trong Angular Với NgRx'
        summary='State Management hay quản lý state là một khái niệm khá phổ biến ở React và Angular cũng đã có một sự giao lưu tuyệt vời với nó qua NgRx…'
      />
    </Stack>
  );
};
