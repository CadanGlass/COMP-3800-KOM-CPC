import {
  Stack,
  Heading,
  Box,
  useBreakpointValue,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';

import { DefaultCard } from '../DefaultComponents';

const CPCCard = ({ CPCData }) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <DefaultCard>
      <Stack spacing={4}>
        <Heading as="h2" size="lg">
          {CPCData.title}
        </Heading>
        <Text>
          {CPCData.description.map((line, index) => (
            <span key={`line${index}`}>
              {line}
              {index !== CPCData.description.length - 1 && <br />}
            </span>
          ))}
        </Text>
        <Box overflowX="auto">
          <Table variant="simple" minWidth="100%">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Phone</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {CPCData.ContactData.map((contact, index) => (
                <Tr key={index} borderBottom="2px solid" borderColor="gray.500">
                  <Td>
                    <a
                      href={contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.name}
                    </a>
                  </Td>
                  <Td>
                    {isMobile ? (
                      contact.phone
                    ) : (
                      <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                    )}
                  </Td>
                  <Td>
                    {isMobile ? (
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    ) : (
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </DefaultCard>
  );
};

export default CPCCard;
