import React from 'react';
import {
  Box,
  VStack,
  useBreakpointValue,
  useColorModeValue,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const DefaultVStack = ({ children, spacing = 4 }) => {
  return (
    <VStack spacing={spacing} align="center">
      {children}
    </VStack>
  );
};

const DefaultCard = ({
  children,
  internalPaddingX = useBreakpointValue({ base: 4, md: 8, xl: 16 }),
  internalPaddingY = 6,
  borderRadius = 'xl',
}) => {
  const backgroundColor = useColorModeValue('#ffffff', 'gray.800');
  const color = useColorModeValue('black', 'white');
  const boxShadow = useColorModeValue(
    '0px 4px 20px rgba(0, 0, 0, 0.1)',
    '0px 4px 20px rgba(0, 0, 0, 0.7)'
  );
  const borderColor = useColorModeValue('gray.200', 'gray.600');

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
              border={`1px solid ${borderColor}`}
            >
              {children}
            </Box>
          </motion.div>
        )}
      </InView>
    </Box>
  );
};

const Section = ({ bg, children, ...props }) => {
  return (
    <Box
      width="100%"
      bg={bg}
      px={{ base: 4, lg: 12 }}
      py={{ base: 4, md: 6 }}
      {...props}
    >
      <Box maxW="1400px" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

const PageHeading = ({ title }) => {
  const headingColor = useColorModeValue('black', 'white');

  return (
    <Box textAlign="center" py={8}>
      <Heading size="2xl" color={headingColor}>
        {title}
      </Heading>
    </Box>
  );
};

const DefaultBlocksRenderer = ({ content }) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <Text pt={4}>{children}</Text>,
        link: ({ children, url }) => (
          <Link href={url} color="teal.500">
            {children}
          </Link>
        ),
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
};

export {
  DefaultVStack,
  DefaultCard,
  Section,
  PageHeading,
  DefaultBlocksRenderer,
};
