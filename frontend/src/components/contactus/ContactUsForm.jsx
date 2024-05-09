import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { MdPhone, MdOutlineEmail, MdOutlinePerson } from 'react-icons/md';

export default function ContactUsForm() {
  return (
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
          <Textarea borderColor='gray.300' placeholder='Your message here...' />
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
  );
}
