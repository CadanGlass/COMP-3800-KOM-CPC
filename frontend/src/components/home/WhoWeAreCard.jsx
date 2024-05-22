import { DefaultCard } from '../DefaultComponents';
import SubtextCardWithIcon from '../SubtextCardWithIcon';
import {
  Box,
  Stack,
  Spacer,
  useBreakpointValue,
  Heading,
  Text,
  VStack,
  AspectRatio,
} from '@chakra-ui/react';
import { MdLocationOn, MdPeople, MdVolunteerActivism } from 'react-icons/md';

const WhoWeAreCard = ({ data }) => {
  const stackSpacing = useBreakpointValue({ base: 8, md: 12, '2xl': 32 });

  return (
    <DefaultCard
      backgroundColor="none"
      internalPaddingX={useBreakpointValue({ base: 4, md: 24, xl: 48 })}
    >
      <VStack spacing={8}>
        <Heading as="h3" size="lg" textAlign={'center'}>
          {data.Title}
        </Heading>
        <Text fontSize="lg" textAlign={'center'}>
          {data.Intro}
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={stackSpacing}>
          <Stack direction="column" spacing={{ base: 2, md: 4 }} flex={1}>
            <Box bg="gray.200" h={2} />
            <Box pb={{ base: 0, md: 4 }} />
            <SubtextCardWithIcon
              subtextData={data.WhoWeAre}
              spacing={{ base: 4, md: 8 }}
              iconName={MdPeople}
            />
            <Spacer />
            <Box bg="gray.200" h={2} />
          </Stack>
          <Stack direction="column" spacing={{ base: 2, md: 4 }} flex={1}>
            <Box bg="gray.200" h={2} />
            <Box pb={{ base: 0, md: 4 }} />
            <SubtextCardWithIcon
              subtextData={data.WhatWeDo}
              spacing={{ base: 4, md: 8 }}
              iconName={MdVolunteerActivism}
            />
            <Spacer />
            <Box bg="gray.200" h={2} />
          </Stack>
          <Stack direction="column" spacing={{ base: 2, md: 4 }} flex={1}>
            <Box bg="gray.200" h={2} />
            <Box pb={{ base: 0, md: 4 }} />
            <SubtextCardWithIcon
              subtextData={data.CatchmentArea}
              spacing={{ base: 4, md: 8 }}
              iconName={MdLocationOn}
            />
            <Spacer />
            <Box bg="gray.200" h={2} />
          </Stack>
        </Stack>
        <AspectRatio ratio={{ base: 4 / 3, md: 4 / 2 }} width={'100%'}>
          <iframe src={data.MapUrl} title="Border Map" />
        </AspectRatio>
      </VStack>
    </DefaultCard>
  );
};

export default WhoWeAreCard;
