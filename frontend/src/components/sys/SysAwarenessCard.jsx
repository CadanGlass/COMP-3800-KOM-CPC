import { DefaultCard } from '../DefaultComponents';
import { Stack, Heading, Box } from '@chakra-ui/react';
import CustomAccordion from '../AccordionMenu';

export default function SysAwarenessCard({ data }) {
  return (
    <DefaultCard>
      <Stack spacing={4}>
        <Heading as="h3" size="lg" pb={8}>
          {data.title}
        </Heading>
        <Box>{/* <CustomAccordion accordionData={data.questions} /> */}</Box>
      </Stack>
    </DefaultCard>
  );
}
