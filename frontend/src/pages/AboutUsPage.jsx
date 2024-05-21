import React from 'react';
import { Box, VStack, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { Section, PageHeading } from '../components/DefaultComponents';
import MissionCard from '../components/aboutus/mission';
import OurStoryCard from '../components/aboutus/ourStory';
import CatchmentCard from '../components/aboutus/catchment';

import CatchData from '../test_data/AboutUsData/catchmentData.json';
import missionData from '../test_data/AboutUsData/missionData.json';
import ourStoryData from '../test_data/AboutUsData/ourStoryData.json';

const CatchmentData = CatchData;
const MissionData = missionData;
const OurStoryData = ourStoryData;

export default function AboutUsPage() {
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  return (
    <>
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        <PageHeading title="About Us" />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
      >
        <MissionCard missionData={MissionData} />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a566e)')}
      >
        <OurStoryCard ourStoryData={OurStoryData} />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #4a566e, #5b6b82)')}
      >
        <CatchmentCard catchmentData={CatchmentData} />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #5b6b82, #6c7f96)')}
      ></Section>
    </>
  );
}
