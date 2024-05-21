import React from 'react';
import { Heading, Stack, Text, Box } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

import DonateButton from '../buttons/DonateButton';
import ContactUsButton from '../buttons/ContactUsButton';

const HowCanYouHelpCard = () => {
  return (
    <DefaultCard
      internalPaddingX={{ base: 4, md: 8, xl: 16 }}
      internalPaddingY={8}
    >
      <Stack spacing={8} textAlign="center">
        <Box>
          <Heading size="md" mb={4}>
            How You Can Help
          </Heading>
          <Text mb={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            vestibulum erat. Vivamus vel augue sed odio malesuada egestas. Proin
            sit amet ligula in nisl feugiat fermentum.
          </Text>
          <Text>
            Donec nec nunc sit amet turpis hendrerit venenatis. Fusce at nunc
            metus. Mauris vehicula urna sed urna suscipit, ac interdum nisi
            mollis. Donec nec nunc sit amet turpis hendrerit venenatis. Fusce at
            nunc metus. Mauris vehicula urna sed urna suscipit, ac interdum nisi
            mollis. Donec nec nunc sit amet turpis hendrerit venenatis. Fusce at
            nunc metus. Mauris vehicula urna sed urna suscipit, ac interdum nisi
            mollis. Donec nec nunc sit amet turpis hendrerit venenatis. Fusce at
            nunc metus. Mauris vehicula urna sed urna suscipit, ac interdum nisi
            mollis.
          </Text>
        </Box>
      </Stack>
    </DefaultCard>
  );
};

export default HowCanYouHelpCard;
