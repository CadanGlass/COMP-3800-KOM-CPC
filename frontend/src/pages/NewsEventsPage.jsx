import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Divider,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  Container,
  Text,
} from '@chakra-ui/react';

import EventCard from '../components/eventsPage/EventCard';
import PastNewsletters from '../components/newsletter/PastNewsletters';
import InstagramFeed from '../components/eventsPage/InstagramFeed';
import {
  Section,
  DefaultCard,
  PageHeading,
} from '../components/DefaultComponents';
import ShowMoreButton from '../components/buttons/ShowMoreButton';

const NewsEventsPage = () => {
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  const bg = useColorModeValue('white', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });

  const events = [
    { date: 'OCT 24', name: 'Speed Control', price: 'Free', time: '10:00' },
    {
      date: 'OCT 27',
      name: 'Community Outreach',
      price: '$12.99',
      time: '16:00',
    },
    {
      date: 'OCT 30',
      name: 'Networking with VPD',
      price: 'Free',
      time: '18:00',
    },
    {
      date: 'NOV 02',
      name: 'Self Defense Workshop',
      price: '$9.99',
      time: '14:00',
    },
    {
      date: 'NOV 05',
      name: 'Neighborhood Watch Training',
      price: 'Free',
      time: '10:00',
    },
    {
      date: 'NOV 10',
      name: 'Fire Safety Seminar',
      price: '$5.00',
      time: '13:00',
    },
    { date: 'NOV 15', name: 'CPR Training', price: '$15.00', time: '09:00' },
  ];

  const [visibleEvents, setVisibleEvents] = useState(3);
  const [visibleNewsletters, setVisibleNewsletters] = useState(2);

  const handleShowMoreEvents = () => {
    setVisibleEvents(events.length);
  };

  const handleShowLessEvents = () => {
    setVisibleEvents(3);
  };

  const handleShowMoreNewsletters = () => {
    setVisibleNewsletters(newsletters.length);
  };

  const handleShowLessNewsletters = () => {
    setVisibleNewsletters(2);
  };

  const newsletters = [
    {
      title: 'May Newsletter',
      summary: "Summary of May's events and updates.",
    },
    {
      title: 'April Newsletter',
      summary: "Summary of April's activities and announcements.",
    },
    {
      title: 'April Newsletter',
      summary: "Summary of April's activities and announcements.",
    },
    {
      title: 'April Newsletter',
      summary: "Summary of April's activities and announcements.",
    },
    // Add more newsletters here
  ];

  const currentNewsletter = {
    title: 'June Newsletter',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam auctor nisl quis nisi fermentum, non malesuada felis condimentum.',
  };

  const cardMinHeight = '400px'; // Set the minimum height for both sections

  return (
    <>
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        <PageHeading title="KOM CPC News & Events" />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
      >
        <Container maxW="7xl">
          <Divider orientation="horizontal" borderColor={borderColor} my={4} />
          <HStack
            spacing={10}
            justify="center" // Center the content horizontally
            alignItems="stretch" // Stretch the items to the full height
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            {/* Events Section */}
            <VStack flex={1} spacing={4} alignItems="stretch" width="100%">
              <DefaultCard height="100%" minHeight={cardMinHeight}>
                <Box width="100%">
                  <Heading as="h2" size="lg" textAlign="center" mb={4}>
                    Upcoming Events
                  </Heading>

                  {events.slice(0, visibleEvents).map((event, index) => (
                    <Box mb={4} key={index}>
                      <EventCard
                        event={event}
                        cardBg={cardBg}
                        textColor={textColor}
                      />
                    </Box>
                  ))}
                  <ShowMoreButton
                    onClick={
                      visibleEvents < events.length
                        ? handleShowMoreEvents
                        : handleShowLessEvents
                    }
                    isExpanded={visibleEvents >= events.length}
                  />
                </Box>
              </DefaultCard>
            </VStack>

            {/* Newsletter Section */}
            <VStack flex={2} spacing={4} alignItems="stretch" width="100%">
              <DefaultCard height="100%" minHeight={cardMinHeight}>
                <Box width="100%">
                  <Heading as="h2" size="lg" textAlign="center" mb={4}>
                    Newsletters
                  </Heading>
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Current Newsletter
                  </Text>
                  <Box p={5} shadow="md" borderWidth="1px" mb={4}>
                    <Text>{currentNewsletter.title}</Text>
                    <Text fontSize="sm">{currentNewsletter.summary}</Text>
                  </Box>
                  <Divider
                    orientation="horizontal"
                    borderColor={borderColor}
                    my={4}
                  />
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Past Newsletters
                  </Text>
                  {newsletters
                    .slice(0, visibleNewsletters)
                    .map((newsletter, index) => (
                      <Box mb={4} key={index}>
                        <PastNewsletters newsletters={[newsletter]} />
                      </Box>
                    ))}
                  <ShowMoreButton
                    onClick={
                      visibleNewsletters < newsletters.length
                        ? handleShowMoreNewsletters
                        : handleShowLessNewsletters
                    }
                    isExpanded={visibleNewsletters >= newsletters.length}
                  />
                </Box>
              </DefaultCard>
            </VStack>
          </HStack>

          <Divider orientation="horizontal" borderColor={borderColor} my={4} />
          <Box mt={10}>
            <InstagramFeed />
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default NewsEventsPage;
