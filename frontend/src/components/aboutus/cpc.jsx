import { Stack, Heading, Box, useBreakpointValue, Text, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

const CPCCard = ({ CPCData }) => {
    const stackDirection = useBreakpointValue({ base: 'column', xl: 'row' });
    const stackSpacing = useBreakpointValue({ base: 8, lg: 12, xl: 32 });

    return (
        <DefaultCard>
            <Stack direction={stackDirection} spacing={stackSpacing}>
                <Box flex={1} alignSelf={'center'}>
                    <Heading as="h2" size="lg" paddingBottom={4}>
                        {CPCData.title}
                    </Heading>
                    {CPCData.description.map((line, index) => (
                        <Text key={`line${index}`} paddingBottom={4}>
                            {line}
                        </Text>
                    ))}
                    <Table variant="simple">
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
                                        <a href={contact.website} target="_blank" rel="noopener noreferrer">
                                            {contact.name}
                                        </a>
                                    </Td>
                                    <Td>
                                        <a href={`tel:${contact.phone}`}>{contact.phone}</a> |{' '}
                                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
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
