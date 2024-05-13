import React, { useState } from 'react';
import { Box, Flex, Text, IconButton, Image, Collapse } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

const EventCard = ({ event, cardBg, textColor }) => {
  // State to manage whether the image is shown or not
  const [showImage, setShowImage] = useState(false);

  // Toggle the image visibility
  const toggleImage = () => setShowImage(!showImage);


  return (
    <Box
      bg={cardBg}
      p={4}
      rounded="md"
      shadow="md"
      w="full"
      _hover={{ shadow: "xl" }}
    >
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontWeight="bold" color={textColor}>
            {event.date}
          </Text>
          <Text fontSize="lg" fontWeight="bold" color={textColor}>
            {event.name}
          </Text>
          <Text color={textColor}>
            {event.price} · {event.time}
          </Text>
        </Box>
        <IconButton
          icon={showImage ? <ChevronDownIcon /> : <ChevronRightIcon />}
          aria-label="View Event"
          variant="ghost"
          colorScheme="gray"
          onClick={toggleImage}
        />
      </Flex>
      <Collapse in={showImage} animateOpacity>
        <Image
          src="https://d1jyxxz9imt9yb.cloudfront.net/medialib/4023/image/s768x1300/chimp_thumbnail.jpg"
          alt="Event Image"
          mt={4}
        />
      </Collapse>
    </Box>
  );
};

export default EventCard;
