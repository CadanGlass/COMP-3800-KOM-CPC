import React, { useEffect, useState } from 'react';
import { Text, VStack, Container, Box, useColorMode } from '@chakra-ui/react';
import { Section } from '../components/DefaultComponents';
import Banner from '../components/home/Banner';
import PartnershipBanner from '../components/home/PartnershipBanner';
import CallPoliceBanner from '../components/home/CallPoliceBanner';
import WhoWeAreCard from '../components/home/WhoWeAreCard';
import Programs from '../components/home/Programs';
import Events from '../components/home/Events';
import axios from 'axios';

import data from '../test_data/home_page.json';

const baseURL = 'http://localhost:1337';

export default function HomePage() {
  const { colorMode } = useColorMode();

  const whoWeAreData = data.WhoWeAre;
  const partners = data.Partnerships;

  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  const [introduction, setIntroduction] = useState(null);
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(
          `${baseURL}/api/home-pages?populate[BannerImage][fields][0]=url&populate[BannerImage][fields][1]=alternativeText&populate[Introduction][populate]=*`
        )
        .then((response) => {
          const bannerData =
            response.data.data[0].attributes.BannerImage.data.attributes;

          setBannerImage({
            url: `${baseURL}${bannerData.url}`,
            alternativeText: bannerData.alternativeText,
          });

          const introductionData =
            response.data.data[0].attributes.Introduction;
          setIntroduction(introductionData);
        })
        .catch((error) => {
          console.error('Error fetching program data:', error);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <CallPoliceBanner />
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        <Banner data={bannerImage} />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
      >
        {introduction ? <WhoWeAreCard data={introduction} /> : <Text></Text>}
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
