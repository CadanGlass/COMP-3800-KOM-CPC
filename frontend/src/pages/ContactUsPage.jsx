import { Container, Box, Heading, Text, VStack, Stack } from '@chakra-ui/react';

import { DefaultPage } from '../components/DefaultComponents';
import Header from '../components/Header';
import ContactUsForm from '../components/contactus/ContactUsForm';
import ContactInfo from '../components/contactus/ContactInfo';
import data from '../test_data/contactus/contactus_page.json';

const title = data.HeroTitle;
const contactInfo = data.ContactInfo;
const emergencyCard = data.EmergencyCard;

export default function ContactUsPage() {
  return (
    <DefaultPage>
      <Header
        title={title}
        description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        imageUrl='https://via.placeholder.com/150'
        btn1='Volunteer Now'
        btn2='Donate Now'
      />

      <Box py={{ base: 12, md: 16 }}>
        <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
          <Heading fontSize={'2xl'}>{emergencyCard.Title}</Heading>
          <Text color={'gray.600'} fontSize={'lg'}>
            {emergencyCard.Description}
          </Text>
        </Stack>
      </Box>

      <Container maxW='100%' p={8} bg='gray.50' borderRadius='lg'>
        <Stack
          align={'center'}
          spacing='8'
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
      </Container>
    </DefaultPage>
  );
}
