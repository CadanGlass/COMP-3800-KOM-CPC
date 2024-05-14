import { Box, Heading, Text } from "@chakra-ui/react";

const ContactSection = () => {
  return (
    <Box>
      <Heading size="md" mb={2}>
        Contact
      </Heading>
      <Text>6070 East Boulevard,</Text>
      <Text>Vancouver BC Canada</Text>
      <Text>email@email.com</Text>
    </Box>
  );
};

export default ContactSection;
