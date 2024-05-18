import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const OperationHours = () => {
  const days = [
    { day: 'Monday', hours: '10:00am - 4:00pm' },
    { day: 'Tuesday', hours: '10:00am - 4:00pm' },
    { day: 'Wednesday', hours: '10:00am - 4:00pm' },
    { day: 'Thursday', hours: '10:00am - 4:00pm' },
    { day: 'Friday', hours: '10:00am - 4:00pm' },
    { day: 'Saturday', hours: '10:00am - 4:00pm' },
    { day: 'Sunday', hours: 'Closed', closed: true },
  ];

  const hourColor = useColorModeValue('gray.600', 'gray.300');
  const closedColor = useColorModeValue('red.600', 'red.400');

  const groupedDays = days.reduce((acc, current) => {
    const lastGroup = acc[acc.length - 1];
    if (lastGroup && lastGroup.hours === current.hours) {
      lastGroup.days.push(current.day);
    } else {
      acc.push({
        days: [current.day],
        hours: current.hours,
        closed: current.closed,
      });
    }
    return acc;
  }, []);

  return (
    <Box>
      <Heading as="h3" size="lg" mb={2}>
        Hours
      </Heading>
      <VStack align="start" spacing={2}>
        {groupedDays.map((group, index) => (
          <Text
            key={index}
            fontSize="sm"
            fontWeight="medium"
            color={group.closed ? closedColor : hourColor}
          >
            {group.days.join(', ')}: {group.hours}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default OperationHours;
