import { Heading, Stack, Button, Link, SimpleGrid } from '@chakra-ui/react';

import { DefaultCard } from '../DefaultComponents';
import EventCard from './EventCard';

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
    date: 'NOV 1',
    name: 'Bike Safety',
    price: 'Free',
    time: '10:00',
  },
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
            <Link href="/events">
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
              <EventCard
                key={index}
                name={event.name}
                date={event.date}
                time={event.time}
                price={event.price}
              />
            ))}
          </SimpleGrid>
        </Stack>
      </DefaultCard>
    </>
  );
}
