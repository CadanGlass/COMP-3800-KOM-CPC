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
  const bg = useColorModeValue('#f7f7f7', 'gray.800'); // Light gray for light mode, dark gray for dark mode
  const textColor = useColorModeValue('gray.800', 'white'); // Dark text for light mode, white text for dark mode
  const dividerColor = useColorModeValue('gray.300', 'gray.600'); // Gray divider for light mode, lighter gray for dark mode

  return (
    <Box bg={bg} color={textColor} px={4} py={10}>
      <Container maxW="1700px">
        <Stack spacing={8}>
          <VStack align="start" spacing={4}>
            <Divider borderColor={dividerColor} />
          </VStack>
          <Stack
            direction={{ base: 'column', xl: 'row' }}
            spacing={8}
            justify="space-between"
            alignItems={{ base: 'center', xl: 'flex-start' }} // Center items on mobile, align to top on larger screens
          >
            <VStack
              alignItems={{ base: 'center', xl: 'flex-start' }}
              color={textColor}
            >
              <LogoSection />
              <HStack mt={4}>
                <SocialMediaLinks />
              </HStack>
            </VStack>
            <VStack
              alignItems={{ base: 'center', xl: 'flex-start' }}
              color={textColor}
              maxW="430px"
            >
              <MailchimpForm />
            </VStack>
            <VStack
              alignItems={{ base: 'center', xl: 'flex-start' }}
              color={textColor}
            >
              <OperationHours />
            </VStack>
            <VStack
              alignItems={{ base: 'center', xl: 'flex-start' }}
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
