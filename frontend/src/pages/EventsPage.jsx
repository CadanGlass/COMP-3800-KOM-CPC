import {
  Box,
  Flex,
  VStack,
  Stack,
  Text,
  Input,
  IconButton,
  Button,
  Heading,
  Divider,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon, ChevronRightIcon } from "@chakra-ui/icons";

const events = [
  {
    date: "OCT 24",
    name: "Speed Control",
    price: "Free",
    time: "10:00",
  },
  {
    date: "OCT 27",
    name: "Community Outreach",
    price: "$12.99",
    time: "16:00",
  },
  {
    date: "OCT 30",
    name: "Networking with VPD",
    price: "Free",
    time: "18:00",
  },
  // Add more events here...
];

const EventsPage = () => {
  const bg = useColorModeValue("white", "gray.800"); // Background for the entire page
  const cardBg = useColorModeValue("gray.50", "gray.700"); // Background for the cards
  const textColor = useColorModeValue("gray.800", "white"); // Text color based on theme
  const borderColor = useColorModeValue("gray.200", "gray.600"); // Border color for inputs and buttons
  const hoverBg = useColorModeValue("gray.100", "gray.600"); // Hover background color for buttons
  const stackDirection = useBreakpointValue({ base: "column", md: "row" }); // Responsive direction for the stack

  return (
    <Box bg={bg} minHeight="100vh" p={4}>
      <Flex direction="column" gap={4}>
        <Heading as="h1" size="xl" textAlign="center" my={4}>
          KOM CPC Events
        </Heading>
        <Flex justify="space-between" align="center">
          <IconButton
            icon={<SearchIcon />}
            aria-label="Search Events"
            variant="ghost"
            colorScheme="gray"
          />
          <Input placeholder="Search Events" borderColor={borderColor} />
          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Open Menu"
            variant="ghost"
            colorScheme="gray"
          />
        </Flex>
        <Stack direction={stackDirection} spacing={4} overflowX="auto">
          {[
            "All",
            "Speed Control",
            "Neighbourhood Watch",
            "Workshops",
            "Education",
          ].map((category) => (
            <Button
              key={category}
              variant="outline"
              borderColor={borderColor}
              color={textColor}
              _hover={{ bg: hoverBg }}
            >
              {category}
            </Button>
          ))}
        </Stack>
        <Divider orientation="horizontal" borderColor={borderColor} my={2} />
        <VStack spacing={4}>
          {events.map((event, index) => (
            <Box
              key={index}
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
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default EventsPage;
