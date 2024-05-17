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
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('black', 'white');

  return (
    <Container maxW="1700px" py={4} px={padding} bg={bg} color={color}>
      <VStack spacing={stackSpacing} width={'100%'}>
        {children}
      </VStack>
    </Container>
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
  const backgroundColor = useColorModeValue('white', 'gray.700'); // White in light mode, dark gray in dark mode
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
