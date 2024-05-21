import React, { useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://w.behold.so/widget.js';
    document.head.appendChild(script);
  }, []);

  return (
    <DefaultCard>
      <Heading as="h2" size="lg" textAlign="center" mb={4}>
        Instagram Photos
      </Heading>
      <Box
        id="jOgFGHVZpDQA0n8yqzOo"
        data-behold-id="jOgFGHVZpDQA0n8yqzOo"
      ></Box>
    </DefaultCard>
  );
};

export default InstagramFeed;
