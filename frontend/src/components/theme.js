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
        bg: props.colorMode === 'light' ? '#ffffff' : '#171923',
        minHeight: '100vh',
        fontSize: '20px',
        fontFamily: 'Roboto, sans-serif',
      },
      '.nav-item': {
        position: 'relative',
        overflow: 'hidden',
        fontWeight: 'bold',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: 'blue.400',
          transform: 'scaleX(0)',
          transition: 'transform 0.3s ease',
        },
        '&:hover::after': {
          transform: 'scaleX(1)',
        },
        '&:hover': {
          color: 'blue.400',
        },
        '&.active': {
          fontWeight: 'bold',
          color: 'blue.500',
          textDecoration: 'underline',
        },
      },
      footer: {
        bg: props.colorMode === 'light' ? '#f0f4f8' : 'gray.800',
        color: props.colorMode === 'light' ? 'gray.800' : 'gray.100',
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'light' ? 'blue.800' : 'blue.400',
        fontFamily: 'Roboto, sans-serif',
        textShadow:
          props.colorMode === 'light'
            ? '1px 1px 2px lightgray'
            : '1px 1px 2px black',
      }),
      sizes: {
        xl: (props) => ({
          fontSize: ['4xl', '5xl'],
          textShadow:
            props.colorMode === 'light'
              ? '2px 2px 4px lightgray'
              : '2px 2px 4px black',
        }),
        lg: (props) => ({
          fontSize: ['3xl', '4xl'],
          textShadow:
            props.colorMode === 'light'
              ? '2px 2px 4px lightgray'
              : '2px 2px 4px black',
        }),
        md: (props) => ({
          fontSize: ['2xl', '3xl'],
          textShadow:
            props.colorMode === 'light'
              ? '2px 2px 4px lightgray'
              : '2px 2px 4px black',
        }),
        sm: (props) => ({
          fontSize: ['xl', '2xl'],
          textShadow:
            props.colorMode === 'light'
              ? '1px 1px 2px lightgray'
              : '1px 1px 2px black',
        }),
        xs: (props) => ({
          fontSize: ['lg', 'xl'],
          textShadow:
            props.colorMode === 'light'
              ? '1px 1px 2px lightgray'
              : '1px 1px 2px black',
        }),
      },
    },
    Text: {
      baseStyle: (props) => ({
        fontSize: '20px',
        fontFamily: 'Roboto, sans-serif',
        color: props.colorMode === 'light' ? 'gray.800' : 'gray.100',
      }),
    },
    Input: {
      baseStyle: (props) => ({
        field: {
          backgroundColor: props.colorMode === 'light' ? 'white' : 'gray.700',
          borderColor: props.colorMode === 'light' ? 'gray.300' : 'gray.600',
          color: props.colorMode === 'light' ? 'gray.800' : 'gray.100',
          _placeholder: {
            color: props.colorMode === 'light' ? 'gray.500' : 'gray.400',
          },
        },
      }),
      sizes: {
        md: {
          field: {
            fontSize: 'lg',
            px: 4,
            py: 2,
          },
        },
      },
      variants: {
        outline: (props) => ({
          field: {
            borderColor: props.colorMode === 'light' ? 'gray.300' : 'gray.600',
            _hover: {
              borderColor:
                props.colorMode === 'light' ? 'gray.400' : 'gray.500',
            },
            _focus: {
              borderColor:
                props.colorMode === 'light' ? 'blue.500' : 'blue.300',
              boxShadow: `0 0 0 1px ${
                props.colorMode === 'light' ? 'blue.500' : 'blue.300'
              }`,
            },
          },
        }),
      },
    },
    Button: {
      baseStyle: (props) => ({
        fontWeight: 'bold',
        borderRadius: 'md',
        boxShadow: 'lg',
        _hover: {
          transform: 'scale(1.05)',
        },
        _active: {
          transform: 'scale(1)',
        },
      }),
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'light' ? 'blue.500' : 'blue.600',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'light' ? 'blue.400' : 'blue.700',
          },
          _active: {
            bg: props.colorMode === 'light' ? 'blue.600' : 'blue.800',
          },
        }),
        outline: (props) => ({
          borderColor: props.colorMode === 'light' ? 'blue.500' : 'blue.600',
          color: props.colorMode === 'light' ? 'blue.500' : 'blue.600',
          _hover: {
            bg: props.colorMode === 'light' ? 'blue.100' : 'blue.700',
          },
        }),
        learnMore: (props) => ({
          bgGradient: 'linear(to-r, blue.500, blue.700)',
          fontSize: 'sm',
          fontWeight: 600,
          color: 'white',
          textTransform: 'none',
          _hover: {
            bgGradient: 'linear(to-r, blue.600, blue.800)',
            transform: 'scale(1.05)',
          },
          _active: {
            bgGradient: 'linear(to-r, blue.700, blue.900)',
          },
          borderRadius: 'md',
          boxShadow: 'lg',
          transition: 'all 0.2s ease-in-out',
        }),
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
      800: '#2A4365',
      900: '#1A365D',
    },
  },
});

export default theme;
