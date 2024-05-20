import React from 'react';
import { Card, Heading, Stack, Image, AspectRatio } from '@chakra-ui/react';

export default function PartnerCard({ name, image }) {
  return (
    <Card
      direction={'column'}
      overflow="hidden"
      variant="outline"
      align="center"
      p={4}
      w="200px"
      h="250px"
      display="flex"
      justifyContent="center"
      boxShadow="lg"
      borderRadius="lg"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
      bg="#1A202C"
    >
      {image && (
        <AspectRatio ratio={1} w="100px" h="100px">
          <Image objectFit="cover" src={image} alt={name} />
        </AspectRatio>
      )}
      <Stack mt={4} align="center">
        <Heading size="sm" textAlign="center" color="white">
          {name}
        </Heading>
      </Stack>
    </Card>
  );
}
