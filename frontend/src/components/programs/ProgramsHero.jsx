import React from 'react';
import {
  Grid,
  Box,
  useBreakpointValue,
  GridItem,
  Flex,
  Text,
} from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

const ProgramsHero = ({ title, description }) => {
  const gridGap = useBreakpointValue({ base: 8, l: 12, xl: 32 });
  const gridTemplateAreas = useBreakpointValue({
    base: `"description"`,
    xl: `"description"`,
  });
  const gridTemplateColumns = useBreakpointValue({
    base: '1fr',
    xl: '1fr',
  });
  const textAlign = useBreakpointValue({ base: 'center', xl: 'center' });

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
        </Grid>
      </Flex>
    </DefaultCard>
  );
};

export default ProgramsHero;
