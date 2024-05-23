import React from 'react';
import {
  Section,
  DefaultCard,
} from '../components/DefaultComponents';
import { Box, useColorMode, Heading, Text } from '@chakra-ui/react';

export default function ErrorPage() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Section>
        <DefaultCard>
          <Box textAlign="center" py={6}>
            <Heading
              display="inline-block"
              as="h2"
              size="2xl"
              //   color
            >
              404 Error
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
              Page Not Found
            </Text>
            <Text
              color={colorMode === 'light' ? 'gray.500' : 'gray.100'}
              mb={6}
            >
              The page you're looking for does not seem to exist
            </Text>
          </Box>
        </DefaultCard>
      </Section>
    </>
  );
}
