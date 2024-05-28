import { DefaultCard } from '../DefaultComponents';
import PartnersCarousel from '../howCanIHelp/PartnersCarousel';

import { Stack, Heading } from '@chakra-ui/react';

export default function SysSponsorsCard({ data }) {
  return (
    <DefaultCard>
      <Stack spacing={4}>
        <Heading as="h3" size="lg" pb={8}>
          {data.Title}
        </Heading>
        <PartnersCarousel sponsors={data.Sponsor} />
      </Stack>
    </DefaultCard>
  );
}
