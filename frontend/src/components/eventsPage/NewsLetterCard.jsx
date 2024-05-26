import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const NewsletterCard = ({ image }) => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image src={image} alt="Newsletter" borderRadius="md" />
    </Box>
  );
};

export default NewsletterCard;
