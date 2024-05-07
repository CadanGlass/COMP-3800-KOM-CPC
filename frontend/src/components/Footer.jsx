import React from 'react';
import { Box, Text, Container } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg="blue.500" color="white">
            <Container maxW="container.xl" py={4} textAlign="center">
                <Text>Kerrisdale Oakridge Marpole Community Policing Centre. All Rights Reserved. &copy; {new Date().getFullYear()}</Text>
            </Container>
        </Box>
    );
};

export default Footer;
