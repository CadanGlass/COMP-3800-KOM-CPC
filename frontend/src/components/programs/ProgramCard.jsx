import { Box, Heading, Text, Grid, GridItem, Image, Collapse } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import AccordionInfo from './AccordionInfo';
import LearnMoreButton from '../LearnMoreButton';

const ProgramCard = ({ title, description, image, subprograms, isExpanded, onLearnMoreClick }) => {
    return (
        <DefaultCard>
            <Grid
                templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                gap={8}
                alignItems="start"
            >
                <GridItem>
                    <Heading as="h4" size="md" mb={4}>{title}</Heading>
                    <Text mb={4}>{description}</Text>
                    <LearnMoreButton onClick={onLearnMoreClick} isExpanded={isExpanded} />
                    <Box mt={4}>
                        <Collapse in={isExpanded} animateOpacity>
                            <AccordionInfo items={subprograms} />
                        </Collapse>
                    </Box>
                </GridItem>
                <GridItem>
                    <Image
                        src={image}
                        alt={title}
                        fit="cover"
                        maxW="100%"
                        height="auto"
                        borderRadius="md"
                    />
                </GridItem>
            </Grid>
        </DefaultCard>
    );
};

export default ProgramCard;
