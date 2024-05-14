import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";

import LogoSection from "./footer/LogoSection";
import ContactSection from "./footer/ContactSection";
import VolunteerSection from "./footer/VolunteerSection";
import SubscribeSection from "./footer/SubscribeSection";
import FollowUsSection from "./footer/FollowUsSection";




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
          <LogoSection />
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={10}
            align={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <ContactSection />
            <VolunteerSection />
            <SubscribeSection />
          </Stack>
          <FollowUsSection />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
