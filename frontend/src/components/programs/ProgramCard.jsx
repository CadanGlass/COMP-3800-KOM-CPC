import React, { useState } from 'react';
import { Box, VStack, Text, Button, Image, HStack } from '@chakra-ui/react';
import AccordionInfo from './AccordionInfo';

function ProgramCard({ title, description, imageUrl, learnMoreLink, accordionItems }) {
    const [showAccordion, setShowAccordion] = useState(false);

    const handleLearnMore = () => {
        setShowAccordion(!showAccordion);
    };

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            width="100%"
            bgGradient="linear(to-t, white, gray.200)"
        >
            <HStack
                align="start"
                spacing="4"
                p="4"
                flex="1"
                flexDirection={{ base: "column", md: "row" }}
            >
                <VStack align="start" spacing="4" flex="1" justify="center">
                    <Text fontWeight="bold" fontSize="xl">{title}</Text>
                    <Text>{description}</Text>
                    <Button colorScheme="red" onClick={handleLearnMore}>Learn More →</Button>
                </VStack>
                <Box
                    flexShrink="0"
                    width={{ base: "100%", md: "550px" }} // Full width on mobile
                    height={{ base: "auto", md: "250px" }} // Auto height on mobile to maintain aspect ratio
                    overflow="hidden"
                >
                    <Image
                        src={imageUrl}
                        alt={`Image of ${title}`}
                        width="100%"
                        height="100%"
                        objectFit="cover"
                        borderRadius="md"
                    />
                </Box>
            </HStack>
            {showAccordion && (
                <Box p="4">
                    <AccordionInfo items={accordionItems} />
                </Box>
            )}
        </Box>
    );
}

export default ProgramCard;
