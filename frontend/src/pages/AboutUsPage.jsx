
import { Box,
        Container, 
        Heading, 
        Text,  
        Image, 
        Center, 
        Stack,
        Table, 
        Thead, 
        Tbody, 
        Tr, 
        Th, 
        Td } from "@chakra-ui/react";


import komPartnersImage from "../assets/kom_partners_in_safety_.png";

//----------------------------------------------


//----------------------------------------------

const MissionStatement = () => {
  return (
    <Box as="section" bg="gray.100" py={12} px={6} borderRadius="lg" mb={8} m='2rem'>
      <Container>
      {/* <Container maxW="container.md"> */}
        <Heading as="h2" fontSize={{ base: "2xl", sm: "3xl" }} mb={4}>Mission Statement</Heading>
        <Text mb={8}>
          The KOM CPC mobilizes the efforts of volunteers, community members and the Vancouver Police Department to promote safety, justice and understanding in accordance with Vancouver’s Community Policing mandate.
          <br />
          <br />The KOM CPC provides community policing services, such as patrols, event support and information in partnership with the Vancouver Police Department, the City of Vancouver and other area organizations. Our range of initiatives can be viewed on the Programs page.
          <br />
          <br />As part of Patrol District Four, the KOM CPC’s jurisdiction is nearly 40% of Vancouver’s landmass, encompassing the majority of Vancouver’s west side communities including:
          <ul style={{ paddingLeft: "20px" }}>
            <li>Arbutus Ridge (South)</li>
            <li>Dunbar – Southlands</li>
            <li>Hillcrest – Riley Park</li>
            <li>Kerrisdale</li>
            <li>Oakridge</li>
            <li>Marpole</li>
            <li>Shaughnessy</li>
            <li>South Cambie</li>
          </ul>
          <br />The Kerrisdale Oakridge Marpole Community Policing Centre is a registered non-profit society overseen by a board, and staffed by an Executive Director and a Volunteer Coordinator.
          <br />
        </Text>
      </Container>


      <Container maxW="container.md">
        <Box textAlign="center" mb={20}>
          {/* Border Map of KOM CPC area */}
          <Box display="flex" justifyContent="center">
            <iframe src="https://www.google.com/maps/d/embed?mid=14EQlSHq7tJJVlNIn_Sb3Y9PbVWk&ehbc=2E312F" width="640" height="480" title="Border Map" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const OurStory = () => {
  return (
    <Box as="section" bg="gray.100" py={12} px={6} borderRadius="lg" mb={8} m='2rem' >
      <Container maxW="container.md">
        <Heading as="h2" fontSize={{ base: "2xl", sm: "3xl" }} mb={4}>Our Story</Heading>
        <Text mb={8}>
          The KOM CPC traces its roots to the late 1980’s, when the area surrounding Oakridge Centre experienced increased criminal activity. The closure of the neighbourhood’s policing sub-station removed a visible police presence, further concerning residents.
          <br />
          <br />Citizens eventually created a focus group at the Oakridge Senior’s Centre, with the goal of improving area safety and crime awareness.
          <br />
          <br />At the same time, the Marpole Oakridge Area Council Society (MOACS) sought a location for its members to access crime prevention information.
          <br />
          <br />Sensing an opportunity for collaboration, the Vancouver Police Department advised both organizations to work together, and assigned a full-time constable to the area. Office space on 5655 Cambie Street was donated by Dr. Chun Gunn, and furnishings were donated by volunteers and the VPD.
          <br />
          <br />On July 5th, 1999, the Marpole Oakridge Community Policing Centre opened its doors and became a part of Vancouver’s community policing system. It’s initial jurisdictions of Marpole and Oakridge would soon expand, adding Kerrisdale and Dunbar in 2001, becoming the KOM CPC. The office’s location would move shortly afterward, for a geographically central location.
          <br />
        </Text>
      </Container>
    </Box>
  );
};


// const BorderMap = () => {
//   return (
//     <Box as="section" bg="gray.100" py={24}  borderRadius="lg"  m='2rem' >
//       <Container maxW="container.md">
//         <Box textAlign="center" mb={20}>
//           {/* Border Map of KOM CPC area */}
//           <Box display="flex" justifyContent="center">
//             <iframe src="https://www.google.com/maps/d/embed?mid=14EQlSHq7tJJVlNIn_Sb3Y9PbVWk&ehbc=2E312F" width="640" height="480" title="Border Map" />
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

const PartnersInSafety = () => {
  return (
    <Box as="section" bg="gray.100" py={24}  borderRadius="lg"  m='2rem' >
      <Container maxW="container.md">
        <Box textAlign="center" mb={20}>
          <Heading as="h1" fontSize={{ base: "2xl", sm: "3xl" }} mb={4}>Our Partners In Safety</Heading>
          <Text mb={8}>
            The KOM CPC partners with many Vancouver-area and British Columbia agencies to promote safety awareness and crime-prevention activities. As a non-profit organization, our operation is reliant on funding and grants from many public and private sources.
            <br />
            <br />
            <center>
             
                  <Box bg="gray.200" position="absolute" top={0} left={0} right={0} bottom={0} zIndex={-1} borderRadius="lg" />
              <Image src={komPartnersImage} alt="partner logos" borderRadius="lg" />
             
            </center>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};


const CommunityPolicingCentres = () => {
  return (
    <Box as="section" bg="gray.100" py={24}  borderRadius="lg" m='2rem'  >
      <Container maxW="container.md" >
        <Box textAlign="center" mb={20}>
          <Heading as="h1" fontSize={{ base: "2xl", sm: "3xl" }} mb={4}>Vancouver Community Policing Centres</Heading>
          <Text mb={8}>
            The KOM CPC is one of 11 Vancouver community policing centres. Together, we strive to positively connect our communities to the VPD, reduce crime and build safe, welcoming communities for our residents.
            <br />
            <br />
            Below is the information for KOM Policing Centres:
          </Text>
          <Center>
            <Box overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Th>Policing Centre</Th>
                  <Th>Contact</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Td><a href="https://www.vacpc.org/" target="_blank" rel="noopener noreferrer">Aboriginal CPC</a></Td>
                  <Td><a href="tel:604-678-3790">604-678-3790</a> | <a href="mailto:info@vacpc.org">info@vacpc.org</a></Td>
                </Tr>
                 <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Td><a href="https://www.chinesecpc.com/" target="_blank" rel="noopener noreferrer">Chinese CPC</a></Td>
                  <Td><a href="tel:604-688-5030">604-688-5030</a> | <a href="mailto:info@chinesecpc.com">info@chinesecpc.com</a></Td>
                </Tr>
                 <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Td><a href="https://www.collingwoodcpc.com/" target="_blank" rel="noopener noreferrer">Collingwood CPC</a></Td>
                  <Td><a href="tel:604-717-2935">604-717-2935</a> | <a href="mailto:info@collingwoodcpc.com">info@collingwoodcpc.com</a></Td>
                </Tr>
                 <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Td><a href="https://www.gwcpc.ca/" target="_blank" rel="noopener noreferrer">Grandview-Woodland CPC</a></Td>
                  <Td><a href="tel:604-717-2932">604-717-2932</a> | <a href="mailto:info@gwcpc.ca">info@gwcpc.ca</a></Td>
                </Tr>
                <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Td><a href="https://www.granvillecpc.ca/" target="_blank" rel="noopener noreferrer">Granville Downtown South CPC</a></Td>
                  <Td><a href="tel:604-717-2920">604-717-2920</a> | <a href="mailto:office@granvillecpc.ca">office@granvillecpc.ca</a></Td>
                </Tr>
                 <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Td><a href="https://www.hscpc.com/" target="_blank" rel="noopener noreferrer">Hastings – Sunrise CPC</a></Td>
                  <Td><a href="tel:604-678-3790">604-678-3790</a> | <a href="mailto:info@hscpc.com">info@hscpc.com</a></Td>
                </Tr>
                 <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Td><a href="https://www.kitsfaircpc.ca/" target="_blank" rel="noopener noreferrer">Kitsilano Fairview CPC</a></Td>
                  <Td><a href="tel:604-717-4023">604-717-4023</a> | <a href="mailto:kitsfaircpc@gmail.com">kitsfaircpc@gmail.com</a></Td>
                </Tr>
                 <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Td><a href="https://https://mpcpc.ca/" target="_blank" rel="noopener noreferrer">Mount Pleasant CPC</a></Td>
                  <Td><a href="tel:604-717-0684">604-717-0684</a> | <a href="mailto:info@mpcpc.ca">info@mpcpc.ca</a></Td>
                </Tr>
                 <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Td><a href="https://www.svcpc.com/" target="_blank" rel="noopener noreferrer">South Vancouver CPC</a></Td>
                  <Td><a href="tel:604-717-2940">604-717-2940</a> | <a href="mailto:beata.fischer@svcpc.com">beata.fischer@svcpc.com</a></Td>
                </Tr>
                 <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Td><a href="https://www.strathconacpc.ca/" target="_blank" rel="noopener noreferrer">Strathcona CPC</a></Td>
                  <Td><a href="tel:604-717-0622">604-717-0622</a> | <a href="mailto:info@strathconacpc.ca">info@strathconacpc.ca</a></Td>
                </Tr>
                <Tr borderBottom="2px solid" borderColor="gray.500">
                  <Td><a href="https://www.wechcpc.com/" target="_blank" rel="noopener noreferrer">West End – Coal Harbour CPC</a></Td>
                  <Td><a href="tel:604-717-2924">604-717-2924</a> | <a href="mailto:info@wechcpc.com">info@wechcpc.com</a></Td>
                </Tr>

              </Tbody>
            </Table>
            </Box>
          </Center>
        </Box>
      </Container>
    </Box>
  );
};



const AboutPage = () => {
  return (
    <Box bg='white'>
    <Stack spacing={8} p={8}>
      <MissionStatement />
      <OurStory />
      <PartnersInSafety />
      <CommunityPolicingCentres />
   </Stack>
    </Box>
  );
};

export default AboutPage;
