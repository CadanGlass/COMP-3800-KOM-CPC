import { Box, Heading, Text } from "@chakra-ui/react";
import MailchimpForm from "../newsletter/MailchimpForm";

const SubscribeSection = () => {
  return (
    <Box>
      <Heading size="md" mb={2}>
        Subscribe
      </Heading>
      <Text mb={2}>Want crime alerts, community safety tips and news?</Text>
      <MailchimpForm />
    </Box>
  );
};

export default SubscribeSection;
