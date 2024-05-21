import React from 'react';
import { Box, VStack, Text, useColorModeValue } from '@chakra-ui/react';
import { Section, PageHeading } from '../components/DefaultComponents';
import CommunityPolicingCentresCard from '../components/resources/CommunityPolicingCentresCard';

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
        <VStack spacing={4} align="start">
          <CommunityPolicingCentresCard />
        </VStack>
      </Section>
    </>
  );
};

export default ResourcesPage;
