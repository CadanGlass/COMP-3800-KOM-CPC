import { useState } from 'react';
import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { MdPhone, MdOutlineEmail, MdOutlinePerson } from 'react-icons/md';

export default function ContactUsForm() {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateForm = () => {
    const errors = {};
    let isValid = true;
    if (formData.name.trim() === '') {
      errors.name = true;
      isValid = false;
    } else {
      errors.name = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = true;
      isValid = false;
    } else {
      errors.email = false;
    }
    if (formData.message.trim() === '') {
      errors.message = true;
      isValid = false;
    } else {
      errors.message = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    setFormErrors({
      ...formErrors,
      [id]: !value.trim().length,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid:', formData);
      // submitForm(); // TODO: uncomment when API is ready
    } else {
      console.log('Form is invalid:', formErrors);
    }
  };

  const submitForm = async () => {
    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Message sent');
        setFormData(initialFormData);
      } else {
        console.error('Failed to send:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Box bg='white' borderRadius='lg'>
      <VStack spacing={5} m={8} color='#0B0E3F'>
        <FormControl id='name' isRequired isInvalid={formErrors.name}>
          <FormLabel>Name</FormLabel>
          <InputGroup borderColor='gray.300'>
            <InputLeftElement
              pointerEvents='none'
              children={<MdOutlinePerson color='gray.800' />}
            />
            <Input type='text' size='md' id='name' onChange={handleChange} />
          </InputGroup>
          <FormErrorMessage>Please enter your name.</FormErrorMessage>
        </FormControl>
        <FormControl id='email' isRequired isInvalid={formErrors.email}>
          <FormLabel>Email</FormLabel>
          <InputGroup borderColor='gray.300'>
            <InputLeftElement
              pointerEvents='none'
              children={<MdOutlineEmail color='gray.800' />}
            />
            <Input type='email' size='md' id='email' onChange={handleChange} />
          </InputGroup>
          <FormErrorMessage>
            Please enter a valid email address.
          </FormErrorMessage>
        </FormControl>
        <FormControl id='phone'>
          <FormLabel>Phone</FormLabel>
          <InputGroup borderColor='gray.300'>
            <InputLeftElement
              pointerEvents='none'
              children={<MdPhone color='gray.800' />}
            />
            <Input type='text' size='md' id='phone' onChange={handleChange} />
          </InputGroup>
        </FormControl>
        <FormControl id='message' isRequired isInvalid={formErrors.message}>
          <FormLabel>How can we help you?</FormLabel>
          <Textarea
            borderColor='gray.300'
            placeholder='Your message here...'
            id='message'
            onChange={handleChange}
          />
          <FormErrorMessage>Please enter your message.</FormErrorMessage>
        </FormControl>
        <FormControl id='name' float='right'>
          <Button
            variant='solid'
            bg='blue.500'
            color='white'
            _hover={{ color: 'white', bg: '#0B0E3F' }}
            onClick={handleSubmit}
            isDisabled={!formData.name || !formData.email || !formData.message}
          >
            Send Message
          </Button>
        </FormControl>
      </VStack>
    </Box>
  );
}
