import { Box, Heading, VStack, Link } from '@chakra-ui/react';

const VolunteerSection = () => {
  return (
    <Box>
      <Heading size="md" mb={2}>
        Volunteer
      </Heading>
      <VStack spacing={3} align="stretch">
        <Link href="#">Program</Link>
        <Link href="#">Calendar</Link>
        <Link href="#">Newsletter</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Contact Us</Link>
      </VStack>
    </Box>
  );
};

export default VolunteerSection;
