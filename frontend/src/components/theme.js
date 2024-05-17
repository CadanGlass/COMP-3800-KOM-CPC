import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      'html, body, #root': {
        color: props.colorMode === 'light' ? 'gray.800' : 'gray.100',
        bg: props.colorMode === 'light' ? 'white' : '#171923',
        minHeight: '100vh',
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'yellow.400', // Set the default color for all headings to yellow
      },
    },
  },
  colors: {
    brand: {
      50: '#e6fffa',
      100: '#b2f5ea',
      200: '#81e6d9',
      300: '#4fd1c5',
      400: '#38b2ac',
      500: '#319795',
      600: '#2c7a7b',
      700: '#285e61',
      800: '#234e52',
      900: '#1d4044',
    },
  },
});

export default theme;
