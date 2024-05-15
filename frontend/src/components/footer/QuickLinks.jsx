import { Box, Heading, VStack, Link } from "@chakra-ui/react";

const QuickLinks = () => {
    return (
        <Box maxW="sm">
            <Heading size="md" mb={2}>
                Quick Links
            </Heading>
            <VStack spacing={2} align="stretch">
                <Link href="#">Program</Link>
                <Link href="#">Calendar</Link>
                <Link href="#">Newsletter</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Contact Us</Link>
            </VStack>
        </Box>
    );
};

export default QuickLinks;
