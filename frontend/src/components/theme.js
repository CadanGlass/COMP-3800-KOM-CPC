// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'gray.800',
        bg: 'gray.100',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'yellow.400', // make headings yellow
      },
    },
  },
  colors: {
    brand: {
      50: '#f5f5ff',
      100: '#dadaff',
      200: '#b7b7ff',
      300: '#9292ff',
      400: '#6969ff',
      500: '#3d3dff',
      600: '#3030cc',
      700: '#232399',
      800: '#161666',
      900: '#0b0b33',
    },
  },
});

export default theme;
