

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

const MissionCard = () => {
  const stackDirection = useBreakpointValue({ base: 'column', xl: 'row' });
  const stackSpacing = useBreakpointValue({ base: 8, lg: 12, xl: 32 });

  const endpointUrl = 'http://localhost:1337/api/about-uses'; // Adjust the endpoint URL as necessary

  const [missionData, setMissionData] = useState(null);
  const attributeName = 'OurMission'; // Adjust the attribute name as necessary

  useEffect(() => {
    processStrapiData(endpointUrl, attributeName)
      .then((data) => {
        if (data) {
          setMissionData(data);
        } else {
          console.error('Failed to fetch mission data');
        }
      })
      .catch((error) => {
        console.error('There was a problem fetching the data:', error);
        // Handle the error state here
      });
  }, []);

  if (!missionData) {
    return <div>Loading...</div>; // You can customize the loading state as per your UI
  }

  return (
    <DefaultCard>
      <Stack direction={stackDirection} spacing={stackSpacing}>
        <Box flex={1} alignSelf={'center'}>
          <Heading as="h2" size="lg" paddingBottom={4}>
            {missionData.dataTitle}
          </Heading>
          <Text paddingBottom={4}>{missionData.dataDescription}</Text>
        </Box>
        {missionData.dataImage && (
          <Box flex={1} alignSelf={'center'}>
           
              <Box textAlign="center" mb={2}>
                <Box display="flex" justifyContent="center">
                  <Image
                    src={missionData.dataImage} // Set the image URL here
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
      </Stack>
    </DefaultCard>
  );
};

export default MissionCard;
