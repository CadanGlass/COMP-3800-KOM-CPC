import React from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  Flex,
  VStack,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const dividerColor = useColorModeValue('black', 'white');

  return (
    <Box p={1}>
      <Flex align="center" mb={2}>
        <Heading size="sm" ml={2}>
          Contact
        </Heading>
      </Flex>
      <Divider mb={2} borderColor={dividerColor} />
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
