import React from 'react';
import { Box, Text, Heading, VStack, HStack, Divider, Flex, useColorModeValue } from '@chakra-ui/react';

const OperationHours = () => {
    const hours = [
        { day: 'Monday', time: '10:00am - 4:00pm' },
        { day: 'Tuesday', time: '10:00am - 4:00pm' },
        { day: 'Wednesday', time: '10:00am - 4:00pm' },
        { day: 'Thursday', time: '10:00am - 4:00pm' },
        { day: 'Friday', time: '10:00am - 4:00pm' },
        { day: 'Saturday', time: '10:00am - 4:00pm' },
        { day: 'Sunday', time: 'Closed' },
    ];
    const dividerColor = useColorModeValue('black', 'white');
    const textColor = useColorModeValue('gray.800', 'gray.200');
    const closedColor = 'red.500';

    return (
        <Box p={1}>
            <Flex align="center" mb={4}>
                <Heading size="md" ml={2}>
                    Operation Hours
                </Heading>
            </Flex>
            <Divider mb={4} borderColor={dividerColor} />
            <VStack align="stretch" spacing={1}>
                {hours.map((hour, index) => (
                    <HStack key={index} justify="space-between">
                        <Text fontSize="md" fontWeight="semibold" color={textColor}>
                            {hour.day}
                        </Text>
                        <Text fontSize="md" color={hour.time === 'Closed' ? closedColor : textColor}>
                            {hour.time}
                        </Text>
                    </HStack>
                ))}
            </VStack>
        </Box>
    );
};

export default OperationHours;
