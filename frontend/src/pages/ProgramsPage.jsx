import React from 'react';
import { Box, SimpleGrid, Image, Text, Button, VStack, Heading } from '@chakra-ui/react';

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

function CustomBanner() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="6"
      bg="gray.200"
      borderRadius="md"
      mb="8"
    >
      <VStack align="start" spacing="4" flex="1">
        <Heading as="h2" size="lg">Shield Your Sip</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa explicabo quasi. Illo nihil ex praesentium officiis maiores alias expedita!</Text>
        <Button colorScheme="teal" onClick={() => window.location.href = "#"}>Learn More →</Button>
      </VStack>
      <Box boxSize="150px" ml="4">
        <Image src="https://via.placeholder.com/150" alt="Shield Your Sip" />
      </Box>
    </Box>
  );
}

export default function ProgramsPage() {
  return (
    <Box padding="4" maxW="1700px" mx="auto">
      <CustomBanner />
      <Box textAlign="center" mb="8">
        <Heading as="h1" mb="4">KOM CPC Programs</Heading>
        <Text>Explore our various programs designed to empower and educate our community. Each program is tailored to address specific needs and interests.</Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
        {cardData.map((card, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" display="flex" flexDirection="column" width="100%">
            <VStack align="start" spacing="4" p="4" flex="1">
              <Text fontWeight="bold" fontSize="xl">{card.title}</Text>
              <Text>{card.description}</Text>
              <Button colorScheme="red" onClick={() => window.location.href = card.learnMoreLink}>Learn More →</Button>
            </VStack>
            <Box flexShrink="0" p="4">
              <Image src={card.imageUrl} alt={`Image of ${card.title}`} width="100%" objectFit="cover" borderRadius="md" />
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
