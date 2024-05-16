import React from 'react';
import { Box, Heading, VStack, Link, Divider, Flex } from '@chakra-ui/react';

const QuickLinks = () => {
    return (
        <Box p={1}>
            <Flex align="center" mb={4}>
                <Heading size="md" ml={2} color="white">
                    Links
                </Heading>
            </Flex>
            <Divider mb={4} />
            <VStack align="stretch" spacing={3}>
                <Link href="#" fontSize="md">
                    Program
                </Link>
                <Link href="#" fontSize="md">
                    Calendar
                </Link>
                <Link href="#" fontSize="md">
                    Newsletter
                </Link>
                <Link href="#" fontSize="md">
                    About Us
                </Link>
                <Link href="#" fontSize="md">
                    Contact Us
                </Link>
            </VStack>
        </Box>
    );
};

export default QuickLinks;
