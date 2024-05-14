import React from 'react';
import { Box, Text, Heading, VStack } from '@chakra-ui/react';

const OperationHours = () => {
    return (
        <Box>
            <Heading size="md" mb={2}>
                Operation Hours
            </Heading>
            <VStack align="start" spacing={1}>
                <Text fontSize="sm">Monday: 10:00am - 4:00pm</Text>
                <Text fontSize="sm">Tuesday: 10:00am - 4:00pm</Text>
                <Text fontSize="sm">Wednesday: 10:00am - 4:00pm</Text>
                <Text fontSize="sm">Thursday: 10:00am - 4:00pm</Text>
                <Text fontSize="sm">Friday: 10:00am - 4:00pm</Text>
                <Text fontSize="sm">Saturday: 10:00am - 4:00pm</Text>
                <Text fontSize="sm">Sunday: Closed</Text>
            </VStack>
        </Box>
    );
};

export default OperationHours;
