import {
  Image,
  Heading,
  Text,
  Stack,
  AspectRatio,
  VStack,
} from '@chakra-ui/react';
import { DefaultCard } from './DefaultComponents';

export default function Header({ title, description, btn1, btn2, imageUrl }) {
  return (
    <DefaultCard>
      <Stack
        align={{ base: 'start', md: 'center' }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 4, md: 8 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading fontWeight={700} fontSize={{ base: '3xl', sm: '4xl' }}>
            {title}
          </Heading>
          {description && <Text>{description}</Text>}

          {btn1 && (
            <VStack spacing="4" align="start">
              {btn1}
              {btn2 && btn2}
            </VStack>
          )}
        </Stack>

        <AspectRatio flex={1} ratio={6 / 3} minW={{ base: '100%', md: 'auto' }}>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={imageUrl}
            fit={'cover'}
          />
        </AspectRatio>
      </Stack>
    </DefaultCard>
  );
}
