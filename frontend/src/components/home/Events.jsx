// import React from 'react';
// import {
//   Box,
//   VStack,
//   Heading,
//   useColorModeValue,
//   Stack,
//   SimpleGrid,
// } from '@chakra-ui/react';
// import EventCard from '../eventsPage/EventCard';
// import { DefaultCard } from '../DefaultComponents';
// import StyledButton from '../buttons/StyledButton';

// const Events = () => {
//   const cardBg = useColorModeValue('white', 'gray.700');
//   const textColor = useColorModeValue('gray.800', 'white');

//   const events = [
//     { date: 'OCT 24', name: 'Speed Control', price: 'Free', time: '10:00' },
//     {
//       date: 'OCT 27',
//       name: 'Community Outreach',
//       price: '$12.99',
//       time: '16:00',
//     },
//     {
//       date: 'OCT 30',
//       name: 'Networking with VPD',
//       price: 'Free',
//       time: '18:00',
//     },
//     {
//       date: 'NOV 02',
//       name: 'Self Defense Workshop',
//       price: '$9.99',
//       time: '14:00',
//     },
//     {
//       date: 'NOV 05',
//       name: 'Neighborhood Watch Training',
//       price: 'Free',
//       time: '10:00',
//     },
//     {
//       date: 'NOV 10',
//       name: 'Fire Safety Seminar',
//       price: '$5.00',
//       time: '13:00',
//     },
//     { date: 'NOV 15', name: 'CPR Training', price: '$15.00', time: '09:00' },
//   ];

//   return (
//     <DefaultCard>
//       <Stack spacing={8}>
//         <Stack
//           direction={{ base: 'column', sm: 'row' }}
//           justify={'space-between'}
//           align={'start'}
//           spacing={8}
//         >
//           <Heading as="h3" size="lg">
//             Upcoming Events
//           </Heading>
//           <StyledButton href="/news-events">View All Events</StyledButton>
//         </Stack>
//         <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
//           {events.slice(0, 3).map((event, index) => (
//             <Box key={index}>
//               <EventCard event={event} cardBg={cardBg} textColor={textColor} />
//             </Box>
//           ))}
//         </SimpleGrid>
//       </Stack>
//     </DefaultCard>
//   );
// };

// export default Events;

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Stack, SimpleGrid } from '@chakra-ui/react';

import EventCard from '../home/EventCard';
import { DefaultCard } from '../DefaultComponents';
import StyledButton from '../buttons/StyledButton';

const Events = () => {
  const [events, setEvents] = useState([]);
  // const cardBg = useColorModeValue('white', 'gray.700');
  // const textColor = useColorModeValue('gray.800', 'white');
  const baseURL = 'https://api.komcpc.com';

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${baseURL}/api/events?populate=eventImage`
        );
        if (response.data && response.data.data) {
          const eventsData = response.data.data.map((event) => {
            const eventImageUrl = event.attributes.eventImage?.data[0]
              ?.attributes?.url
              ? `${baseURL}${event.attributes.eventImage.data[0].attributes.url}`
              : '';

            const eventDate = event.attributes.dateAndTime
              ? new Date(event.attributes.dateAndTime).toLocaleDateString(
                  'en-US',
                  {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  }
                )
              : 'Date not available';

            const eventTime = event.attributes.dateAndTime
              ? new Date(event.attributes.dateAndTime).toLocaleTimeString(
                  'en-US',
                  {
                    hour: '2-digit',
                    minute: '2-digit',
                  }
                )
              : 'Time not available';

            return {
              id: event.id,
              date: eventDate,
              name: event.attributes.eventTitle,
              description: event.attributes.eventDescription,
              image: eventImageUrl,
              time: eventTime,
              price: event.attributes.price || 'Free',
            };
          });
          setEvents(eventsData);
        }
      } catch (error) {
        console.error('Error fetching events data', error);
      }
    };

    fetchEvents();
  }, [baseURL]);

  return (
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
          <StyledButton href="/news-events">View All Events</StyledButton>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {events.slice(0, 2).map((event) => (
            <Box key={event.id}>
              <EventCard
                name={event.name}
                date={event.date}
                time={event.time}
                price={event.price}
                image={event.image}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </DefaultCard>
  );
};

export default Events;
