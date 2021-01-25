import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text, useDisclosure } from '@chakra-ui/react';
import React, { FC } from 'react';
import { MotionBox } from './MotionBox';

export interface DropdownMenuProps {
  items?: string[];
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ children, items = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Popover trigger='hover' onOpen={onOpen} isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Button
          variant='ghost'
          iconSpacing={1}
          rightIcon={
            <MotionBox
              animate={{
                rotate: isOpen ? -180 : 0,
              }}
            >
              <ChevronDownIcon boxSize={5} />
            </MotionBox>
          }
        >
          <Text fontSize='lg' fontWeight={400}>
            {children}
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          {items?.map(item => (
            <Button key={item} variant='ghost' isFullWidth justifyContent='flex-start' h={12} onClick={onClose}>
              {item}
            </Button>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
