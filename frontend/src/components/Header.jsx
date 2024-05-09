import {
  Container,
  Image,
  Heading,
  Text,
  Stack,
  AspectRatio,
  Button,
  VStack,
} from '@chakra-ui/react';

export default function Header({
  title,
  description = '',
  btn1 = '',
  btn2 = '',
  imageUrl,
}) {
  return (
    <Container maxW='100%' bg='gray.50' borderRadius='lg' p={8}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 12, md: 16 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading fontWeight={700} fontSize={{ base: '3xl', sm: '4xl' }}>
            {title}
          </Heading>
          {description && <Text color={'gray.600'}>{description}</Text>}

          {btn1 && (
            <VStack spacing='4' align={{ sm: 'start' }}>
              <Button bg={'red.600'} color={'white'}>
                {btn1}
              </Button>
              {btn2 && (
                <Button bg={'red.600'} color={'white'}>
                  {btn2}
                </Button>
              )}
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
    </Container>
  );
}
