import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  Icon,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdAccessTimeFilled,
  MdOutlineEmail,
  MdOutlinePerson,
} from 'react-icons/md';

import { DefaultPage } from '../components/DefaultComponents';
import Header from '../components/Header';

export default function ContactUsPage() {
  return (
    <DefaultPage>
      <Header
        title='Contact KOM CPC'
        description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore'
        imageUrl='https://via.placeholder.com/150'
        btn1='Volunteer Now'
        btn2='Donate Now'
      />

      <Box py={{ base: 12, md: 16 }}>
        <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
          <Heading fontSize={'2xl'}>In An Emergency, Call 9-1-1</Heading>
          <Text color={'gray.600'} fontSize={'lg'}>
            Do not contact the KOM CPC in emergencies. If an immediate police
            response IS NOT required or you need to report crimes after they’ve
            occurred, contact VPD Non-Emergency at 604.717.3321 or use the
            Citizen’s Crime Reporting website.
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
            <HStack spacing={4}>
              <Icon as={MdPhone} color={'gray.500'} />
              <Text>604 717 3434</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={MdEmail} color={'gray.500'} />
              <Text>test@gmail.com</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={MdLocationOn} color={'gray.500'} />
              <Text>6070 East Boulevard</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={MdAccessTimeFilled} color={'gray.500'} />
              <Text>Monday-Saturday 10am-4pm</Text>
            </HStack>
          </VStack>

          <Stack flex={1} minW={{ base: '100%', md: 'auto' }}>
            <Box bg='white' borderRadius='lg'>
              <VStack spacing={5} m={8} color='#0B0E3F'>
                <FormControl id='name'>
                  <FormLabel>Name</FormLabel>
                  <InputGroup borderColor='gray.300'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<MdOutlinePerson color='gray.800' />}
                    />
                    <Input type='text' size='md' />
                  </InputGroup>
                </FormControl>
                <FormControl id='email'>
                  <FormLabel>Email</FormLabel>
                  <InputGroup borderColor='gray.300'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<MdOutlineEmail color='gray.800' />}
                    />
                    <Input type='text' size='md' />
                  </InputGroup>
                </FormControl>
                <FormControl id='phone'>
                  <FormLabel>Phone</FormLabel>
                  <InputGroup borderColor='gray.300'>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<MdPhone color='gray.800' />}
                    />
                    <Input type='text' size='md' />
                  </InputGroup>
                </FormControl>
                <FormControl id='message'>
                  <FormLabel>How can we help you?</FormLabel>
                  <Textarea
                    borderColor='gray.300'
                    placeholder='Your message here...'
                  />
                </FormControl>
                <FormControl id='name' float='right'>
                  <Button
                    variant='solid'
                    bg='blue.500'
                    color='white'
                    _hover={{ color: 'white', bg: '#0B0E3F' }}
                  >
                    Send Message
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </DefaultPage>
  );
}
