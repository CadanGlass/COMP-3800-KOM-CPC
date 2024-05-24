import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Collapse,
  VStack,
} from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import AccordionInfo from '../programs/AccordionInfo';
import LearnMoreButton from '../buttons/LearnMoreButton';

const ProgramCard = ({
  title,
  description,
  image,
  accordionContent,
  isReversed,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleLearnMoreClick = () => setIsExpanded(!isExpanded);

  return (
    <DefaultCard>
      <Grid
        templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
        gap={8}
        alignItems="center"
      >
        {!isReversed && (
          <GridItem>
            <Image
              src={image}
              alt={title}
              objectFit="cover"
              width="100%"
              height="auto"
              maxHeight="300px"
              borderRadius="md"
            />
          </GridItem>
        )}
        <GridItem>
          <VStack spacing={4} align="left" textAlign="left">
            <Heading as="h4" size="md">
              {title}
            </Heading>
            <Text>{description}</Text>
            {accordionContent && (
              <>
                <Box>
                  <LearnMoreButton
                    onClick={handleLearnMoreClick}
                    isExpanded={isExpanded}
                  />
                </Box>
                <Collapse in={isExpanded} animateOpacity>
                  <AccordionInfo items={accordionContent} />
                </Collapse>
              </>
            )}
          </VStack>
        </GridItem>
        {isReversed && (
          <GridItem>
            <Image
              src={image}
              alt={title}
              objectFit="cover"
              width="100%"
              height="auto"
              maxHeight="300px"
              borderRadius="md"
            />
          </GridItem>
        )}
      </Grid>
    </DefaultCard>
  );
};

export default ProgramCard;
