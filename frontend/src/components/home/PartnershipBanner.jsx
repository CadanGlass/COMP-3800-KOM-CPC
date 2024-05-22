import React, { useState, useEffect } from 'react';
import {
  Box,
  HStack,
  Text,
  Heading,
  Image,
  VStack,
  Stack,
  useBreakpointValue,
  Grid,
  AspectRatio,
  grid,
  ScaleFade,
  SlideFade,
  Link,
} from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import PartnersCarousel from '../howCanIHelp/PartnersCarousel';

const PartnershipGrid = ({ data }) => {
  const templateRows = useBreakpointValue({
    base: 'repeat(2, 1fr)',
    lg: 'repeat(1, 1fr)',
  });
  const templateColumns = useBreakpointValue({
    base: 'repeat(4, 1fr)',
    lg: 'repeat(8, 1fr)',
  });
  const gridGap = useBreakpointValue({ base: 2, lg: 4 });

  return (
    <Grid
      width={'100%'}
      templateColumns={templateColumns}
      templateRows={templateRows}
      gap={gridGap}
    >
      {data}
    </Grid>
  );
};

const PartnershipBanner = ({ data }) => {
  return (
    <DefaultCard>
      <VStack
        justify={'space-between'}
        align={'start'}
        spacing={8}
        overflow={'hidden'}
      >
        <Heading as="h3" size="lg">
          {data.title}
        </Heading>
        <Box w="full">
          <PartnersCarousel />
        </Box>
      </VStack>
    </DefaultCard>
  );
};

export default PartnershipBanner;
