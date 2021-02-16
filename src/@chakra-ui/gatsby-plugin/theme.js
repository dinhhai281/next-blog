import { extendTheme } from '@chakra-ui/react';

import colors from './foundation/colors';

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        fontFamily: 'Montserrat',
      },
    },
  },
});

export default theme;
