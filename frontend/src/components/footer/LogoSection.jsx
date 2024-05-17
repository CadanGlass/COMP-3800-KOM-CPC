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
        <Avatar size="lg" src={KOM_logo} />
        <Text fontSize="lg" ml={2}>
          KOM CPC <br></br>
          6070 East Boulevard,<br></br>
          Vancouver BC, Canada
        </Text>
      </Link>
    </VStack>
  );
};

export default LogoSection;
