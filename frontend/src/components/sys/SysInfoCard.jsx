import { Stack, useBreakpointValue } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
import SubtextCardWithIcon from '../SubtextCardWithIcon';

export default function SysInfoCard({ data }) {
  const subPoints = data.subPoints;
  return (
    <DefaultCard>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={useBreakpointValue({ base: 8, md: 12, '2xl': 32 })}
        pt={8}
        pb={4}
      >
        {subPoints.map((subtextData, index) => {
          return (
            <Stack
              direction="column"
              key={`subtext${index}`}
              spacing={{ base: 2, md: 4 }}
              flex={1}
            >
              <SubtextCardWithIcon
                subtextData={subtextData}
                spacing={{ base: 4, md: 8 }}
              />
            </Stack>
          );
        })}
      </Stack>
    </DefaultCard>
  );
}
