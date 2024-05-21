// src/components/howCanIHelp/SupportUsCard.jsx
import React from 'react';
import { Box, VStack, Heading, Stack, Text } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import DonateButton from '../buttons/DonateButton';
import ContactUsButton from '../buttons/ContactUsButton';

const SupportUsCard = () => {
  return (
    <DefaultCard
      w={{ base: '90%', md: '50%' }} // Narrower width
      h="400px" // Taller height
      mx="auto" // Center the card
    >
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
  );
};

export default SupportUsCard;
