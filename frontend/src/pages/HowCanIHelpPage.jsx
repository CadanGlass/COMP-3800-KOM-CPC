import React from 'react';
import {
  Box,
  VStack,
  useColorModeValue,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  DefaultCard,
  Section,
  PageHeading,
} from '../components/DefaultComponents';
import PartnersCarousel from '../components/howCanIHelp/PartnersCarousel';
import HowCanYouHelpCard from '../components/howCanIHelp/HowCanYouHelpCard';
import DonateButton from '../components/buttons/DonateButton';
import ContactUsButton from '../components/buttons/ContactUsButton';

export default function HowCanIHelpPage() {
  const getBackground = (darkGradient) =>
    useColorModeValue('white', darkGradient);
  const textColor = useColorModeValue('gray.800', 'white');

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
        <HowCanYouHelpCard />
      </Section>
      <Section
        bg={getBackground('linear-gradient(to bottom, #4a5568, #5a6b78)')}
        py={8}
      >
        <DefaultCard>
          <Stack spacing={4} align="center">
            <Heading size="md">Support Us</Heading>
            <Text>
              You can support our cause by donating or getting in touch with us.
              Every bit of help makes a difference!
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <DonateButton />
              <ContactUsButton />
            </Stack>
          </Stack>
        </DefaultCard>
      </Section>
    </>
  );
}
