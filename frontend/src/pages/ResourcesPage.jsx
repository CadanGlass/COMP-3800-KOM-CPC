// components/ResourcesPage.jsx
import React, { useState, useEffect } from 'react';
import {
  VStack,
  useColorModeValue,
  Link,
  Text,
  Heading,
} from '@chakra-ui/react';
import {
  Section,
  PageHeading,
  DefaultCard,
} from '../components/DefaultComponents';
import CommunityPolicingCentresCard from '../components/resources/CommunityPolicingCentresCard';
import VolunteerCard from '../components/resources/VolunteerCard';
import WhoToCallCard from '../components/resources/WhoToCallCard';
import axios from 'axios';

const baseURL = 'https://api.komcpc.com';

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

  return (
    <>
      <Section
        bg={useColorModeValue(
          'white',
          'linear-gradient(to bottom, #1a202c, #2d3748)'
        )}
      >
        <PageHeading title={resourcesPage.Title} />
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
          <DefaultCard>
            <VStack spacing={4} align={'left'}>
              <Heading as="h2" size="lg">
                More Resources
              </Heading>
              <Text>Links and contacts for more resources and support:</Text>
              <br />

              <Text>
                <Link color="teal.500" href="https://www.vpd.ca/" isExternal>
                  VPD/Fire/Medical Emergency 911
                </Link>{' '}
                Call 911 for emergencies only.
              </Text>

              <Text>
                <Link color="teal.500" href="https://www.vpd.ca/" isExternal>
                  VPD non-emergency
                </Link>{' '}
                Call{' '}
                <Link color="teal.500" href="tel:604-3211">
                  604-3211
                </Link>{' '}
                for any non-emergency police-related matter.
              </Text>

              <Text>
                <Link color="teal.500" href="https://www.vpd.ca/" isExternal>
                  VPD property office
                </Link>{' '}
                Call{' '}
                <Link color="teal.500" href="tel:604-717-2726">
                  604-717-2726
                </Link>{' '}
                for VPD Lost and found.
              </Text>

              <Text>
                <Link
                  color="teal.500"
                  href="https://www.vancouver.ca/"
                  isExternal
                >
                  City of Vancouver
                </Link>{' '}
                Call{' '}
                <Link color="teal.500" href="tel:311">
                  311
                </Link>{' '}
                or{' '}
                <Link color="teal.500" href="tel:604-873-7000">
                  604-873-7000
                </Link>{' '}
                for bylaws, parking, city parks/properties, and permits.
              </Text>

              <Text>
                <Link color="teal.500" href="https://bc.211.ca" isExternal>
                  BC 211
                </Link>{' '}
                Call{' '}
                <Link color="teal.500" href="tel:211">
                  211
                </Link>{' '}
                or{' '}
                <Link color="teal.500" href="tel:1-888-484-3211">
                  1-888-484-3211
                </Link>{' '}
                for information and referral to a broad range of community,
                government, and social services.
              </Text>

              <Text>
                <Link
                  color="teal.500"
                  href="https://www2.gov.bc.ca/gov/content/housing-tenancy/residential-tenancies/contact-the-residential-tenancy-branch"
                  isExternal
                >
                  BC Tenancy Branch
                </Link>{' '}
                Call{' '}
                <Link color="teal.500" href="tel:604-660-1020">
                  604-660-1020
                </Link>{' '}
                for landlord-tenant issues.
              </Text>

              <Text>
                <Link
                  color="teal.500"
                  href="https://www.bccourts.ca/"
                  isExternal
                >
                  Vancouver Civil Court
                </Link>{' '}
                Call{' '}
                <Link color="teal.500" href="tel:604-660-8989">
                  604-660-8989
                </Link>
                .
              </Text>

              <Text>
                <Link
                  color="teal.500"
                  href="https://www.bccourts.ca/"
                  isExternal
                >
                  Vancouver Criminal Court
                </Link>{' '}
                Call{' '}
                <Link color="teal.500" href="tel:604-660-4200">
                  604-660-4200
                </Link>
                .
              </Text>

              <Text>
                <Link
                  color="teal.500"
                  href="https://www.canada.ca/en.html"
                  isExternal
                >
                  Government of Canada
                </Link>{' '}
                Call{' '}
                <Link color="teal.500" href="tel:1-800-622-6232">
                  1-800-622-6232
                </Link>{' '}
                for any federal government-related matter.
              </Text>
            </VStack>
          </DefaultCard>
        </VStack>
      </Section>
    </>
  );
};

export default ResourcesPage;
