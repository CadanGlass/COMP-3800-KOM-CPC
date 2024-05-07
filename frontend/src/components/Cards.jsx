import React from 'react';
import { Box, Image, Text, Button, SimpleGrid } from '@chakra-ui/react';

const Cards = ({ cardsData = [] }) => {
    if (!cardsData.length) {
        return <Text>No cards to display</Text>;  // Display a message if there are no cards
    }

    return (
        <SimpleGrid columns={3} spacing={10} p={5}>
            {cardsData.map((card, index) => (
                <Box key={index} bg="gray.100" shadow="md" rounded="lg" overflow="hidden">
                    <Image src={card.image} alt={`Card ${index + 1}`} />
                    <Box p={5}>
                        <Text fontSize="xl" fontWeight="bold">{card.title}</Text>
                        <Text mt={2}>{card.description}</Text>
                        <Button mt={4} colorScheme="blue">Learn More</Button>
                    </Box>
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default Cards;
