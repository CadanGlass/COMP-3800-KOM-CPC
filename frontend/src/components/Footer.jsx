import {
  Box,
  Avatar,
  VStack,
  Container,
  Stack,
  Text,
  Link,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import KOM_logo from '../assets/KOM_Logo.png';
import SocialMediaLinks from './footer/SocialMediaLinks';
import MailchimpForm from './newsletter/MailchimpForm';
import OperationHours from './footer/OperationHours';
import QuickLinks from './footer/QuickLinks';
import ContactSection from './footer/ContactSection';

const Footer = () => {
  const bg = useColorModeValue('gray.50', 'gray.900'); // Lighter background for light mode
  const color = useColorModeValue('gray.900', 'gray.200'); // Darker text for light mode

  return (
    <Box bg={bg} color={color} px={4} py={10}>
      <Container maxW="90%" centerContent>
        <Stack direction={{ base: 'column', lg: 'row' }} spacing={10}>
          <VStack spacing={4} align={{ base: 'center', lg: 'flex-start' }}>
            <Link
              display="flex"
              alignItems="center"
              href="/"
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.100', 'gray.700'),
              }}
            >
              <Avatar size="md" src={KOM_logo} />
              <Text fontSize="lg" fontWeight="bold" ml={2}>
                KOM CPC
              </Text>
            </Link>
            <Text fontSize="sm" textAlign={{ base: 'center', lg: 'left' }}>
              © Kerrisdale Oakridge Marpole Community Policing Centre - 2024
            </Text>
            <SocialMediaLinks />
          </VStack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={10}
            align={{ base: 'center', md: 'flex-start' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <ContactSection />
            <QuickLinks />
            <OperationHours />
            <Box maxW="sm">
              <VStack spacing={2} align="stretch">
                <MailchimpForm />
              </VStack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
