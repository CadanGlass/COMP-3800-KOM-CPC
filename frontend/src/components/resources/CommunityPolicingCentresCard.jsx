// components/CommunityPolicingCentresCard.jsx
import React from 'react';
import { Stack, Heading, Box, Text, Image, Link } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

const baseURL = 'https://api.komcpc.com'; // Base URL for Strapi images

const CommunityPolicingCentresCard = ({ data }) => {
  return (
    <DefaultCard>
      <Stack spacing={8} align="center">
        <Heading as="h2" size="lg">
          {data.Title || 'Community Policing Centres'}
        </Heading>
        <Text textAlign="center">
          {data.Description ||
            'Community Policing Centres (CPCs) are volunteer-driven, community-based crime prevention and safety initiatives in partnership with the Vancouver Police Department. CPCs offer a variety of services and programs designed to meet the unique needs of their local communities. These include crime prevention workshops, community patrols, and support for victims of crime.'}
        </Text>
        <Box textAlign="center" my={8}>
          {data.Logo &&
            data.Logo.data &&
            data.Logo.data.length > 0 &&
            data.Logo.data[0].attributes && (
              <Image
                src={`${baseURL}${data.Logo.data[0].attributes.url}`} // Strapi image URL
                alt={
                  data.Logo.data[0].attributes.alternativeText ||
                  'Vancouver Police Department Logo'
                }
                h={{ base: '150px', md: '200px' }}
                w={'auto'}
                mx="auto"
              />
            )}
        </Box>
        <Box textAlign="center">
          <Link
            href="https://vpd.ca/community/community-policing-centres/"
            color="blue.500"
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="bold"
            isExternal
            _hover={{ textDecoration: 'underline' }}
          >
            Visit Vancouver Police Department Community Policing Centres
          </Link>
        </Box>
      </Stack>
    </DefaultCard>
  );
};

export default CommunityPolicingCentresCard;
