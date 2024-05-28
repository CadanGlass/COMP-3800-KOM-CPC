import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  AspectRatio,
  Link,
  Stack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { DefaultCard } from '../DefaultComponents';
import LearnMoreButton from '../buttons/LearnMoreButton';

export default function EventCard({ name, date, image }) {
  return (
    <DefaultCard p={8} minHeight="400px">
      <Box textAlign="center">
        <Box display="flex" justifyContent="center" mb={4}>
          {image && (
            <AspectRatio maxH="200px" w="full" ratio={4 / 3} maxWidth="400px">
              <Image
                src={image}
                alt={name}
                objectFit="cover"
                borderRadius="md"
              />
            </AspectRatio>
          )}
        </Box>
        <Stack spacing={4}>
          <Heading as="h3" size="lg" mb={2}>
            {name}
          </Heading>
          <Text fontSize="lg" mb={2}>
            {date}
          </Text>
          <Link
            as={RouterLink}
            to="/news-events"
            _hover={{ textDecoration: 'none' }}
          >
            <LearnMoreButton>Learn More →</LearnMoreButton>
          </Link>
        </Stack>
      </Box>
    </DefaultCard>
  );
}
