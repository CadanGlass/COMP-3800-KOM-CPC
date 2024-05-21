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
  const partners = data.partners;
  const logoComponents = partners.map((partnerInfo, index) => (
    <AspectRatio key={index} ratio={1}>
      <Link href={partnerInfo.url} isExternal>
        {/* add links to image? */}
        <Image src={partnerInfo.logo} alt="logo" />
      </Link>
    </AspectRatio>
  ));

  const [displayedLogos, setDisplayedLogos] = useState(
    logoComponents.slice(0, 8)
  );
  const [count, setCount] = useState(8);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextLogoIndex = (count + 1) % logoComponents.length;
      const newDisplayedLogos = [...displayedLogos];
      newDisplayedLogos[count % 8] = logoComponents[nextLogoIndex];
      setDisplayedLogos(newDisplayedLogos);
      setCount((prevCount) => prevCount + 1);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [displayedLogos]);

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
        {/* <PartnershipGrid data={displayedLogos} /> */}
        <Box w="full">
          <PartnersCarousel />
        </Box>
      </VStack>
    </DefaultCard>
  );
};

export default PartnershipBanner;
