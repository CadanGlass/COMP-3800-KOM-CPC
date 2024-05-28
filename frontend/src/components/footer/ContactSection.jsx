import React from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const alignment = useBreakpointValue({ base: 'center', md: 'left' });

  return (
    <Box p={1}>
      <Heading as="h3" size="sm" mb={2} textAlign={alignment}>
        Contact
      </Heading>
      <VStack align={alignment} spacing={1}>
        <HStack spacing={1} justifyContent={alignment}>
          <FaPhone />
          <Text fontSize="sm"> (604) 717-3434</Text>
        </HStack>
        <HStack spacing={1} justifyContent={alignment}>
          <FaEnvelope />
          <Text fontSize="sm">shieldyoursip@komcpc.com</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ContactSection;
