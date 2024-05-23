// components/WhoToCallCard.jsx
import React from 'react';
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { DefaultCard } from '../DefaultComponents';

const baseURL = 'http://localhost:1337'; // Base URL for Strapi images

const WhoToCallCard = ({ data }) => {
  return (
    <DefaultCard>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
      >
        <Box flex="1" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
          {data.Image && data.Image.data && data.Image.data.attributes && (
            <Image
              src={`${baseURL}${data.Image.data.attributes.url}`} // Strapi image URL
              alt={data.Image.data.attributes.alternativeText || 'Who to call'}
              objectFit="cover"
              width="100%"
              borderRadius="md"
            />
          )}
        </Box>
        <Box flex="1" p={6}>
          <VStack spacing={4} align="start">
            <Heading as="h3" size="lg">
              {data.Title || 'Who to call and when?'}
            </Heading>
            <Text>
              {data.Description ||
                'Call 911 immediately to report a serious crime, including a crime in progress or one that might be about to happen.'}
            </Text>
            <List spacing={3}>
              <ListItem>
                <Link href="tel:6047173321" color="blue.500" isExternal>
                  Call VPD non-emergency at 604-717-3321
                </Link>{' '}
                for crimes that are not emergencies.
              </ListItem>
              <ListItem>
                <Link href="tel:6047170622" color="blue.500" isExternal>
                  Call the Kerrisdale Oakridge Marpole Community Policing Centre
                  at 604-717-3434
                </Link>{' '}
                after calling the police and tell us what you have reported to
                police.
              </ListItem>
            </List>
            <Text>
              We also want to hear safety complaints and concerns that you might
              have, even if police involvement is not necessary or wanted. We
              record all concerns and:
            </Text>
            <List spacing={3} pl={5} styleType="disc">
              <ListItem>
                Make them available to our Neighbourhood Police Officer. This
                ensures that crime trends for the Strathcona area are accurately
                reflected in VPD statistics and allocation of police resources.
              </ListItem>
              <ListItem>
                And/Or, your CPC can create and direct programming and
                volunteers to provide community-focused solutions.
              </ListItem>
            </List>
          </VStack>
        </Box>
      </Flex>
    </DefaultCard>
  );
};

export default WhoToCallCard;
