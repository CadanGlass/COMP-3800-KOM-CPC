import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      '@import': [
        "url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')",
      ],
      'html, body, #root': {
        color: props.colorMode === 'light' ? 'gray.800' : 'gray.100',
        bg: props.colorMode === 'light' ? 'white' : '#171923',
        minHeight: '100vh',
        fontSize: '20px', // Increase base font size
        fontFamily: 'Roboto, sans-serif', // Apply the new font
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'light' ? 'blue.800' : 'yellow.400', // Blue in light mode, yellow in dark mode
        fontFamily: 'Roboto, sans-serif', // Apply the new font
      }),
      sizes: {
        xl: {
          fontSize: ['5xl', '6xl'], // Bigger font size for xl
        },
        lg: {
          fontSize: ['4xl', '5xl'], // Bigger font size for lg
        },
        md: {
          fontSize: ['3xl', '4xl'], // Bigger font size for md
        },
        sm: {
          fontSize: ['2xl', '3xl'], // Bigger font size for sm
        },
        xs: {
          fontSize: ['xl', '2xl'], // Bigger font size for xs
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: '20px', // Increase base font size for text
        fontFamily: 'Roboto, sans-serif', // Apply the new font
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
    blue: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2A4365', // Custom blue color
      900: '#1A365D',
    },
  },
});

export default theme;
