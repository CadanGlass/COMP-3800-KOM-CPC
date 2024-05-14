import {
  Box,
  VStack,
  Link,
  Text,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

import KOM_logo from "../../assets/KOM_Logo.png";



const LogoSection = () => {
  return (
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
  );
};

export default LogoSection;
