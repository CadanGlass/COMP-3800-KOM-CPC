import {
  Card,
  Heading,
  Stack,
  Button,
  Text,
  Image,
  AspectRatio,
} from '@chakra-ui/react';

export default function EventCard({ name, date, time, price, image }) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      {image && (
        <AspectRatio ratio={3 / 4} minW={36}>
          <Image objectFit="cover" src={image} alt="image" />
        </AspectRatio>
      )}

      <Stack p={4} spacing={4} align="start">
        <Heading size="md">{name}</Heading>

        <Text>
          {date} at {time}
        </Text>
        <Text>{price}</Text>

        <Button>Learn More</Button>
      </Stack>
    </Card>
  );
}
