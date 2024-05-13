import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

const ProgramActivitiesCard = ({ subprograms, title, description }) => {
    return (
        <DefaultCard>
            <Stack spacing={4}>
                <Heading as="h4" size="md">{title}</Heading>
                <Text>{description}</Text>
                <Box>
                    {subprograms.map((subprogram, index) => (
                        <Box key={index}>
                            <Heading as="h5" size="sm">{subprogram.title}</Heading>
                            <Text>{subprogram.content}</Text>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </DefaultCard>
    );
};

export default ProgramActivitiesCard;
