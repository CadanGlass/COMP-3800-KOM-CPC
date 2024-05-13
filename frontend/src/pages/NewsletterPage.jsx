import {
  Box,
  Flex,
  VStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import PastNewsletters from "../components/newsletter/PastNewsletters";
import MailchimpForm from "../components/newsletter/MailchimpForm";

export default function NewsletterPage() {
  const newsletters = [
    {
      title: "May Newsletter",
      summary: "Summary of May's events and updates.",
    },
    {
      title: "April Newsletter",
      summary: "Summary of April's activities and announcements.",
    },
    // Add more newsletters as needed
  ];

  return (
    <Box p={4}>
      <VStack spacing={8}>
        <MailchimpForm></MailchimpForm>
        <PastNewsletters newsletters={newsletters} />
      </VStack>
    </Box>
  );
}
