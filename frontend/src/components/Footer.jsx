import React from 'react';
import {
  Box,
  VStack,
  Container,
  Stack,
  Text,
  Divider,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import SocialMediaLinks from './footer/SocialMediaLinks';
import MailchimpForm from './newsletter/MailchimpForm';
import OperationHours from './footer/OperationHours';
import ContactSection from './footer/ContactSection';
import LogoSection from './footer/LogoSection';

const Footer = () => {
  const bg = useColorModeValue('gray.100', 'gray.800');
  const textColor = useColorModeValue('black', 'white');
  const dividerColor = useColorModeValue('gray.300', 'white');

  return (
    <Box bg={bg} color={textColor} px={4} py={10}>
      <Container maxW="container.xl">
        <Stack spacing={8}>
          <VStack align="start" spacing={4}>
            <Divider borderColor={dividerColor} />
          </VStack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            justify="space-between"
            alignItems={{ base: 'center', md: 'flex-start' }} // Center items on mobile, align to top on larger screens
          >
            <VStack
              alignItems={{ base: 'center', md: 'flex-start' }}
              color={textColor}
            >
              <LogoSection />
              <HStack mt={4}>
                <SocialMediaLinks />
              </HStack>
            </VStack>
            <VStack
              alignItems={{ base: 'center', md: 'flex-start' }}
              color={textColor}
            >
              <MailchimpForm />
            </VStack>
            <VStack
              alignItems={{ base: 'center', md: 'flex-start' }}
              color={textColor}
            >
              <OperationHours />
            </VStack>
            <VStack
              alignItems={{ base: 'center', md: 'flex-start' }}
              color={textColor}
            >
              <ContactSection />
            </VStack>
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
