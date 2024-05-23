// components/resources/VolunteerCard.jsx
import React from 'react';
import { Box, Flex, Image, Heading, Text, VStack } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import VolunteerNowButton from '../buttons/VolunteerNowButton';

const baseURL = 'http://localhost:1337'; // Base URL for Strapi images

const VolunteerCard = ({ data }) => {
  return (
    <VStack spacing={8} align="start">
      {data && data.length > 0 ? (
        data.map((card, index) => (
          <DefaultCard key={index}>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="center"
            >
              {card.Image && card.Image.data && card.Image.data.attributes && (
                <Box flex="1" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
                  <Image
                    src={`${baseURL}${card.Image.data.attributes.url}`} // Strapi image URL
                    alt={
                      card.Image.data.attributes.alternativeText || 'Card Image'
                    }
                    objectFit="cover"
                    width="100%"
                    borderRadius="md"
                  />
                </Box>
              )}
              <Box flex="1" p={6}>
                <VStack spacing={4} align="start">
                  <Heading as="h3" size="lg">
                    {card.Title}
                  </Heading>
                  <Text>{card.Description}</Text>
                  <VolunteerNowButton />
                </VStack>
              </Box>
            </Flex>
          </DefaultCard>
        ))
      ) : (
        <Text>No cards available.</Text>
      )}
    </VStack>
  );
};

export default VolunteerCard;
