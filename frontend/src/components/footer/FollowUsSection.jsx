import { Box, Heading, VStack } from "@chakra-ui/react";
import SocialMediaLinks from "../footer/SocialMediaLinks";

const FollowUsSection = () => {
  return (
    <VStack align={{ base: "center", lg: "center" }}>
      <Heading size="md" mb={2}>
        Follow us
      </Heading>
      <Box align="center">
        <SocialMediaLinks />
      </Box>
    </VStack>
  );
};

export default FollowUsSection;
