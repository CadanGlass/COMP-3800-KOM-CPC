import React from 'react';
import {
  Box,
  VStack,
  Container,
  Stack,
  Text,
  Divider,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import SocialMediaLinks from './footer/SocialMediaLinks';
import MailchimpForm from './newsletter/MailchimpForm';
import OperationHours from './footer/OperationHours';
import ContactSection from './footer/ContactSection';
import LogoSection from './footer/LogoSection';

const Footer = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('black', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const dividerColor = useColorModeValue('black', 'white');

  return (
    <Box bg={bg} color={color} px={4} py={10}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <VStack align="start" spacing={4}>
            <Divider borderColor={dividerColor} />
          </VStack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            justify="space-between"
            alignItems="flex-start"
          >
            <VStack alignItems="center">
              <LogoSection />
              <HStack mt={4}>
                <SocialMediaLinks />
              </HStack>
            </VStack>
            <MailchimpForm />
            <OperationHours />
            <ContactSection />
          </Stack>
        </Stack>
      </Container>
      <Box mt={8}>
        <Divider borderColor={dividerColor} />
        <Text textAlign="center" mt={4} color={textColor}>
          &copy; {new Date().getFullYear()} KOM Community Policing Centre. All
          rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
