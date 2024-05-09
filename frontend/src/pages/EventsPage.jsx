import {
  Box,
  Flex,
  VStack,
  Heading,
  Divider,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

import SearchBar from "../components/eventsPage/SearchBar";
import CategoryFilter from "../components/eventsPage/CategoryFilter";
import EventCard from "../components/eventsPage/EventCard";



const EventsPage = () => {
  const bg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const hoverBg = useColorModeValue("gray.100", "gray.600");
  const stackDirection = useBreakpointValue({ base: "column", md: "row" });

  const events = [
    { date: "OCT 24", name: "Speed Control", price: "Free", time: "10:00" },
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
  ];

  return (
    <Box bg={bg} minHeight="100vh" p={4}>
      <Flex direction="column" gap={4}>
        <Heading as="h1" size="xl" textAlign="center" my={4}>
          KOM CPC Events
        </Heading>
        <SearchBar borderColor={borderColor} />
        <CategoryFilter
          borderColor={borderColor}
          textColor={textColor}
          hoverBg={hoverBg}
          stackDirection={stackDirection}
        />
        <Divider orientation="horizontal" borderColor={borderColor} my={2} />
        <VStack spacing={4}>
          {events.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              cardBg={cardBg}
              textColor={textColor}
            />
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default EventsPage;
