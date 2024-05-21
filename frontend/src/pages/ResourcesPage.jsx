// components/ResourcesPage.jsx
import React from 'react';
import { VStack, useColorModeValue } from '@chakra-ui/react';
import { Section, PageHeading } from '../components/DefaultComponents';
import CommunityPolicingCentresCard from '../components/resources/CommunityPolicingCentresCard';
import VolunteerCard from '../components/resources/VolunteerCard';
import WhoToCallCard from '../components/resources/WhoToCallCard';

const ResourcesPage = () => {
  return (
    <>
      <Section
        bg={useColorModeValue(
          'white',
          'linear-gradient(to bottom, #1a202c, #2d3748)'
        )}
      >
        <PageHeading title="Resources" />
      </Section>
      <Section
        bg={useColorModeValue(
          'white',
          'linear-gradient(to bottom, #2d3748, #3c4a5e)'
        )}
      >
        <VStack spacing={10} align="start">
          <CommunityPolicingCentresCard />
          <VolunteerCard />
          <WhoToCallCard />
        </VStack>
      </Section>
    </>
  );
};

export default ResourcesPage;
