import {
  Card,
  CardBody,
  Heading,
  Stack,
  Button,
  Image,
  Text,
  AspectRatio,
} from '@chakra-ui/react';

export const ProgramCard = ({ title, description, image, link }) => {
  return (
    <Card>
      <CardBody>
        <AspectRatio ratio={7 / 4}>
          <Image src={image} alt={title} objectFit='cover' />
        </AspectRatio>
        <Stack mt={4} spacing={4} align='start'>
          <Heading size='md'>{title}</Heading>
          <Text noOfLines={3}>{description}</Text>
          <Button to={link}>Learn More</Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
