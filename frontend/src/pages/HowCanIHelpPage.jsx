import React from 'react';
import { Box, VStack, useColorMode, Heading } from '@chakra-ui/react';
import { Section, PageHeading } from '../components/DefaultComponents';
import PartnersCarousel from '../components/howCanIHelp/PartnersCarousel';
import HowCanYouHelpCard from '../components/howCanIHelp/HowCanYouHelpCard';

export default function HowCanIHelpPage() {
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  return (
    <>
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        <PageHeading title="How Can I Help?" />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
        py={8}
      >
        <VStack spacing={8}>
          <Heading as="h2" size="lg" textAlign="center" color="white">
            Our Partners
          </Heading>
          <Box w="full">
            <PartnersCarousel />
          </Box>
        </VStack>
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a5568)')}
        py={8}
      >
        <HowCanYouHelpCard />
      </Section>
    </>
  );
}
