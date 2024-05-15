import React from 'react';
import { Box, Text, Heading, VStack } from '@chakra-ui/react';

const OperationHours = () => {
    return (
        <Box>
            <Heading size="md" mb={2}>
                Operation Hours
            </Heading>
            <VStack align="stretch" spacing={2}>
                <Text fontSize="md">Monday - Friday: 10:00am - 4:00pm</Text>
                <Text fontSize="md">Sunday: Closed</Text>
            </VStack>
        </Box>
    );
};

export default OperationHours;
