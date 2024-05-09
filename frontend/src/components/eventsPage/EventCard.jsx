import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons"; // Ensure this is also imported if used

// Example usage of IconButton in EventCard
const EventCard = ({ event, cardBg, textColor }) => {
  return (
    <Box
      bg={cardBg}
      p={4}
      rounded="md"
      shadow="md"
      w="full"
      _hover={{ shadow: "xl" }}
    >
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontWeight="bold" color={textColor}>
            {event.date}
          </Text>
          <Text fontSize="lg" fontWeight="bold" color={textColor}>
            {event.name}
          </Text>
          <Text color={textColor}>
            {event.price} · {event.time}
          </Text>
        </Box>
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="View Event"
          variant="ghost"
          colorScheme="gray"
        />
      </Flex>
    </Box>
  );
};

export default EventCard;
