// import { Stack, Heading, Box, useBreakpointValue, Text, Image } from '@chakra-ui/react';
// import { DefaultCard } from '../DefaultComponents';



// const OurStoryCard = ({ ourStoryData }) => {
//     const stackDirection = useBreakpointValue({ base: 'column', xl: 'row' });
//     const stackSpacing = useBreakpointValue({ base: 8, lg: 12, xl: 32 });

//     return (
//         <DefaultCard>
//             <Stack direction={stackDirection} spacing={stackSpacing}>
//                 <Box flex={1} alignSelf={'center'}>
//                     <Box as="section" bg="gray.100" py={4} borderRadius="lg" m='2rem'>
//                         <Box textAlign="center" mb={2}>
//                             <Box display="flex" justifyContent="center">
//                                 <Image
//                                     src="https://via.placeholder.com/1000x500"
//                                     alt="test image"
//                                     fit="cover"
//                                     maxW="100%"
//                                     height="auto"
//                                 />
//                             </Box>
//                         </Box>
//                     </Box>
//                 </Box>
//                 <Box flex={1} alignSelf={'center'}>
//                     <Heading as="h2" size="lg" paddingBottom={4}>
//                         {ourStoryData.title}
//                     </Heading>
//                     {ourStoryData.description.map((line, index) => (
//                         <Text key={`line${index}`} paddingBottom={4}>
//                             {line}
//                         </Text>
//                     ))}
//                 </Box>

//             </Stack>
//         </DefaultCard>
//     );
// };

// export default OurStoryCard;




import { Stack, Heading, Box, useBreakpointValue, Text, Image } from '@chakra-ui/react';
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
            .then(data => {
                if (data) {
                    setOurStoryData(data);
                } else {
                    console.error('Failed to fetch Our Story data');
                }
            })
            .catch(error => {
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
                <Box flex={1} alignSelf={'center'}>
                    <Heading as="h2" size="lg" paddingBottom={4}>
                        {ourStoryData.dataTitle}
                    </Heading>
                    <Text paddingBottom={4}>
                        {ourStoryData.dataDescription}
                    </Text>
                </Box>
                {ourStoryData.dataImage && (
                    <Box flex={1} alignSelf={'center'}>
                        <Box as="section" bg="gray.100" py={4} borderRadius="lg" m="2rem">
                            <Box textAlign="center" mb={2}>
                                <Box display="flex" justifyContent="center">
                                    <Image
                                        src={ourStoryData.dataImage} // Set the image URL here
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
                )}
            </Stack>
        </DefaultCard>
    );
};

export default OurStoryCard;

