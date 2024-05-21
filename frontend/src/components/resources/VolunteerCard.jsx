import React from 'react';
import { Box, Flex, Image, Heading, Text, VStack } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import VolunteerNowButton from '../buttons/VolunteerNowButton';

const VolunteerCard = () => {
  return (
    <DefaultCard>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
      >
        <Box flex="1" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
          <Image
            src="https://via.placeholder.com/600x400" // Placeholder image
            alt="Volunteers"
            objectFit="cover"
            width="100%"
            borderRadius="md"
          />
        </Box>
        <Box flex="1" p={6}>
          <VStack spacing={4} align="start">
            <Heading as="h3" size="lg">
              Make a positive impact in your community
            </Heading>
            <Text>
              The Strathcona CPC offers a wide range of volunteer opportunities
              to choose from. You can specialize in one or two, or do a little
              bit of everything!
            </Text>
            <VolunteerNowButton /> {/* Use the VolunteerNowButton here */}
          </VStack>
        </Box>
      </Flex>
    </DefaultCard>
  );
};

export default VolunteerCard;
