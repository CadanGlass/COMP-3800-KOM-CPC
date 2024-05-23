// components/ResourcesPage.jsx
import React, { useState, useEffect } from 'react';
import { VStack, useColorModeValue } from '@chakra-ui/react';
import { Section, PageHeading } from '../components/DefaultComponents';
import CommunityPolicingCentresCard from '../components/resources/CommunityPolicingCentresCard';
import VolunteerCard from '../components/resources/VolunteerCard';
import WhoToCallCard from '../components/resources/WhoToCallCard';
import axios from 'axios';

const baseURL = 'http://localhost:1337';

const ResourcesPage = () => {
  const [resourcesPage, setResourcesPage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/resource-page?populate[ResourcesPage][populate][communityPolicingCard][populate]=Logo&populate[ResourcesPage][populate][volunteerCard][populate]=Image&populate[ResourcesPage][populate][whoToCallCard][populate]=Image`
        );
        console.log('API response:', response.data);

        if (
          response.data &&
          response.data.data &&
          response.data.data.attributes
        ) {
          const apiData = response.data.data.attributes.ResourcesPage[0];
          console.log('Extracted data:', apiData);
          setResourcesPage(apiData);
        } else {
          console.warn('Unexpected API response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  console.log('Final data state:', resourcesPage);

  if (!resourcesPage || Object.keys(resourcesPage).length === 0) {
    return <p>Loading...</p>;
  }

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
          {resourcesPage.communityPolicingCard && (
            <CommunityPolicingCentresCard
              data={resourcesPage.communityPolicingCard}
            />
          )}
          {resourcesPage.volunteerCard && (
            <VolunteerCard data={[resourcesPage.volunteerCard]} />
          )}
          {resourcesPage.whoToCallCard && (
            <WhoToCallCard data={resourcesPage.whoToCallCard} />
          )}
        </VStack>
      </Section>
    </>
  );
};

export default ResourcesPage;
