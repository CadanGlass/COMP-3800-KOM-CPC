import {
  Heading,
  Stack,
  Button,
  Link,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';

import { DefaultCard } from '../DefaultComponents';
import EventCard from '../eventsPage/EventCard';

const events = [
  { date: 'OCT 24', name: 'Speed Control', price: 'Free', time: '10:00' },
  {
    date: 'OCT 27',
    name: 'Community Outreach',
    price: '$12.99',
    time: '16:00',
  },
  {
    date: 'OCT 30',
    name: 'Networking with VPD',
    price: 'Free',
    time: '18:00',
  },
  {
    date: 'NOV 02',
    name: 'Self Defense Workshop',
    price: '$9.99',
    time: '14:00',
  },
  {
    date: 'NOV 05',
    name: 'Neighborhood Watch Training',
    price: 'Free',
    time: '10:00',
  },
  {
    date: 'NOV 10',
    name: 'Fire Safety Seminar',
    price: '$5.00',
    time: '13:00',
  },
  { date: 'NOV 15', name: 'CPR Training', price: '$15.00', time: '09:00' },
];

const firstThreeEvents = events.slice(0, 3);

export default function Events() {
  return (
    <>
      <DefaultCard>
        <Stack spacing={8}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            justify={'space-between'}
            align={'start'}
            spacing={8}
          >
            <Heading as="h3" size="lg">
              Upcoming Events
            </Heading>
            <Link href="/news-events">
              <Button
                bg="blue.500"
                color="white"
                _hover={{ color: 'gray.600', bg: 'blue.200' }}
              >
                View All Events
              </Button>
            </Link>
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {firstThreeEvents.map((event, index) => (
              <Box mb={4} key={index}>
                <EventCard event={event} />
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </DefaultCard>
    </>
  );
}
