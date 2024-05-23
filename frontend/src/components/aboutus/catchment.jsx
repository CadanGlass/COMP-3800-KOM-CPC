

import { DefaultCard } from '../DefaultComponents';
import {
  Box,
  Stack,
  useBreakpointValue,
  Heading,
  Text,
  AspectRatio,
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';
import { processStrapiData } from './strapiUtils'; // Adjust the path as necessary


const CatchmentCard = () => {

  // const stackSpacing = useBreakpointValue({ base: 8, md: 12, '2xl': 32 });
  const mapWidth = useBreakpointValue({ base: '100%', md: '65%' });

  const stackDirection = useBreakpointValue({ base: 'column', xl: 'row' });
  const stackSpacing = useBreakpointValue({ base: 8, lg: 12, xl: 32 });

  const endpointUrl = 'http://localhost:1337/api/about-uses'; // Adjust the endpoint URL as necessary

  const [catchmentData, setCatchmentData] = useState(null);
  const attributeName = 'CatchmentArea'; // Adjust the attribute name as necessary


    useEffect(() => {
        processStrapiData(endpointUrl, attributeName)
            .then(data => {
                if (data) {
                    setCatchmentData(data);
                } else {
                    console.error('Failed to fetch catchment data');
                }
            })
            .catch(error => {
                console.error('There was a problem fetching the data:', error);
                // Handle the error state here
            });
    }, []);

    if (!catchmentData) {
        return <div>Loading...</div>; // You can customize the loading state as per your UI
    }

    return (
        <DefaultCard>
      <Stack direction={stackDirection} spacing={stackSpacing}>
        <Box flex={1} alignSelf={'center'}>
          <Heading as="h2" size="lg" paddingBottom={4}>
            {catchmentData.dataTitle}
          </Heading>
          <Text paddingBottom={4}>
            {catchmentData.dataDescription}
          </Text>
        </Box>
        <Box flex={1} alignSelf="center" width={mapWidth}>
          <AspectRatio ratio={16 / 9} width="100%">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=14EQlSHq7tJJVlNIn_Sb3Y9PbVWk&ehbc=2E312F"
              title="Border Map"
              loading="lazy"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Stack>
    </DefaultCard>
    );
};

export default CatchmentCard;
