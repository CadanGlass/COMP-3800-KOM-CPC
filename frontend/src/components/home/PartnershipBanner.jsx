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
import Carousel from '../Carousel';

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
          {'Meet Our Sponsors'}
        </Heading>
        <Box w="full">
          <Carousel sponsors={data} />
        </Box>
      </VStack>
    </DefaultCard>
  );
};

export default PartnershipBanner;
