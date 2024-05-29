import { DefaultCard } from '../DefaultComponents';
import Carousel from '../Carousel';

import { Stack, Heading } from '@chakra-ui/react';

export default function SysSponsorsCard({ data }) {
  return (
    <DefaultCard>
      <Stack spacing={4}>
        <Heading as="h2" size="lg">
          {data.Title}
        </Heading>
        <Carousel sponsors={data.Sponsor} />
      </Stack>
    </DefaultCard>
  );
}
