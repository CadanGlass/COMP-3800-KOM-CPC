import React from 'react';
import {
  Card,
  Heading,
  Stack,
  Image,
  AspectRatio,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

export default function PartnerCard({ data }) {
  const cardBg = useColorModeValue('#ffffff', '#1A202C');
  const textColor = useColorModeValue('gray.800', 'white');
  return (
    <Link href={data.url} isExternal>
      <Card
        direction={'column'}
        overflow="hidden"
        variant="outline"
        align="center"
        p={4}
        w="200px"
        h="250px"
        justifyContent="center"
        boxShadow="lg"
        borderRadius="lg"
        transition="transform 0.3s, box-shadow 0.3s"
        _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
        bg={cardBg}
        display="grid"
        gridTemplateRows="2fr 1fr"
      >
        {data && (
          <AspectRatio
            ratio={1}
            w="100px"
            h="100px"
            gridRow={1}
            placeSelf="center"
          >
            <Image
              objectFit="cover"
              src={data.logo}
              alt={data.alternativeText}
            />
          </AspectRatio>
        )}
        <Heading size="sm" textAlign="center" color={textColor} gridRow={2}>
          {data.name}
        </Heading>
      </Card>
    </Link>
  );
}
