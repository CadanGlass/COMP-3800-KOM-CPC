import {
  Grid,
  Heading,
  Box,
  useBreakpointValue,
  Image,
  GridItem,
  Flex,
  AspectRatio,
} from '@chakra-ui/react';
import VolunteerNowButton from '../buttons/VolunteerNowButton';
import { DefaultCard } from '../DefaultComponents';

const Hero = ({ data }) => {
  const gridGap = useBreakpointValue({ base: 8, l: 12, xl: 32 });
  const gridTemplateAreas = useBreakpointValue({
    base: `"title" "image" "button"`,
    xl: `"title image" "button image"`,
  });
  const gridTemplateColumns = useBreakpointValue({
    base: '1fr',
    xl: '1fr 1fr',
  });
  const headingTextAlign = useBreakpointValue({ base: 'center', xl: 'left' });
  const buttonJustify = useBreakpointValue({ base: 'center', xl: 'left' });
  return (
    <DefaultCard>
      <Grid
        templateAreas={gridTemplateAreas}
        templateColumns={gridTemplateColumns}
        columnGap={gridGap}
        rowGap={8}
        w={'100%'}
      >
        <GridItem gridArea="title" alignSelf={'flex-end'}>
          <Heading as="h3" size="lg" textAlign={headingTextAlign}>
            {data.Title}
          </Heading>
        </GridItem>

        <GridItem gridArea="image" display={'flex'}>
          <Box
            flex={1}
            w={'100%'}
            maxW={'1000px'}
            maxH={'500px'}
            alignSelf={'center'}
            m={'auto'}
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
        </GridItem>
        <GridItem
          gridArea="button"
          alignSelf={'center'}
          justifySelf={buttonJustify}
        >
          <VolunteerNowButton />
        </GridItem>
      </Grid>
    </DefaultCard>
  );
};

export default Hero;
