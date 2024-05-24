import CustomAccordion from '../AccordionMenu';
import { Box, Heading, Stack, useBreakpointValue } from '@chakra-ui/react';
import { DefaultCard, DefaultBlocksRenderer } from '../DefaultComponents';

const VolunteeringActivitiesCard = ({ data }) => {
  const stackSpacing = useBreakpointValue({ base: 8, md: 12, xl: 32 });

  return (
    <DefaultCard>
      <Stack direction={['column', 'row']} maxW="100%" spacing={stackSpacing}>
        <Box flex={1}>
          <Heading as="h3" size="lg" pb={4}>
            {data.Title}
          </Heading>
          <DefaultBlocksRenderer content={data.Description} />
        </Box>
        <Box flex={1}>
          <CustomAccordion accordionData={data.DropdownData} />
        </Box>
      </Stack>
    </DefaultCard>
  );
};

export default VolunteeringActivitiesCard;
