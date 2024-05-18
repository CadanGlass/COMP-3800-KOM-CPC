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
        bg: props.colorMode === 'light' ? '#f5f5f5' : '#171923', // Use a soft off-white color for light mode
        minHeight: '100vh',
        fontSize: '20px', // Increase base font size
        fontFamily: 'Roboto, sans-serif', // Apply the new font
      },
      '.nav-item': {
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: 'blue.400', // Changed to a subtle blue
          transform: 'scaleX(0)',
          transition: 'transform 0.3s ease',
        },
        '&:hover::after': {
          transform: 'scaleX(1)',
        },
        '&:hover': {
          color: 'blue.400', // Changed to a subtle blue
        },
        '&.active': {
          fontWeight: 'bold',
          color: 'blue.500', // Changed to a subtle blue
          background: 'rgba(255, 255, 255, 0.1)',
          border: '2px solid blue.500', // Changed to a subtle blue
          textDecoration: 'underline',
        },
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'light' ? 'blue.800' : 'blue.400', 
        fontFamily: 'Roboto, sans-serif', 
      }),
      sizes: {
        xl: {
          fontSize: ['4xl', '5xl'], // Smaller font size for xl
        },
        lg: {
          fontSize: ['3xl', '4xl'], // Smaller font size for lg
        },
        md: {
          fontSize: ['2xl', '3xl'], // Smaller font size for md
        },
        sm: {
          fontSize: ['xl', '2xl'], // Smaller font size for sm
        },
        xs: {
          fontSize: ['lg', 'xl'], // Smaller font size for xs
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
