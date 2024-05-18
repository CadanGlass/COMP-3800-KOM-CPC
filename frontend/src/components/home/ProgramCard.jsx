import {
  Card,
  CardBody,
  Heading,
  Stack,
  Button,
  Image,
  Text,
  AspectRatio,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import LearnMoreButton from '../buttons/LearnMoreButton';

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
          <Link href="/programs">
            <LearnMoreButton>Learn More →</LearnMoreButton>
          </Link>
        </Stack>
      </CardBody>
    </Card>
  );
};
