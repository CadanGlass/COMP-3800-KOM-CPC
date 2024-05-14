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
} from "@chakra-ui/react";

import KOM_logo from "../assets/KOM_Logo.png";
import SocialMediaLinks from "./footer/SocialMediaLinks";
import MailchimpForm from "./newsletter/MailchimpForm";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.800", "gray.900")}
      color={useColorModeValue("gray.100", "gray.200")}
      px={4}
    >
      <Container maxW="7xl" py={10}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={10}
          justify="space-between"
          align={{ base: "center", lg: "flex-start" }}
        >
          <VStack spacing={4} align={{ base: "center", lg: "flex-start" }}>
            <Link
              display="flex"
              alignItems="center"
              href="/"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              <Avatar size="md" src={KOM_logo} />
              <Text fontSize="lg" fontWeight="bold" ml={2}>
                KOM CPC
              </Text>
            </Link>
            <Text fontSize="sm" textAlign={{ base: "center", lg: "left" }}>
              © Kerrisdale Oakridge Marpole Community Policing Centre - 2024
            </Text>
          </VStack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={10}
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Box>
              <Heading size="md" mb={2}>
                Contact
              </Heading>
              <Text>6070 East Boulevard,</Text>
              <Text>Vancouver BC Canada</Text>
              <Text>email@email.com</Text>
            </Box>
            <Box>
              <Heading size="md" mb={2}>
                Volunteer
              </Heading>
              <VStack spacing={3} align="stretch">
                <Link href="#">Program</Link>
                <Link href="#">Calendar</Link>
                <Link href="#">Newsletter</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Contact Us</Link>
              </VStack>
            </Box>
            <Box>
              <Heading size="md" mb={2}>
                Subscribe
              </Heading>
              <Text mb={2}>
                Want crime alerts, community safety tips and news?
              </Text>
              <MailchimpForm />
            </Box>
          </Stack>
          <VStack align={{ base: "center", lg: "center" }}>
            <Heading size="md" mb={2}>
              Follow us
            </Heading>
            <Box align="center">
              <SocialMediaLinks />
            </Box>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
