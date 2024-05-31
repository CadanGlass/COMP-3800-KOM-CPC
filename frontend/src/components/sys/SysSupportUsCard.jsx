import { Heading, Stack, VStack } from '@chakra-ui/react';
import { DefaultBlocksRenderer, DefaultCard } from '../DefaultComponents';
import { RainbowButton } from '../buttons/SysButton';

export default function SysSupportUsCard({ data }) {
  const supportUsBtn = (data) => {
    return RainbowButton({
      label: data.ButtonLabel,
      ...(data.Link
        ? { link: data.Link }
        : {
            click: () => {
              document.getElementById('sys-info-card')?.scrollIntoView();
            },
          }),
      key: data.id,
    });
  };

  return (
    <DefaultCard>
      <VStack spacing={4} align="left">
        <Heading size="lg">{data.Title}</Heading>
        {(data?.Description.length > 1 ||
          data?.Description[0]?.children[0].text) && (
          <DefaultBlocksRenderer content={data.Description} />
        )}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 8 }}
          justify="center"
        >
          {data.Buttons.map((btn) => {
            return supportUsBtn(btn);
          })}
        </Stack>
      </VStack>
    </DefaultCard>
  );
}
