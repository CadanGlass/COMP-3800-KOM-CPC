
import {
  Box,
  Avatar,
  VStack,
  Container,
  Stack,
  Text,
  Link,
  Heading,
  Input,
  Button,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

import KOM_logo from "../assets/KOM_Logo.png";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const date = new Date();

  return (
    <Box
      bg={useColorModeValue("gray.800", "gray.900")}
      color={useColorModeValue("gray.100", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={10}
          justify="space-between"
          align={{ base: "center", lg: "flex-start" }} // Center align on small screens, left align on large
        >
          <VStack spacing={4} alignItems={{ base: "center", lg: "flex-start" }}>
            <Link
              display="flex"
              alignItems="center"
              p={2}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href="/"
            >
              <Avatar size={"md"} src={KOM_logo} />
              <Text fontSize="lg" fontWeight="bold" ml={2}>
                KOM CPC
              </Text>
            </Link>
            <Text fontSize="sm" textAlign={{ base: "center", lg: "center" }}>
              © Kerrisdale Oakridge Marpole Community Policing Centre - 2024
            </Text>
          </VStack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={10}
            alignItems={{ base: "center", md: "flex-start" }}
          >
            <Box textAlign={{ base: "center", md: "left" }}>
              <Heading size="md" mb={2}>
                Contact
              </Heading>
              <Text>6070 East Boulevard,</Text>
              <Text>Vancouver BC Canada</Text>
              <Text>email@email.com</Text>
            </Box>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Heading size="md" mb={2}>
                Volunteer
              </Heading>
              <VStack spacing={1} align="stretch">
                <Link href="#">Program</Link>
                <Link href="#">Calendar</Link>
                <Link href="#">Newsletter</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Contact Us</Link>
              </VStack>
            </Box>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Heading size="md" mb={2}>
                Subscribe
              </Heading>
              <Text mb={2}>
                Want crime alerts, community safety tips and news?
              </Text>
              <Input placeholder="Your email" size="sm" />
              <Button mt={2} colorScheme="red">
                Subscribe →
              </Button>
            </Box>
          </Stack>
          <VStack align="center">
            <Heading size="md" mb={2}>
              Follow us
            </Heading>
            <Stack direction={"row"} spacing={6}>
              <Link href={"https://www.facebook.com/KOMCPC"}>
                <Icon as={FaFacebook} />
              </Link>
              <Link href={"https://twitter.com/komcpc"}>
                <Icon as={FaTwitter} />
              </Link>
              <Link href={"https://www.instagram.com/komcpc"}>
                <Icon as={FaInstagram} />
              </Link>
            </Stack>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
