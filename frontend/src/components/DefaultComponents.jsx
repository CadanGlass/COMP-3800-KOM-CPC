import React from 'react';
import {
  Box,
  VStack,
  useBreakpointValue,
  Container,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// DefaultPage Component
export const DefaultPage = ({
  children,
  stackSpacing = 8,
  padding = useBreakpointValue({ base: 4, lg: 16 }),
}) => {
  const bgColor = useColorModeValue('#f7f7f7', '#171923');

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

// DefaultVStack Component
export const DefaultVStack = ({ children, spacing = 4 }) => {
  return (
    <VStack spacing={spacing} align="center">
      {children}
    </VStack>
  );
};

// DefaultCard Component
export const DefaultCard = ({
  children,
  internalPaddingX = useBreakpointValue({ base: 4, md: 8, xl: 16 }),
  internalPaddingY = 6,
  borderRadius = 'xl',
}) => {
  const backgroundColor = useColorModeValue('#ffffff', 'gray.800');
  const color = useColorModeValue('black', 'white');
  const boxShadow = useColorModeValue(
    '0px 4px 10px rgba(0, 0, 0, 0.1)',
    '0px 4px 10px rgba(0, 0, 0, 0.7)'
  );

  return (
    <Box w={'100%'}>
      <InView as={motion.div} threshold={0.2}>
        {({ ref, inView }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
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

// Section Component
export const Section = ({ bg, children, ...props }) => {
  return (
    <Box
      width="100%"
      bg={bg}
      px={{ base: 4, lg: 12 }}
      py={{ base: 4, md: 6 }} // Further reduced vertical padding
      {...props}
    >
      <Box maxW="1400px" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

// PageHeading Component
export const PageHeading = ({ title }) => {
  const headingColor = useColorModeValue('black', 'white');

  return (
    <Box textAlign="center" py={8}>
      <Heading size="2xl" color={headingColor}>
        {title}
      </Heading>
    </Box>
  );
};
