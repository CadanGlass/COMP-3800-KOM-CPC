import {
  Box,
  VStack,
  useBreakpointValue,
  Container,
  useColorModeValue,
  Text,
  Heading,
} from '@chakra-ui/react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export const DefaultPage = ({
  children,
  stackSpacing = 8,
  padding = useBreakpointValue({ base: 4, lg: 16 }),
}) => {
  const contentBg = useColorModeValue('white', 'gray.900'); // White background in light mode
  const color = useColorModeValue('black', 'white');

  return (
    <Box width="100%" bg={contentBg} color={color}>
      {' '}
      {/* Set the background to contentBg */}
      <Box bg={contentBg} color={color} py={4} px={padding}>
        {/* Header content goes here if needed */}
      </Box>
      <Container maxW="1700px" py={4} px={padding} bg={contentBg} color={color}>
        {' '}
        {/* Remove Box wrapping Container */}
        <VStack spacing={stackSpacing} width={'100%'}>
          {children}
        </VStack>
      </Container>
      <Box bg={contentBg} color={color} py={4} px={padding}>
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
  const backgroundColor = useColorModeValue('white', 'gray.800'); // Darker gray in dark mode
  const color = useColorModeValue('black', 'white');
  const boxShadow = useColorModeValue(
    '0px 6px 15px rgba(0, 0, 0, 0.15)', // Slightly less strong shadow for light mode
    '0px 6px 15px rgba(0, 0, 0, 0.7)' // Stronger shadow for dark mode
  );

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
              backgroundColor={backgroundColor}
              color={color}
              width={'100%'}
              borderRadius={borderRadius}
              boxShadow={boxShadow} // Apply the adjusted shadow
            >
              {children}
            </Box>{' '}
          </motion.div>
        )}
      </InView>
    </Box>
  );
};
