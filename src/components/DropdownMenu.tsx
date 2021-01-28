import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonProps,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

import { MotionBox } from './MotionBox';

export interface DropdownMenuProps extends ButtonProps {
  items?: any[];
  label: string;
  children: (props: any) => ReactNode;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ children, label, items = [], ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Popover trigger='hover' onOpen={onOpen} isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <Button
          variant='ghost'
          iconSpacing={1}
          as='div'
          cursor='pointer'
          {...rest}
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
            {label}
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          {items?.map(item => (
            <Box key={item} onClick={onClose}>
              {children ? (
                children(item)
              ) : (
                <Button variant='ghost' isFullWidth justifyContent='flex-start' h={12}>
                  {item}
                </Button>
              )}
            </Box>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
