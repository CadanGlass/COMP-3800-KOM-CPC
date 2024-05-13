import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Button,
  Text,
  Image,
  AspectRatio,
} from '@chakra-ui/react';

export default function EventCard({ name, date, time, price }) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
    >
      <AspectRatio ratio={3 / 4} minW={36}>
        <Image
          objectFit="cover"
          //   maxW={{ base: '100%', sm: '200px' }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />
      </AspectRatio>

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
