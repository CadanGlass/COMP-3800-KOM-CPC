import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const Banner = () => (
    <Box position="relative" textAlign="center" height="300px">
        <Image src="https://via.placeholder.com/1200x300" alt="Banner" fit="cover" width="full" height="full" />
        <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" fontSize="3xl" color="white" fontWeight="bold">
            Welcome to the KOM CPC
        </Text>
    </Box>
);

export default Banner;
