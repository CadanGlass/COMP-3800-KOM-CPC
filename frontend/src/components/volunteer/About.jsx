import {
  Stack,
  Heading,
  Box,
  useBreakpointValue,
  Text,
  Image,
  AspectRatio,
} from '@chakra-ui/react';
import { DefaultCard, DefaultBlocksRenderer } from '../DefaultComponents';

const AboutCard = ({ data }) => {
  const stackDirection = useBreakpointValue({ base: 'column', xl: 'row' });
  const stackSpacing = useBreakpointValue({ base: 8, lg: 12, xl: 32 });
  return (
    <DefaultCard>
      <Stack direction={stackDirection} spacing={stackSpacing}>
        <Box
          flex={1}
          alignSelf={'center'}
          w={'100%'}
          maxW={'1000px'}
          maxH={'500px'}
        >
          <AspectRatio ratio={2 / 1} w={'100%'}>
            <Image
              src={data.Image}
              alt={data.AlternativeText}
              fit="cover"
              width={'100%'}
              height={'100%'}
            />
          </AspectRatio>
        </Box>
        <Box flex={1} alignSelf={'center'} w={'100%'}>
          <DefaultBlocksRenderer content={data.Description} />
        </Box>
      </Stack>
    </DefaultCard>
  );
};
export default AboutCard;
