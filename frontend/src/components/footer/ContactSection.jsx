import React from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <Box p={1}>
      <Heading as="h3" size="sm" mb={2}>
        Contact
      </Heading>
      <VStack align="stretch" spacing={1}>
        <HStack spacing={1}>
          <FaPhone />
          <Text fontSize="sm"> (123) 456-7890</Text>
        </HStack>
        <HStack spacing={1}>
          <FaEnvelope />
          <Text fontSize="sm">email@email.com</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ContactSection;
