import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

const EventCard = ({ event }) => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image src={event.image} alt={event.name} mb={4} />
      <Text fontSize="xl" fontWeight="bold" textAlign="center">
        {event.name}
      </Text>
      <Text mt={2} textAlign="center">
        {event.description}
      </Text>
    </Box>
  );
};

export default EventCard;
