// import {
//   Stack,
//   Heading,
//   Box,
//   useBreakpointValue,
//   Text,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
// } from '@chakra-ui/react';

// import { DefaultCard } from '../DefaultComponents';

// const CPCCard = ({ CPCData }) => {
//   const isMobile = useBreakpointValue({ base: true, lg: false });

//   return (
//     <DefaultCard>
//       <Stack spacing={4}>
//         <Heading as="h2" size="lg">
//           {CPCData.title}
//         </Heading>
//         <Text>
//           {CPCData.description.map((line, index) => (
//             <span key={`line${index}`}>
//               {line}
//               {index !== CPCData.description.length - 1 && <br />}
//             </span>
//           ))}
//         </Text>
//         <Box overflowX="auto">
//           <Table variant="simple" minWidth="100%">
//             <Thead>
//               <Tr>
//                 <Th>Name</Th>
//                 <Th>Phone</Th>
//                 <Th>Email</Th>
//               </Tr>
//             </Thead>
//             <Tbody>
//               {CPCData.ContactData.map((contact, index) => (
//                 <Tr key={index} borderBottom="2px solid" borderColor="gray.500">
//                   <Td>
//                     <a
//                       href={contact.website}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {contact.name}
//                     </a>
//                   </Td>
//                   <Td>
//                     {isMobile ? (
//                       contact.phone
//                     ) : (
//                       <a href={`tel:${contact.phone}`}>{contact.phone}</a>
//                     )}
//                   </Td>
//                   <Td>
//                     {isMobile ? (
//                       <a href={`mailto:${contact.email}`}>{contact.email}</a>
//                     ) : (
//                       <a href={`mailto:${contact.email}`}>{contact.email}</a>
//                     )}
//                   </Td>
//                 </Tr>
//               ))}
//             </Tbody>
//           </Table>
//         </Box>
//       </Stack>
//     </DefaultCard>
//   );
// };

// export default CPCCard;



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
import { processStrapiDataList } from './strapiUtils'; // Adjust the path as necessary

const CPCCard = () => {
  const stackDirection = useBreakpointValue({ base: 'column', xl: 'row' });
  const stackSpacing = useBreakpointValue({ base: 8, lg: 12, xl: 32 });

  const endpointUrl = 'http://localhost:1337/api/about-uses'; // Adjust the endpoint URL as necessary

  const [CPCData, setCPCData] = useState(null);

  const attributeName = 'CPCTitleDescription'; // Adjust the attribute name as necessary


  useEffect(() => {
    processStrapiDataList(endpointUrl, attributeName)
      .then((data) => {
        if (data) {
          setCPCData(data);
        } else {
          console.error('Failed to fetch mission data');
        }
      })
      .catch((error) => {
        console.error('There was a problem fetching the data:', error);
        // Handle the error state here
      });


  }, []);

  if (!CPCData) {
    return <div>Loading...</div>; // You can customize the loading state as per your UI
  }

  return (
    <DefaultCard>
      <Stack direction={stackDirection} spacing={stackSpacing}>
        <Box flex={1} alignSelf={'center'}>
          <Heading as="h2" size="lg" paddingBottom={4}>
            {CPCData.dataTitle}
          </Heading>
          <Text paddingBottom={4}>{CPCData.dataDescription}</Text>
        </Box>
        {CPCData.dataImage && (
          <Box flex={1} alignSelf={'center'}>
           
              <Box textAlign="center" mb={2}>
                <Box display="flex" justifyContent="center">
                  <Image
                    src={CPCData.dataImage} // Set the image URL here
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

export default CPCCard;
