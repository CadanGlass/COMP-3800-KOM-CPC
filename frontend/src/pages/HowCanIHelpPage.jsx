import React from 'react';
import {
  Box,
  VStack,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Section, PageHeading } from '../components/DefaultComponents';
import PartnersCarousel from '../components/howCanIHelp/PartnersCarousel';
import HowCanYouHelpCard from '../components/howCanIHelp/HowCanYouHelpCard';

export default function HowCanIHelpPage() {
  const { colorMode } = useColorMode();
  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  const bg = useColorModeValue('white', 'gray.800');
  const cardBg = useColorModeValue('white', '#1A202C');
  const textColor = useColorModeValue('gray.800', 'white');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

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
          <Heading as="h2" size="lg" textAlign="center" color={textColor}>
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
        <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="lg">
          <HowCanYouHelpCard />
        </Box>
      </Section>
    </>
  );
}
