import React from 'react';
import {
  Container,
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import {
  Section,
  PageHeading,
  DefaultCard,
} from '../components/DefaultComponents';
import Header from '../components/Header';
import ContactUsForm from '../components/contactus/ContactUsForm';
import ContactInfo from '../components/contactus/ContactInfo';
import VolunteerNowButton from '../components/buttons/VolunteerNowButton';
import DonateButton from '../components/buttons/DonateButton';
import data from '../test_data/contactus/contactus_page.json';

const title = data.HeroTitle;
const contactInfo = data.ContactInfo;
const emergencyCard = data.EmergencyCard;

export default function ContactUsPage() {
  const { colorMode } = useColorMode();

  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  return (
    <>
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        <PageHeading title="Contact Us" />
      </Section>

      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
      >
        <Header
          title={title}
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
          imageUrl="https://via.placeholder.com/150"
          btn1={<VolunteerNowButton />}
          btn2={<DonateButton />}
        />
      </Section>

      <Section
        bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a566e)')}
      >
        <Box py={{ base: 12, md: 16 }}>
          <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
            <Heading fontSize={'2xl'}>{emergencyCard.Title}</Heading>
            <Text fontSize={'lg'}>{emergencyCard.Description}</Text>
          </Stack>
        </Box>
      </Section>

      <Section
        bg={getBackground('linear-gradient(to bottom, #4a566e, #5b6b7e)')}
      >
        <DefaultCard>
          <Stack
            align={'center'}
            spacing="8"
            py={{ base: 8, md: 12 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <VStack flex={0.5} spacing={{ base: 5, md: 10 }}>
              <ContactInfo
                phone={contactInfo.Phone}
                email={contactInfo.Email}
                address={contactInfo.Address}
                hours={contactInfo.Hours}
              />
            </VStack>

            <Stack flex={1} minW={{ base: '100%', md: 'auto' }}>
              <ContactUsForm />
            </Stack>
          </Stack>
        </DefaultCard>
      </Section>
    </>
  );
}
