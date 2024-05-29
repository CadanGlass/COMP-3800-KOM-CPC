import React, { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Divider,
  useColorMode,
  useColorModeValue,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
  IconButton,
} from '@chakra-ui/react';
import {
  InfoOutlineIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons';
import axios from 'axios';

import InstagramFeed from '../components/eventsPage/InstagramFeed';
import {
  Section,
  DefaultCard,
  PageHeading,
} from '../components/DefaultComponents';
import NewsletterCard from '../components/eventsPage/NewsLetterCard';

const baseURL = 'http://localhost:1337';

const NewsEventsPage = () => {
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  const bg = useColorModeValue('white', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const [events, setEvents] = useState([]);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [newsletterImage, setNewsletterImage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/events?populate=eventImage`
        );
        if (response.data && response.data.data) {
          const eventsData = response.data.data.map((event) => {
            const eventImageUrl = event.attributes.eventImage?.data[0]
              ?.attributes?.url
              ? `${baseURL}${event.attributes.eventImage.data[0].attributes.url}`
              : '';

            return {
              id: event.id,
              date: new Date(event.attributes.dateAndTime).toLocaleDateString(
                'en-US',
                {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                }
              ),
              name: event.attributes.eventTitle,
              description: event.attributes.eventDescription,
              image: eventImageUrl,
            };
          });
          setEvents(eventsData);
        }
      } catch (error) {
        console.error('Error fetching events data', error);
      }
    };

    const fetchNewsletter = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/news-letter?populate=newsLetterImage`
        );
        if (response.data && response.data.data) {
          const imageUrl = response.data.data.attributes.newsLetterImage?.data
            ?.attributes?.url
            ? `${baseURL}${response.data.data.attributes.newsLetterImage.data.attributes.url}`
            : '';
          setNewsletterImage(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching newsletter image', error);
      }
    };

    fetchEvents();
    fetchNewsletter();
  }, []);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevEvent = () => {
    setCurrentEventIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length
    );
  };

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const currentEvent = events[currentEventIndex];

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
          <VStack spacing={10} alignItems="stretch" width="100%">
            {/* Events Section */}
            <DefaultCard height="100%" minHeight="600px" p={8}>
              <Box width="100%">
                <Heading as="h2" size="lg" textAlign="center" mb={6}>
                  Upcoming Events
                </Heading>
                {currentEvent && (
                  <Box textAlign="center">
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      mb={6}
                    >
                      <Image
                        src={currentEvent.image}
                        alt={currentEvent.name}
                        borderRadius="md"
                      />
                    </Box>
                    <Heading as="h3" size="lg" mb={4}>
                      {currentEvent.name}
                    </Heading>
                    <Text fontSize="lg" mb={4}>
                      {currentEvent.date}
                    </Text>
                    <Text fontSize="md">{currentEvent.description}</Text>
                  </Box>
                )}
                <HStack justify="space-between" mt={6}>
                  <IconButton
                    icon={<ArrowBackIcon />}
                    onClick={handlePrevEvent}
                    aria-label="Previous event"
                    isDisabled={events.length <= 1}
                  />
                  <IconButton
                    icon={<ArrowForwardIcon />}
                    onClick={handleNextEvent}
                    aria-label="Next event"
                    isDisabled={events.length <= 1}
                  />
                </HStack>
              </Box>
            </DefaultCard>

            {/* Newsletter Section */}
            <DefaultCard height="100%" minHeight="600px" p={8}>
              <Box width="100%" textAlign="center" position="relative">
                <Heading as="h2" size="lg" textAlign="center" mb={6}>
                  Current Newsletter
                </Heading>
                <Box
                  cursor="pointer"
                  onClick={handleImageClick}
                  position="relative"
                >
                  <NewsletterCard image={newsletterImage} />
                  <Box
                    position="absolute"
                    top="10px"
                    left="50%"
                    transform="translateX(-50%)"
                    bg="rgba(0, 0, 0, 0.6)"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                  >
                    <InfoOutlineIcon mr={2} />
                    <Text fontSize="sm">Click to expand</Text>
                  </Box>
                </Box>
              </Box>
            </DefaultCard>
          </VStack>

          <Divider orientation="horizontal" borderColor={borderColor} my={4} />
          <Box mt={10}>
            <InstagramFeed />
          </Box>
        </Container>
      </Section>

      {/* Modal for Newsletter Image */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Newsletter Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box maxW="full" overflow="auto">
              <Image
                src={newsletterImage}
                alt="Newsletter"
                width="auto"
                height="auto"
                transform="scale(2)" // Adjust zoom level
                transformOrigin="top left" // Align top left of the image with the container
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewsEventsPage;
