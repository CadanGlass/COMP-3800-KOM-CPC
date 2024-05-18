import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, VStack, Container, Box, useColorMode } from '@chakra-ui/react';
import { Section } from '../components/DefaultComponents';
import Banner from '../components/home/Banner';
import PartnershipBanner from '../components/home/PartnershipBanner';
import CallPoliceBanner from '../components/home/CallPoliceBanner';
import WhoWeAreCard from '../components/home/WhoWeAreCard';
import Programs from '../components/home/Programs';
import Events from '../components/home/Events';

import data from '../test_data/home_page.json';
const url = 'http://localhost:1337/api/programs';

export default function HomePage() {
  const [programTitles, setProgramTitles] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const titles = response.data.data.map((item) => ({
          title: item.attributes.title,
          description: item.attributes.description,
          image: item.attributes.imageUrl,
        }));
        setProgramTitles(titles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setProgramTitles([]);
      });
  }, []);

  if (!programTitles.length) return <Text>Loading...</Text>;

  const whoWeAreData = data.WhoWeAre;
  const partners = data.Partnerships;

  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  return (
    <>
      <CallPoliceBanner />
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        <Banner />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
      >
        <WhoWeAreCard data={whoWeAreData} />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a566e)')}
      >
        <Programs />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #4a566e, #5b6b7e)')}
      >
        <PartnershipBanner data={partners} />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #5b6b7e, #4a566e)')}
      >
        <Events />
      </Section>
    </>
  );
}
