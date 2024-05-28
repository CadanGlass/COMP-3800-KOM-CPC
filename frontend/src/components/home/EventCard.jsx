import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  Button,
  AspectRatio,
} from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

export default function EventCard({ name, date, image }) {
  return (
    <DefaultCard p={8} minHeight="500px">
      <Box textAlign="center">
        <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
          {image && (
            <AspectRatio maxH="300px" w="full" ratio={4 / 3}>
              <Image
                objectFit="cover"
                src={image}
                alt={name}
                borderRadius="md"
              />
            </AspectRatio>
          )}
        </Box>
        <Heading as="h3" size="lg" mb={2}>
          {name}
        </Heading>
        <Text fontSize="lg" mb={2}>
          {date}
        </Text>
        <Button>Learn More</Button>
      </Box>
    </DefaultCard>
  );
}
