import React from 'react';
import { Card, Heading, Stack, Text, useColorMode } from '@chakra-ui/react';

const HowCanYouHelpCard = () => {
  const { colorMode } = useColorMode();

  return (
    <Card
      direction={'column'}
      overflow="hidden"
      variant="outline"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      p={8}
      maxW="800px"
      mx="auto"
      shadow="md"
    >
      <Stack spacing={4} textAlign="center">
        <Heading size="md">How You Can Help</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          vestibulum erat. Vivamus vel augue sed odio malesuada egestas. Proin
          sit amet ligula in nisl feugiat fermentum.
        </Text>
        <Text>
          Donec nec nunc sit amet turpis hendrerit venenatis. Fusce at nunc
          metus. Mauris vehicula urna sed urna suscipit, ac interdum nisi
          mollis.
        </Text>
      </Stack>
    </Card>
  );
};

export default HowCanYouHelpCard;
