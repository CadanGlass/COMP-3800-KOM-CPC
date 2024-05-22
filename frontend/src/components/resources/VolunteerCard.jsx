import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, Heading, Text, VStack } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import VolunteerNowButton from '../buttons/VolunteerNowButton';
import axios from 'axios';

const baseUrl = 'http://localhost:1337'; // Base URL for Strapi images

const VolunteerCard = () => {
  const [volunteerCards, setVolunteerCards] = useState([]);

  useEffect(() => {
    const fetchVolunteerCards = async () => {
      try {
        const response = await axios.get(
          'http://localhost:1337/api/resources?populate=VolunteerCard.Image'
        );
        if (response.data && response.data.data) {
          const fetchedCards = response.data.data.flatMap(
            (item) => item.attributes.VolunteerCard || []
          );
          setVolunteerCards(fetchedCards);
        }
      } catch (error) {
        console.error('Error fetching volunteer cards:', error);
      }
    };

    fetchVolunteerCards();
  }, []);

  return (
    <VStack spacing={8} align="start">
      {volunteerCards.length > 0 ? (
        volunteerCards.map((volunteerCard, index) => (
          <DefaultCard key={index}>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="center"
            >
              {volunteerCard.Image &&
                volunteerCard.Image.data &&
                volunteerCard.Image.data[0] && // Adjust based on actual structure
                volunteerCard.Image.data[0].attributes && (
                  <Box flex="1" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
                    <Image
                      src={`${baseUrl}${volunteerCard.Image.data[0].attributes.url}`} // Strapi image URL
                      alt={
                        volunteerCard.Image.data[0].attributes
                          .alternativeText || 'Volunteers'
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
                    {volunteerCard.Title}
                  </Heading>
                  <Text>{volunteerCard.Description}</Text>
                  <VolunteerNowButton />
                </VStack>
              </Box>
            </Flex>
          </DefaultCard>
        ))
      ) : (
        <Text>No volunteer cards available.</Text>
      )}
    </VStack>
  );
};

export default VolunteerCard;
