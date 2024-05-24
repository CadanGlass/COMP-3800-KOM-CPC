import {
  Box,
  Heading,
  Image,
  Text,
  Stack,
  useBreakpointValue,
  AspectRatio,
} from '@chakra-ui/react';
import SubtextCardWithIcon from '../SubtextCardWithIcon';
import { DefaultCard, DefaultBlocksRenderer } from '../DefaultComponents';
import { MdEvent, MdWork, MdDiversity1 } from 'react-icons/md';

const WhyVolunteerCard = ({ data }) => {
  const stackSpacing = useBreakpointValue({ base: 8, md: 12, xl: 32 });
  const stackDirection = useBreakpointValue({ base: 'column', lg: 'row' });
  const subtextSpacing = useBreakpointValue({ base: 4, md: 8, lg: 16 });
  const subtextDirection = useBreakpointValue({ base: 'column', lg: 'row' });

  return (
    <DefaultCard>
      <Stack
        direction={stackDirection}
        maxW="100%"
        paddingBottom={useBreakpointValue({ base: 4, md: 8, lg: 16 })}
        spacing={stackSpacing}
      >
        <Box flex={1}>
          <Heading as="h3" size="lg" paddingBottom={4}>
            {data.Info.Title}
          </Heading>
          <Box>
            <DefaultBlocksRenderer content={data.Info.Description} />
          </Box>
        </Box>
        <Box
          flex={1}
          alignSelf={'flex-end'}
          w={'100%'}
          maxW={'1000px'}
          maxH={'300px'}
        >
          <AspectRatio ratio={10 / 3} w={'100%'}>
            <Image
              src={data.Image}
              alt={data.AlternativeText}
              fit="cover"
              maxW={'100%'}
              height={'100%'}
            />
          </AspectRatio>
        </Box>
      </Stack>
      <Stack direction={subtextDirection} spacing={subtextSpacing}>
        <Box flex={1}>
          <SubtextCardWithIcon
            subtextData={data.Subpoint[0]}
            iconName={MdEvent}
          />
        </Box>
        <Box flex={1}>
          <SubtextCardWithIcon
            subtextData={data.Subpoint[1]}
            iconName={MdWork}
          />
        </Box>
        <Box flex={1}>
          <SubtextCardWithIcon
            subtextData={data.Subpoint[2]}
            iconName={MdDiversity1}
          />
        </Box>
      </Stack>
    </DefaultCard>
  );
};

export default WhyVolunteerCard;
