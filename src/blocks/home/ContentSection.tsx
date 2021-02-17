import { Affix, MotionBox } from '@app/components';
import { Card } from '@app/components/Card';
import { useVerticalOffset } from '@app/contexts';
import { byDate, MarkdownRemark } from '@app/models/MarkdownRemark';
import { Stack, Text, useToken } from '@chakra-ui/react';
import { map } from 'fp-ts/lib/Array';
import { sort } from 'fp-ts/lib/Array';
import { some, none } from 'fp-ts/lib/Option';
import { getDualOrd } from 'fp-ts/lib/Ord';
import { pipe } from 'fp-ts/lib/pipeable';
import { Link, useIntl } from 'gatsby-plugin-intl';
import React, { RefObject, useEffect, useRef, useState, VFC } from 'react';

export interface ContentSectionProps {
  title: string;
  posts: MarkdownRemark[];
  onActive?: (key: string) => void;
}

export const ContentSection: VFC<ContentSectionProps> = ({ onActive, ...rest }) => {
  const verticalOffset = useVerticalOffset();
  const [isActive, setIsActive] = useState(false);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      sectionRef.current?.offsetHeight &&
      titleRef.current?.offsetTop &&
      isActive &&
      (verticalOffset >= sectionRef.current?.offsetHeight + titleRef.current?.offsetTop ||
        verticalOffset <= titleRef.current.offsetTop)
    ) {
      setIsActive(false);
    }

    if (
      sectionRef.current?.offsetHeight &&
      titleRef.current?.offsetTop &&
      verticalOffset >= titleRef.current?.offsetTop - 64 &&
      verticalOffset < sectionRef.current?.offsetHeight + titleRef.current?.offsetTop &&
      !isActive
    ) {
      onActive?.(rest.title);
      setIsActive(true);
    }
  }, [verticalOffset]);

  return <InnerContentSection {...rest} titleRef={titleRef} sectionRef={sectionRef} />;
};

interface InnerContentSectionProps extends ContentSectionProps {
  titleRef: RefObject<HTMLParagraphElement>;
  sectionRef: RefObject<HTMLDivElement>;
}

const InnerContentSection: VFC<InnerContentSectionProps> = React.memo(({ titleRef, sectionRef, title, posts }) => {
  const [gray800, pink600] = useToken('colors', ['gray.800', 'pink.600']);
  const [focusId, setFocusId] = useState<string | null>(null);
  const intl = useIntl();

  const handleCardFocusIn = (id: string) => () => {
    setFocusId(id);
  };

  const handleCardFocusOut = () => {
    setFocusId(null);
  };

  return (
    <Stack ref={sectionRef} direction='column' py={{ base: 4, lg: 0 }} spacing={4} mb={{ base: 8, md: 2 }} w='100%'>
      <Affix height={10} d={{ md: 'none' }}>
        {isFixed => (
          <MotionBox
            px={isFixed ? 8 : 0}
            h={isFixed ? 16 : 10}
            zIndex={1}
            borderBottom='1px solid'
            animate={{
              position: isFixed ? 'fixed' : 'static',
              background: isFixed ? `${gray800}` : 'transparent',
              borderBottomColor: isFixed ? `${pink600}` : 'transparent',
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

      <Text d={{ base: 'none', md: 'flex' }} fontSize='2xl' color='white' ref={titleRef}>
        {title}
      </Text>

      {pipe(
        posts,
        sort(getDualOrd(byDate)),
        map(({ frontmatter, id, excerpt }) => (
          <Card
            tagLabel={frontmatter.tags.split(',').join(' | ')}
            createdDate={frontmatter.date}
            timeLabel={intl.formatMessage({ id: 'home.minutes' }, { value: frontmatter.duration })}
            label={frontmatter.title}
            summary={excerpt}
            key={id}
            as={Link}
            to={frontmatter.path}
            onFocusIn={handleCardFocusIn(id)}
            onFocusOut={handleCardFocusOut}
            isFocus={focusId === null ? none : some(focusId === id)}
          />
        )),
      )}
    </Stack>
  );
});
