import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';

const Navbar = () => (
    <Flex bg="blue.500" color="white" px={4} py={2} align="center">
        <Box p="2">Logo</Box>
        <Spacer />
        <Box>
            <Link px="3">Home</Link>
            <Link px="3">Programs</Link>
            <Link px="3">Events</Link>
            <Link px="3">Newsletter</Link>
            <Link px="3">About Us</Link>
            <Link px="3">Contact Us</Link>
        </Box>
    </Flex>
);

export default Navbar;
