import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

const baseURL = 'http://localhost:1337';

export default function ContactUsPage() {
  const { colorMode } = useColorMode();

  const [pageTitle, setPageTitle] = useState('');
  const [header, setHeader] = useState({});
  const [emergencyInfo, setEmergencyInfo] = useState({});
  const [contactInfo, setContactInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${baseURL}/api/contact-us-page`)
        .then((response) => {
          if (!response.data) {
            return;
          }
          const apiData = response.data.data.attributes;
          const headerData = apiData.Header.HeaderInfo;
          setPageTitle(apiData.PageTitle);
          setHeader({
            ...headerData,
            Image: `${baseURL}${headerData.Image.data.attributes.url}`,
            FirstButton: {
              Label: apiData.Header.FirstButton.ButtonLabel,
              Link: apiData.Header.FirstButton.Link,
            },
            SecondButton: {
              Label: apiData.Header.SecondButton.ButtonLabel,
              Link: apiData.Header.SecondButton.Link,
            },
          });
          setEmergencyInfo(apiData.EmergencyInfoCard);
          setContactInfo(apiData.ContactInfo);
          setError(null);
        })
        .catch((error) => {
          console.error('Error fetching contact us data:', error);
          setError(error);
        });
    };

    fetchData();
  }, []);

  if (error) return <p>Error!</p>;

  const getBackground = (darkGradient) =>
    colorMode === 'light' ? '#ffffff' : darkGradient;

  return (
    <>
      <Section
        bg={getBackground('linear-gradient(to bottom, #1a202c, #2d3748)')}
      >
        {pageTitle && <PageHeading title={pageTitle} />}
      </Section>

      <Section
        bg={getBackground('linear-gradient(to bottom, #2d3748, #3c4a5e)')}
      >
        {header && (
          <Header
            title={header.Title}
            description={header.Description}
            imageUrl={header.Image}
            btn1={
              <VolunteerNowButton
                label={header.FirstButton?.Label}
                link={header.FirstButton?.Link}
              />
            }
            btn2={
              <DonateButton
                label={header.SecondButton?.Label}
                link={header.SecondButton?.Link}
              />
            }
          />
        )}
      </Section>

      <Section
        bg={getBackground('linear-gradient(to bottom, #3c4a5e, #4a566e)')}
      >
        <Box py={{ base: 12, md: 16 }}>
          {emergencyInfo && (
            <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
              <Heading fontSize={'2xl'}>{emergencyInfo.Title}</Heading>
              <Text fontSize={'lg'}>{emergencyInfo.Description}</Text>
            </Stack>
          )}
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
              {contactInfo && (
                <ContactInfo
                  phone={contactInfo.Phone}
                  email={contactInfo.Email}
                  address={contactInfo.Address}
                  hours={contactInfo.Hours}
                />
              )}
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
