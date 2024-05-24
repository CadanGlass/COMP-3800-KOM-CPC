import {
  Stack,
  Heading,
  Box,
  useBreakpointValue,
  Text,
  Image,
} from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

import { useState, useEffect } from 'react';
import { processStrapiData } from './strapiUtils'; // Adjust the path as necessary

const OurStoryCard = () => {
  const stackDirection = useBreakpointValue({ base: 'column', xl: 'row' });
  const stackSpacing = useBreakpointValue({ base: 8, lg: 12, xl: 32 });

  const endpointUrl = 'http://localhost:1337/api/about-uses'; // Adjust the endpoint URL as necessary

  const [ourStoryData, setOurStoryData] = useState(null);
  const attributeName = 'OurStory'; // Adjust the attribute name as necessary

  useEffect(() => {
    processStrapiData(endpointUrl, attributeName)
      .then((data) => {
        if (data) {
          setOurStoryData(data);
        } else {
          console.error('Failed to fetch Our Story data');
        }
      })
      .catch((error) => {
        console.error('There was a problem fetching the data:', error);
        // Handle the error state here
      });
  }, []);

  if (!ourStoryData) {
    return <div>Loading...</div>; // You can customize the loading state as per your UI
  }

  return (
    <DefaultCard>
      <Stack direction={stackDirection} spacing={stackSpacing}>
        {ourStoryData.dataImage && (
          <Box flex={1} alignSelf={'center'}>
              <Box textAlign="center" mb={2}>
                <Box display="flex" justifyContent="center">
                  <Image
                    src={ourStoryData.dataImage} // Set the image URL here
                    alt="Mission Image"
                    fit="cover"
                    maxW="100%"
                    height="auto"
                    borderRadius={8}
                    onError={(e) => console.error('Image loading error:', e)} // Log any image loading errors
                  />
                </Box>
              </Box>
          </Box>
        )}
        <Box flex={1} alignSelf={'center'}>
          <Heading as="h2" size="lg" paddingBottom={4}>
            {ourStoryData.dataTitle}
          </Heading>
          <Text paddingBottom={4}>{ourStoryData.dataDescription}</Text>
        </Box>
      </Stack>
    </DefaultCard>
  );
};

export default OurStoryCard;
