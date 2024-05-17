import React from 'react';
import { Box, Heading, Text, HStack, Flex, VStack, Divider, useColorModeValue } from '@chakra-ui/react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  const dividerColor = useColorModeValue('black', 'white');

  return (
    <Box p={1}>
      <Flex align="center" mb={4}>
        <Heading size="md" ml={2}>
          Contact Us
        </Heading>
      </Flex>
      <Divider mb={4} borderColor={dividerColor} />
      <VStack align="stretch" spacing={2}>
        <HStack spacing={2}>
          <FaPhone />
          <Text fontSize="md"> (123) 456-7890</Text>
        </HStack>
        <HStack spacing={2}>
          <FaEnvelope />
          <Text fontSize="md">email@email.com</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ContactSection;
