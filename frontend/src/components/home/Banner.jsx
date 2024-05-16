import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  AspectRatio,
} from '@chakra-ui/react';

const Banner = () => (
  <VStack justify="center">
    <Image
      src="https://via.placeholder.com/1200x400"
      alt="Banner"
      fit="cover"
      width="full"
      height="full"
    />
    <Heading as="h1" size="2xl" paddingTop={8} textAlign={'center'}>
      {'Welcome to the KOM CPC'}
    </Heading>

    <Text fontSize={'2xl'} textAlign={'center'}>
      Kerrisdale Oakridge Marpole Community Policing Centre
    </Text>
  </VStack>
);

export default Banner;
