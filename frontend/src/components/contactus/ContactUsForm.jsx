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
  useColorModeValue,
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

  const backgroundColor = useColorModeValue('gray.50', 'gray.600');
  const color = useColorModeValue('gray.700', 'white');

  return (
    <Box bg={backgroundColor} borderRadius="lg">
      <VStack spacing={5} m={8}>
        <FormControl id="name" isRequired isInvalid={formErrors.name}>
          <FormLabel color={color}>Name</FormLabel>
          <InputGroup borderColor="gray.300">
            <InputLeftElement
              pointerEvents="none"
              children={<MdOutlinePerson />}
            />
            <Input
              type="text"
              size="md"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>Please enter your name.</FormErrorMessage>
        </FormControl>
        <FormControl id="email" isRequired isInvalid={formErrors.email}>
          <FormLabel color={color}>Email</FormLabel>
          <InputGroup borderColor="gray.300">
            <InputLeftElement
              pointerEvents="none"
              children={<MdOutlineEmail />}
            />
            <Input
              type="email"
              size="md"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>
            Please enter a valid email address.
          </FormErrorMessage>
        </FormControl>
        <FormControl id="phone">
          <FormLabel color={color}>Phone</FormLabel>
          <InputGroup borderColor="gray.300">
            <InputLeftElement pointerEvents="none" children={<MdPhone />} />
            <Input
              type="text"
              size="md"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
        <FormControl id="message" isRequired isInvalid={formErrors.message}>
          <FormLabel color={color}>How can we help you?</FormLabel>
          <Textarea
            borderColor="gray.300"
            placeholder="Your message here..."
            _placeholder={{ color: 'gray.400' }}
            id="message"
            value={formData.message}
            onChange={handleChange}
          />
          <FormErrorMessage>Please enter your message.</FormErrorMessage>
        </FormControl>
        <FormControl id="name" float="right">
          <Button
            variant="solid"
            bg="blue.500"
            color="white"
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
