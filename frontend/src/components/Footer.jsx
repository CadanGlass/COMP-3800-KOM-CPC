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
import OperationHours from "./footer/OperationHours";
import QuickLinks from "./footer/QuickLinks"; // Import the new component

const Footer = () => {
  const bg = useColorModeValue("gray.50", "gray.900"); // Lighter background for light mode
  const color = useColorModeValue("gray.900", "gray.200"); // Darker text for light mode

  return (
    <Box bg={bg} color={color} px={4} py={10}>
      <Container maxW="8xl">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={10}
        >
          <VStack spacing={4} align={{ base: "center", lg: "flex-start" }}>
            <Link
              display="flex"
              alignItems="center"
              href="/"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.100", "gray.700"),
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
            <SocialMediaLinks />
          </VStack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={10}
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Box maxW="sm">
              <Heading size="md" mb={2}>
                Contact Us
              </Heading>
              <VStack spacing={2} align="stretch">
                <Text>6070 East Boulevard,</Text>
                <Text>Vancouver BC Canada</Text>
                <Text>email@email.com</Text>
              </VStack>
            </Box>
            <QuickLinks /> {/* Use the new QuickLinks component */}
            <Box maxW="sm">
              <OperationHours />
            </Box>
            <Box maxW="sm">
              <Heading size="md" mb={2}>
                Subscribe
              </Heading>
              <VStack spacing={2} align="stretch">
                <Text>Want crime alerts, community safety tips, and news?</Text>
                <Text mb={2}>Subscribe to our newsletter here:</Text>
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
