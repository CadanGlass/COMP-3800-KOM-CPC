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

const baseURL = 'http://localhost:1337';

export default function HomePage() {
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  const [introduction, setIntroduction] = useState({});
  const [bannerImage, setBannerImage] = useState({});
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${baseURL}/api/home-page`)
        .then((response) => {
          if (!response.data) {
            return;
          }
          const apiData = response.data.data.attributes;
          const bannerData = apiData.BannerImage.data.attributes;

          setBannerImage({
            url: `${baseURL}${bannerData.url}`,
            alternativeText: bannerData.alternativeText,
          });

          const introductionData = apiData.Introduction;
          setIntroduction(introductionData);

          const sponsorData = apiData.Sponsors;
          const sponsorList = [];
          sponsorData.map((sponsor) => {
            sponsorList.push({
              name: sponsor.Name,
              url: sponsor.Url,
              logo: `${baseURL}${sponsor.Logo.data.attributes.url}`,
              alternativeText: sponsor.Logo.data.attributes.alternativeText,
            });
          });
          setSponsors(sponsorList);
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
        <Events />
      </Section>
    </>
  );
}
