import React, { useEffect, useState } from 'react';
import {
  Text,
  Heading,
  VStack,
  HStack,
  Stack,
  Container,
  Box,
  useColorMode,
  Divider,
  useColorModeValue,
  useBreakpointValue,
  Button,
  Image,
  IconButton,
  SimpleGrid,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import { Section, DefaultCard } from '../components/DefaultComponents';
import Banner from '../components/home/Banner';
import PartnershipBanner from '../components/home/PartnershipBanner';
import CallPoliceBanner from '../components/home/CallPoliceBanner';
import WhoWeAreCard from '../components/home/WhoWeAreCard';
import Programs from '../components/home/Programs';
import Events from '../components/home/Events';
import axios from 'axios';
import EventCard from '../components/home/EventCard';
const baseURL = 'https://api.komcpc.com';

export default function HomePage() {
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  const [introduction, setIntroduction] = useState({});
  const [bannerImage, setBannerImage] = useState({});
  const [sponsors, setSponsors] = useState([]);
  const [events, setEvents] = useState([]);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/home-page`);
        if (response.data) {
          const apiData = response.data.data.attributes;
          const bannerData = apiData.BannerImage.data.attributes;

          setBannerImage({
            url: `${baseURL}${bannerData.url}`,
            alternativeText: bannerData.alternativeText,
          });

          const introductionData = apiData.Introduction;
          setIntroduction(introductionData);

          const sponsorData = apiData.Sponsors;
          const sponsorList = sponsorData.map((sponsor) => ({
            name: sponsor.Name,
            url: sponsor.Url,
            logo: `${baseURL}${sponsor.Logo.data.attributes.url}`,
            alternativeText: sponsor.Logo.data.attributes.alternativeText,
          }));
          setSponsors(sponsorList);
        }
      } catch (error) {
        console.error('Error fetching home page data:', error);
      }
    };

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
              image: eventImageUrl,
            };
          });
          setEvents(eventsData);
        }
      } catch (error) {
        console.error('Error fetching events data:', error);
      }
    };

    fetchData();
    fetchEvents();
  }, []);

  const handlePrevEvent = () => {
    setCurrentEventIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length
    );
  };

  const handleNextEvent = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const currentEvent = events[currentEventIndex];
  const breakpointValue = useBreakpointValue({ base: 'base', lg: 'lg' });

  return (
    <>
      <CallPoliceBanner />
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        {bannerImage.url && <Banner data={bannerImage} />}
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
      >
        {introduction && <WhoWeAreCard data={introduction} />}
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a566e)')}
      >
        <Programs />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #4a566e, #5b6b7e)')}
      >
        {sponsors && <PartnershipBanner data={sponsors} />}
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #5b6b7e, #4a566e)')}
      >
        <VStack spacing={8}>
          <DefaultCard p={8} minHeight="600px">
            <Box width="100%">
              <Heading as="h2" size="lg" textAlign="center" mb={6}>
                Upcoming Events
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {events.map((event) => (
                  <EventCard
                    key={event.id}
                    name={event.name}
                    date={event.date}
                    image={event.image}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </DefaultCard>
          <Divider
            orientation="horizontal"
            borderColor={useColorModeValue('gray.200', 'gray.600')}
            my={4}
          />
        </VStack>
      </Section>
    </>
  );
}
