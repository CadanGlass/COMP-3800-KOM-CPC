import {
  Box,
  Flex,
  VStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import NewsletterSignup from "../components/newsletter/NewsletterSignup";
import PastNewsletters from "../components/newsletter/PastNewsletters";

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
        <NewsletterSignup />
        <PastNewsletters newsletters={newsletters} />
      </VStack>
    </Box>
  );
}
