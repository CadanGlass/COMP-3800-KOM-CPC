import { DefaultCard } from '../DefaultComponents';
import {
  Box,
  Stack,
  useBreakpointValue,
  Heading,
  Text,
  VStack,
  AspectRatio,
} from '@chakra-ui/react';

const CatchmentCard = ({ catchmentData }) => {
  const stackSpacing = useBreakpointValue({ base: 8, md: 12, '2xl': 32 });
  const mapWidth = useBreakpointValue({ base: '100%', md: '65%' });
  const textWidth = useBreakpointValue({ base: '100%', md: '35%' });

  return (
    <DefaultCard
      backgroundColor="none"
      internalPaddingX={useBreakpointValue({ base: 4, md: 24, xl: 48 })}
    >
      <VStack spacing={8}>
        <Heading as="h3" size="lg" textAlign="center">
          {catchmentData.title}
        </Heading>
        {catchmentData.description.map((line, index) => (
          <Text key={`line${index}`} fontSize="lg" textAlign="center">
            {line}
          </Text>
        ))}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={stackSpacing}
          align="center"
          width="100%"
        >
          <Box flex="1" width={mapWidth}>
            <AspectRatio ratio={16 / 9} width="100%">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=14EQlSHq7tJJVlNIn_Sb3Y9PbVWk&ehbc=2E312F"
                title="Border Map"
                loading="lazy"
                allowFullScreen
              />
            </AspectRatio>
          </Box>
          <Box
            flex="1"
            width={textWidth}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Heading as="h4" size="md" mb={4}>
              Areas Included
            </Heading>
            <Text as="ul" listStyleType="disc" paddingLeft={4}>
              {catchmentData.areas.map((area, index) => (
                <li key={`area${index}`}>{area}</li>
              ))}
            </Text>
          </Box>
        </Stack>
      </VStack>
    </DefaultCard>
  );
};

export default CatchmentCard;
