import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const OperationHours = () => {
  return (
    <Box p={1} textAlign="center">
      <Heading as="h3" size="sm" mb={2}>
        Hours
      </Heading>
      <VStack align="center" spacing={2}>
        <Text fontSize="sm" fontWeight="medium">
          Monday - Saturday: 10:00am - 4:00pm
        </Text>
        <Text fontSize="sm" fontWeight="medium" color="red.600">
          Sunday: Closed
        </Text>
      </VStack>
    </Box>
  );
};

export default OperationHours;
