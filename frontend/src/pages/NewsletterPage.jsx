import React from "react";
import { Box, VStack, Heading, useColorModeValue } from "@chakra-ui/react";

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
    <>
      <Heading
        as="h1"
        size="xl"
        textAlign="center"
        mt={5}
        mb={5}
        fontWeight="bold"
      >
        KOM Community Policing Centre Newsletter
      </Heading>
      <Box p={4}>
        <VStack spacing={8}>
          <MailchimpForm />
          <PastNewsletters newsletters={newsletters} />
        </VStack>
      </Box>
    </>
  );
}
