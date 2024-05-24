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
  useBreakpointValue,
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

  const imageSrc = useBreakpointValue({
    base: `${image}?w=480`, // Image URL with width parameter for mobile devices
    md: `${image}?w=768`,  // Image URL with width parameter for tablets
    lg: `${image}?w=1024`, // Image URL with width parameter for desktop
  });

  const imageMaxHeight = useBreakpointValue({ base: '150px', md: '200px', lg: '300px' });

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
              src={imageSrc}
              alt={title}
              objectFit="cover"
              width="100%"
              height="auto"
              maxHeight={imageMaxHeight}
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
              src={imageSrc}
              alt={title}
              objectFit="cover"
              width="100%"
              height="auto"
              maxHeight={imageMaxHeight}
              borderRadius="md"
            />
          </GridItem>
        )}
      </Grid>
    </DefaultCard>
  );
};

export default ProgramCard;
