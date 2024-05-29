import { VStack, Heading } from '@chakra-ui/react';
import { DefaultBlocksRenderer, DefaultCard } from '../DefaultComponents';

export default function TitleBlockDescription({ data, btn }) {
  return (
    <DefaultCard>
      <VStack spacing={4} align={'left'}>
        <Heading as="h2" size="lg">
          {data.Title}
        </Heading>
        <DefaultBlocksRenderer content={data.Description} />
        {btn && btn}
      </VStack>
    </DefaultCard>
  );
}
