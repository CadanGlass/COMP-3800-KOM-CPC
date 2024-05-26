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
} from '@chakra-ui/react';

import EventsCarousel from '../components/eventsPage/EventCarousel';
import InstagramFeed from '../components/eventsPage/InstagramFeed';
import {
  Section,
  DefaultCard,
  PageHeading,
} from '../components/DefaultComponents';
import NewsletterCard from '../components/eventsPage/NewsLetterCard';

const NewsEventsPage = () => {
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  const bg = useColorModeValue('white', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });

  const events = [
    {
      date: 'OCT 24',
      name: 'Speed Control',
      description:
        'Learn the importance of speed control and safe driving habits.',
      image:
        'https://d1jyxxz9imt9yb.cloudfront.net/medialib/4023/image/s768x1300/chimp_thumbnail.jpg',
    },
    {
      date: 'OCT 27',
      name: 'Community Outreach',
      description:
        'Join us for a community outreach event to connect and support each other.',
      image:
        'https://d1jyxxz9imt9yb.cloudfront.net/medialib/4023/image/s768x1300/chimp_thumbnail.jpg',
    },
    {
      date: 'OCT 30',
      name: 'Networking with VPD',
      description:
        'Network with the Vancouver Police Department and learn about safety initiatives.',
      image:
        'https://d1jyxxz9imt9yb.cloudfront.net/medialib/4023/image/s768x1300/chimp_thumbnail.jpg',
    },
  ];

  const currentNewsletter = {
    image: 'https://example.com/newsletter-image.jpg', // Replace with actual newsletter image URL
  };

  const cardMinHeight = '400px'; // Set the minimum height for both sections

  return (
    <>
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        <PageHeading title="KOM CPC Events & News" />
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
                  <EventsCarousel events={events} />
                </Box>
              </DefaultCard>
            </VStack>

            {/* Newsletter Section */}
            <VStack flex={1} spacing={4} alignItems="stretch" width="100%">
              <DefaultCard height="100%" minHeight={cardMinHeight}>
                <Box width="100%" textAlign="center">
                  <Heading as="h2" size="lg" textAlign="center" mb={4}>
                    Current Newsletter
                  </Heading>
                  <NewsletterCard image={currentNewsletter.image} />
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
