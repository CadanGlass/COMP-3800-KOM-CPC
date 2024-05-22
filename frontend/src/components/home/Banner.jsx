import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  AspectRatio,
} from '@chakra-ui/react';

const Banner = ({ data }) => (
  <VStack justify="center">
    <AspectRatio ratio={3 / 1} w={'100%'}>
      <Image
        src={data.url}
        alt={data.alternativeText}
        fit="cover"
        width="full"
        height="full"
        rounded={'lg'}
      />
    </AspectRatio>
    <Heading as="h1" size="2xl" paddingTop={8} textAlign={'center'}>
      {'Welcome to the KOM CPC'}
    </Heading>

    <Text fontSize={'2xl'} textAlign={'center'}>
      Kerrisdale Oakridge Marpole Community Policing Centre
    </Text>
  </VStack>
);

export default Banner;
