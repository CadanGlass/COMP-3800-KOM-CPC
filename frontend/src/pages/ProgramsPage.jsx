import React from 'react';
import { Box, SimpleGrid, Text, VStack, Heading, Button, Image } from '@chakra-ui/react';
import ProgramCard from '../components/programs/ProgramCard';

const cardData = [
  {
    title: "Community Patrol Programs",
    description: "The KOM CPC’s patrols are our most high-visibility activities, and most popular. Trained volunteers patrol, based on VPD crime data, input from authorities and the community, and historical data, and are required to record information, and communicate with residents and businesses about any recent criminal activities or safety concerns.",
    imageUrl: "https://via.placeholder.com/150",
    learnMoreLink: "#",
    accordionItems: [
      { title: "Patrol Routes", content: "Details about patrol routes..." },
      { title: "Volunteer Training", content: "Information about volunteer training..." },
    ]
  },
  {
    title: "Law Enforcement Partnerships",
    description: "In conjunction with ICBC and the VPD, our volunteers participate in activities such as ICBC Speedwatch and Theft From Auto (TFA) alerts. These activities may coincide with patrols or be part of larger prevention activities involving other community policing centres or law-enforcement agencies.",
    imageUrl: "https://via.placeholder.com/150",
    learnMoreLink: "#",
    accordionItems: [
      { title: "ICBC Speedwatch", content: "Details about ICBC Speedwatch..." },
      { title: "Theft From Auto Alerts", content: "Information about TFA alerts..." },
    ]
  },
  {
    title: "Community Outreach & Initiatives",
    description: "KOM CPC volunteers take part in numerous community and outreach events, with the goals of improving community safety and providing awareness of policing resources.",
    imageUrl: "https://via.placeholder.com/150",
    learnMoreLink: "#",
    accordionItems: [
      { title: "Community Events", content: "Details about community events..." },
      { title: "Safety Awareness Programs", content: "Information about safety programs..." },
    ]
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
        <Text>The KOM CPC offers a variety of public safety and crime-prevention programs. Initiatives such as community policing patrols, ICBC Speedwatch and event outreach are just some of our most popular.</Text>
      </Box>
      <SimpleGrid columns={{ base: 1 }} spacing="8">
        {cardData.map((card, index) => (
          <ProgramCard
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            learnMoreLink={card.learnMoreLink}
            accordionItems={card.accordionItems}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
