import { Box, Heading, Text, Grid, GridItem, Image } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import AccordionInfo from './AccordionInfo';

const ProgramCard = ({ title, description, image, subprograms }) => {
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
                    <AccordionInfo items={subprograms} />
                </GridItem>
                <GridItem display="flex" alignItems="center">
                    <Image
                        src={image}
                        alt={title}
                        fit="cover"
                        width="100%"
                        height="100%"
                        borderRadius="md"
                    />
                </GridItem>
            </Grid>
        </DefaultCard>
    );
};

export default ProgramCard;
