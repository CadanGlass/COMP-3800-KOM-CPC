import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Text,
  VStack,
  Container,
  IconButton,
  Divider,
  Box,
  Stack,
} from '@chakra-ui/react';
import { DefaultPage } from '../components/DefaultComponents';

import Banner from '../components/home/Banner';
import Cards from '../components/Cards';
import PartnershipBanner from '../components/home/PartnershipBanner';
import CallPoliceBanner from '../components/home/CallPoliceBanner';
import AboutUs from '../components/home/AboutUs';
import SubtextCardWithIcon from '../components/SubtextCardWithIcon';
import WhoWeAreCard from '../components/home/WhoWeAreCard';
import Programs from '../components/home/Programs';
import Events from '../components/home/Events';

import data from '../test_data/home_page.json';
const url = 'http://localhost:1337/api/programs';

export default function HomePage() {
  const [programTitles, setProgramTitles] = useState([]);

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

  return (
    <>
      <CallPoliceBanner />
      <DefaultPage>
        <Banner />
        {/* <Cards cardsData={programTitles} /> */}
        <WhoWeAreCard data={whoWeAreData} />
        <Programs />
        <PartnershipBanner data={partners} />
        <Events />
      </DefaultPage>
    </>
  );
}
