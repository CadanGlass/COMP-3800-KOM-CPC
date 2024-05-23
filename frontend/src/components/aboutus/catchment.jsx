// import { DefaultCard } from '../DefaultComponents';
// import {
//   Box,
//   Stack,
//   useBreakpointValue,
//   Heading,
//   Text,
//   VStack,
//   AspectRatio,
// } from '@chakra-ui/react';

// const CatchmentCard = ({ catchmentData }) => {
//   const stackSpacing = useBreakpointValue({ base: 8, md: 12, '2xl': 32 });
//   const mapWidth = useBreakpointValue({ base: '100%', md: '65%' });
//   const textWidth = useBreakpointValue({ base: '100%', md: '35%' });

//   return (
//     <DefaultCard
//       backgroundColor="none"
//       internalPaddingX={useBreakpointValue({ base: 4, md: 24, xl: 48 })}
//     >
//       <VStack spacing={8}>
//         <Heading as="h3" size="lg" textAlign="center">
//           {catchmentData.title}
//         </Heading>
//         {catchmentData.description.map((line, index) => (
//           <Text key={`line${index}`} fontSize="lg" textAlign="center">
//             {line}
//           </Text>
//         ))}
//         <Stack
//           direction={{ base: 'column', md: 'row' }}
//           spacing={stackSpacing}
//           align="center"
//           width="100%"
//         >
//           <Box flex="1" width={mapWidth}>
//             <AspectRatio ratio={16 / 9} width="100%">
//               <iframe
//                 src="https://www.google.com/maps/d/embed?mid=14EQlSHq7tJJVlNIn_Sb3Y9PbVWk&ehbc=2E312F"
//                 title="Border Map"
//                 loading="lazy"
//                 allowFullScreen
//               />
//             </AspectRatio>
//           </Box>
//           <Box
//             flex="1"
//             width={textWidth}
//             textAlign={{ base: 'center', md: 'left' }}
//           >
//             <Heading as="h4" size="md" mb={4}>
//               Areas Included
//             </Heading>
//             <Text as="ul" listStyleType="disc" paddingLeft={4}>
//               {catchmentData.areas.map((area, index) => (
//                 <li key={`area${index}`}>{area}</li>
//               ))}
//             </Text>
//           </Box>
//         </Stack>
//       </VStack>
//     </DefaultCard>
//   );
// };

// export default CatchmentCard;



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
