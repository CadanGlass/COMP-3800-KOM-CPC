import {
  Box,
  VStack,
  useBreakpointValue,
  Container,
  useColorMode,
} from '@chakra-ui/react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export const DefaultPage = ({
  children,
  stackSpacing = 8,
  padding = useBreakpointValue({ base: 4, lg: 16 }),
}) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? '#f7f7f7' : '#171923'; // Use a very light gray for the background in light mode

  return (
    <Box width="100%" bg={bgColor} minHeight="100vh">
      <Box py={4} px={padding}>
        {/* Header content goes here if needed */}
      </Box>
      <Container maxW="1700px" py={4} px={padding}>
        <VStack spacing={stackSpacing} width={'100%'}>
          {children}
        </VStack>
      </Container>
      <Box py={4} px={padding}>
        {/* Footer content */}
      </Box>
    </Box>
  );
};

export const DefaultVStack = ({ children, spacing = 4 }) => {
  return (
    <VStack spacing={spacing} align="center">
      {children}
    </VStack>
  );
};

export const DefaultCard = ({
  children,
  internalPaddingX = useBreakpointValue({ base: 4, md: 8, xl: 16 }),
  internalPaddingY = 6,
  borderRadius = 'xl',
}) => {
  const { colorMode } = useColorMode();
  const backgroundColor = colorMode === 'light' ? '#ffffff' : 'gray.800'; // Slightly darker background for cards in light mode
  const color = colorMode === 'light' ? 'black' : 'white';
  const boxShadow =
    colorMode === 'light'
      ? '0px 4px 10px rgba(0, 0, 0, 0.1)' // More subtle shadow for light mode
      : '0px 4px 10px rgba(0, 0, 0, 0.7)'; // More subtle shadow for dark mode

  return (
    <Box w={'100%'}>
      <InView as={motion.div} threshold={0.2}>
        {({ ref, inView }) => (
          <motion.div
            ref={ref}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : 100,
            }}
            transition={{ duration: 0.8 }}
          >
            <Box
              px={internalPaddingX}
              py={internalPaddingY}
              bg={backgroundColor}
              color={color}
              width={'100%'}
              borderRadius={borderRadius}
              boxShadow={boxShadow}
            >
              {children}
            </Box>
          </motion.div>
        )}
      </InView>
    </Box>
  );
};
