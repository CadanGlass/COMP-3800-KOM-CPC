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

import { Link as RouterLink } from 'react-router-dom';
import KOM_logo from '../assets/KOM_Logo.png';
import SocialMediaLinks from './footer/SocialMediaLinks';
import MailchimpForm from './newsletter/MailchimpForm';
import OperationHours from './footer/OperationHours';
import ContactSection from './footer/ContactSection';

const Footer = () => {
  const bg = useColorModeValue('gray.50', 'gray.900'); // Lighter background for light mode
  const color = useColorModeValue('gray.900', 'gray.200'); // Darker text for light mode

  return (
    <Box bg={bg} color={color} px={4} py={10}>
      <Container maxW="90%" centerContent>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={10}
          align="flex-start" // Align items at the top for desktop view
        >
          <VStack spacing={4} align="center">
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
            <Text fontSize="sm" textAlign="center">
              © Kerrisdale Oakridge Marpole Community Policing Centre - 2024
            </Text>
            <Box display="flex" justifyContent="center">
              <SocialMediaLinks />
            </Box>
          </VStack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={10}
            align={{ base: 'center', md: 'flex-start' }} // Center items in mobile view
            textAlign={{ base: 'center', md: 'left' }}
          >
            <ContactSection />
            <VStack spacing={2} align="center">
              <Heading as="h4" size="md">
                Quick Links
              </Heading>
              <Link
                as={RouterLink}
                to="/"
                _hover={{ textDecoration: 'underline' }}
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/volunteer"
                _hover={{ textDecoration: 'underline' }}
              >
                Volunteer
              </Link>
              <Link
                as={RouterLink}
                to="/programs"
                _hover={{ textDecoration: 'underline' }}
              >
                Programs
              </Link>
              <Link
                as={RouterLink}
                to="/about-us"
                _hover={{ textDecoration: 'underline' }}
              >
                About Us
              </Link>
              <Link
                as={RouterLink}
                to="/contact-us"
                _hover={{ textDecoration: 'underline' }}
              >
                Contact Us
              </Link>
              <Link
                as={RouterLink}
                to="/shield-your-sip"
                _hover={{ textDecoration: 'underline' }}
              >
                Shield Your Sip
              </Link>
              <Link
                as={RouterLink}
                to="/news-events"
                _hover={{ textDecoration: 'underline' }}
              >
                News & Events
              </Link>
              <Link
                as={RouterLink}
                to="/resources"
                _hover={{ textDecoration: 'underline' }}
              >
                Resources
              </Link>
              <Link
                as={RouterLink}
                to="/how-can-i-help"
                _hover={{ textDecoration: 'underline' }}
              >
                How Can I Help
              </Link>
            </VStack>
            <OperationHours />
            <Box maxW="sm" textAlign="center">
              <VStack spacing={2} align="center">
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
