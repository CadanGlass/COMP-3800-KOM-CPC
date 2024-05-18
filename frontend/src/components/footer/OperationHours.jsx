import React from 'react';
import {
  Box,
  Text,
  VStack,
  SimpleGrid,
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

  const dayColor = useColorModeValue('gray.800', 'gray.300');
  const hourColor = useColorModeValue('gray.600', 'gray.400');
  const closedColor = useColorModeValue('red.600', 'red.400');

  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Operation Hours
      </Text>
      <SimpleGrid columns={2} spacing={2}>
        {days.map((day) => (
          <React.Fragment key={day.day}>
            <Text fontSize="sm" fontWeight="medium" color={dayColor}>
              {day.day}
            </Text>
            <Text
              fontSize="sm"
              fontWeight="medium"
              color={day.closed ? closedColor : hourColor}
            >
              {day.hours}
            </Text>
          </React.Fragment>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default OperationHours;
