import React from 'react';
import {
  Stack,
  Heading,
  Box,
  useBreakpointValue,
  Text,
  Image,
  Link,
  VStack,
} from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import VPDLogo from '../../assets/VPDLogo.png';

const CommunityPolicingCentresCard = ({ CPCData }) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <DefaultCard>
      <Stack spacing={8} align="center">
        <Heading as="h2" size="lg">
          {CPCData.title}
        </Heading>
        <Text textAlign="center">
          {CPCData.description.map((line, index) => (
            <span key={`line${index}`}>
              {line}
              {index !== CPCData.description.length - 1 && <br />}
            </span>
          ))}
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
