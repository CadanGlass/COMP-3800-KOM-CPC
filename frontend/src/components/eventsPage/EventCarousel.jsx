import React, { useEffect, useState } from 'react';
import './EmblaEvents.css'; // Import the unique CSS file
import { Box, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import useEmblaCarousel from 'embla-carousel-react';
import EventCard from './EventCard';

const EventsCarousel = ({ events }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // Disable loop for debugging
    align: 'center',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      console.log('Scroll to previous event');
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      console.log('Scroll to next event');
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Ensure we update state on initial load

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  useEffect(() => {
    console.log('Embla API initialized:', emblaApi);
    console.log('Events data:', events);
  }, [emblaApi, events]);

  return (
    <Box className="embla-events">
      <Box className="embla-events__viewport" ref={emblaRef}>
        <Box className="embla-events__container">
          {events.map((event, index) => (
            <Box className="embla-events__slide" key={index}>
              <EventCard event={event} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="embla-events__controls">
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={scrollPrev}
          aria-label="Previous event"
          isDisabled={!canScrollPrev} // Disable if can't scroll prev
        />
        <IconButton
          icon={<ArrowForwardIcon />}
          onClick={scrollNext}
          aria-label="Next event"
          isDisabled={!canScrollNext} // Disable if can't scroll next
        />
      </Box>
    </Box>
  );
};

export default EventsCarousel;
