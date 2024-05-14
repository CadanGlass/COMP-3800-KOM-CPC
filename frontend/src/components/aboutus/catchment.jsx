import { Stack, Heading, Box, useBreakpointValue, Text, Image } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

const CatchmentCard = ({ catchmentData }) => {
    const stackDirection = useBreakpointValue({ base: 'column', xl: 'row' });
    const stackSpacing = useBreakpointValue({ base: 8, lg: 12, xl: 32 });

    return (
        <DefaultCard>
            <Stack direction={stackDirection} spacing={stackSpacing}>
                <Box flex={1} alignSelf={'center'}>
                    <Heading as="h2" size="lg" paddingBottom={4}>
                        {catchmentData.title}
                    </Heading>
                    {catchmentData.description.map((line, index) => (
                        <Text key={`line${index}`} paddingBottom={4}>
                            {line}
                        </Text>
                    ))}
                    <Text as="ul" listStyleType="disc" paddingLeft={4}>
                        {catchmentData.areas.map((area, index) => (
                            <li key={`area${index}`}>{area}</li>
                        ))}
                    </Text>
                </Box>
                <Box flex={1} alignSelf={'center'}>
                    <Box as="section" bg="gray.100" py={4} borderRadius="lg" m='2rem'>
                        <Box textAlign="center" mb={2}>
                            <Box display="flex" justifyContent="center">
                                <iframe
                                    src="https://www.google.com/maps/d/embed?mid=14EQlSHq7tJJVlNIn_Sb3Y9PbVWk&ehbc=2E312F"
                                    width="400"
                                    height="300"
                                    title="Border Map"
                                    loading="lazy"
                                    allowFullScreen
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </DefaultCard>
    );
};

export default CatchmentCard;
