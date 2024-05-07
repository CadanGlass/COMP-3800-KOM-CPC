import React from 'react';
import { Box, SimpleGrid, Image, Text, Button, VStack, Heading, HStack } from '@chakra-ui/react';
import Banner from '../components/Banner';

const cardData = [
  {
    title: "Program 1",
    description: "This is a short description of Program 1.",
    imageUrl: "https://via.placeholder.com/150",
    learnMoreLink: "#"
  },
  {
    title: "Program 2",
    description: "This is a short description of Program 2.",
    imageUrl: "https://via.placeholder.com/150",
    learnMoreLink: "#"
  },
  {
    title: "Program 3",
    description: "This is a short description of Program 3.",
    imageUrl: "https://via.placeholder.com/150",
    learnMoreLink: "#"
  }
];

export default function ProgramsPage() {
  return (
    <Box padding="4" maxW="1200px" mx="auto">
      <Banner />
      <Heading as="h1" mb="8">Our Programs</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
        {cardData.map((card, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <HStack align="start" spacing="4" p="4">
              <VStack align="start" spacing="2">
                <Text fontWeight="bold" fontSize="xl">{card.title}</Text>
                <Text>{card.description}</Text>
                <Button colorScheme="red" onClick={() => window.location.href = card.learnMoreLink}>Learn More</Button>
              </VStack>
              <Image src={card.imageUrl} alt={`Image of ${card.title}`} boxSize="150px" />
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
