import React from 'react';
import { Heading, Stack, Text, Box } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

const HowCanYouHelpCard = ({ title, description }) => {
  return (
    <DefaultCard
      internalPaddingX={{ base: 4, md: 8, xl: 16 }}
      internalPaddingY={8}
    >
      <Stack spacing={8}>
        <Box textAlign="left">
          <Heading size="md" mb={4}>
            {title}
          </Heading>
          <Text mb={2}>{description}</Text>
        </Box>
      </Stack>
    </DefaultCard>
  );
};

export default HowCanYouHelpCard;
