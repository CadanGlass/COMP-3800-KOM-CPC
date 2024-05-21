import React from 'react';
import { Stack, Heading, Box, Text, Image, Link } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import VPDLogo from '../../assets/VPDLogo.png';

const CommunityPolicingCentresCard = () => {
  return (
    <DefaultCard>
      <Stack spacing={8} align="center">
        <Heading as="h2" size="lg">
          Community Policing Centres
        </Heading>
        <Text textAlign="center">
          Community Policing Centres (CPCs) are volunteer-driven,
          community-based crime prevention and safety initiatives in partnership
          with the Vancouver Police Department. CPCs offer a variety of services
          and programs designed to meet the unique needs of their local
          communities. These include crime prevention workshops, community
          patrols, and support for victims of crime.
        </Text>
        <Box textAlign="center" my={8}>
          <Image
            src={VPDLogo}
            alt="Vancouver Police Department Logo"
            boxSize={{ base: '150px', md: '200px' }}
            mx="auto"
          />
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
