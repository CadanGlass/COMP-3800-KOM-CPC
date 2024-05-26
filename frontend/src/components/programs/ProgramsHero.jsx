import React from 'react';
import {
  Grid,
  Box,
  useBreakpointValue,
  Image,
  GridItem,
  Flex,
  Text,
} from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

const ProgramsHero = ({ description, image }) => {
  const gridGap = useBreakpointValue({ base: 8, l: 12, xl: 32 });
  const gridTemplateAreas = useBreakpointValue({
    base: `"description" "image"`,
    xl: `"description image"`,
  });
  const gridTemplateColumns = useBreakpointValue({
    base: '1fr',
    xl: '1fr 1fr',
  });
  const textAlign = useBreakpointValue({ base: 'center', xl: 'left' });

  return (
    <DefaultCard>
      <Flex justify={'center'}>
        <Grid
          templateAreas={gridTemplateAreas}
          templateColumns={gridTemplateColumns}
          columnGap={gridGap}
          rowGap={8}
        >
          <GridItem gridArea="description" alignSelf={'center'}>
            <Text textAlign={textAlign}>{description}</Text>
          </GridItem>

          <GridItem gridArea="image" alignSelf="center">
            <Box flex={1}>
              <Image
                src={image} // Use the passed image prop
                alt={description}
                fit="cover"
                maxW="100%"
                height="auto"
              />
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </DefaultCard>
  );
};

export default ProgramsHero;
