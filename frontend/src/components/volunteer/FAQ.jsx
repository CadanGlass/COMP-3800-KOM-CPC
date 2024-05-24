import { Stack, Heading, Box, useBreakpointValue } from '@chakra-ui/react';
import CustomAccordion from '../AccordionMenu';
import { DefaultCard } from '../DefaultComponents';

const FAQCard = ({ data }) => {
  const accordionPadding = useBreakpointValue({ base: 0, lg: 4 });

  return (
    <DefaultCard>
      <Stack spacing={4}>
        <Heading as="h3" size="lg" pb={4}>
          {data.Title}
        </Heading>
        <Box paddingLeft={accordionPadding}>
          <CustomAccordion accordionData={data.Question} />
        </Box>
      </Stack>
    </DefaultCard>
  );
};

export default FAQCard;
