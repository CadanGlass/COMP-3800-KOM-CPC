// import { Stack, Heading, Box, useBreakpointValue, Text, Image } from '@chakra-ui/react';
// import { DefaultCard } from '../DefaultComponents';

// import missionImage from '../../assets/mission_pic.jpg';
// import { m } from 'framer-motion';

// const MissionCard = ({ missionData }) => {
//     const stackDirection = useBreakpointValue({ base: 'column', xl: 'row' });
//     const stackSpacing = useBreakpointValue({ base: 8, lg: 12, xl: 32 });

//     return (
//         <DefaultCard>
//             <Stack direction={stackDirection} spacing={stackSpacing}>
//                 <Box flex={1} alignSelf={'center'}>
//                     <Heading as="h2" size="lg" paddingBottom={4}>
//                         {missionData.title}
//                     </Heading>
//                     {missionData.description.map((line, index) => (
//                         <Text key={`line${index}`} paddingBottom={4}>
//                             {line}
//                         </Text>
//                     ))}
//                 </Box>
//                 <Box flex={1} alignSelf={'center'}>
//                     <Box as="section" bg="gray.100" py={4} borderRadius="lg" m='2rem'>
//                         <Box textAlign="center" mb={2}>
//                             <Box display="flex" justifyContent="center">
//                                 <Image
                                    
//                                     src={missionImage}
//                                     alt="test image"
//                                     fit="cover"
//                                     maxW="100%"
//                                     height="auto"
//                                 />
//                             </Box>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Stack>
//         </DefaultCard>
//     );
// };

// export default MissionCard;



import React, { useState, useEffect } from 'react';
import { Stack, Heading, Box, useBreakpointValue, Text, Image } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';
// import missionImage from '../../assets/mission_pic.jpg';

const MissionCard = () => {
    const [missionData, setMissionData] = useState(null);
    const stackDirection = useBreakpointValue({ base: 'column', xl: 'row' });
    const stackSpacing = useBreakpointValue({ base: 8, lg: 12, xl: 32 });

    useEffect(() => {
        fetch('http://localhost:1337/api/about-uses')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Check if data array exists and has at least one item
                if (!data || !data.data || data.data.length === 0) {
                    throw new Error('No data found');
                }

                // Extract the first item from the data array
                const firstItem = data.data[0];

                // Check if OurMission exists within the first item's attributes
                if (!firstItem || !firstItem.attributes || !firstItem.attributes.OurMission) {
                    throw new Error('OurMission data not found');
                }

                // Set missionData to the OurMission object
                setMissionData(firstItem.attributes.OurMission);
            })
            .catch(error => {
                console.error('There was a problem fetching the data:', error);
                // Handle the error state here
            });
    }, []);

    if (!missionData) {
        return <div>Loading...</div>; // You can customize the loading state as per your UI
    }


    // Log the missionData object to see its structure
console.log('Mission Data:', missionData);


// Base url for Strapi images
const baseUrl = 'http://localhost:1337';

// Access the image URL from missionData
const imageUrl = missionData.Image.data.attributes.url;

// Combine the base URL and image URL to get the full image URL
const missionImage = `${baseUrl}${imageUrl}`;

console.log('Mission Title:', missionData.Title);
console.log('Mission Strapi Image URL:', imageUrl);


    return (
        <DefaultCard>
            <Stack direction={stackDirection} spacing={stackSpacing}>
                <Box flex={1} alignSelf={'center'}>
                    <Heading as="h2" size="lg" paddingBottom={4}>
                        {missionData.Title}
                    </Heading>
                    <Text paddingBottom={4}>
                        {missionData.Description}
                    </Text>
                </Box>
                <Box flex={1} alignSelf={'center'}>
                    <Box as="section" bg="gray.100" py={4} borderRadius="lg" m="2rem">
                        <Box textAlign="center" mb={2}>
                            <Box display="flex" justifyContent="center">
                                <Image
                                    src={missionImage} // Set the image URL here
                                    alt="Mission Image"
                                    fit="cover"
                                    maxW="100%"
                                    height="auto"
                                    onError={(e) => console.error('Image loading error:', e)} // Log any image loading errors
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </DefaultCard>
    );
};

export default MissionCard;
