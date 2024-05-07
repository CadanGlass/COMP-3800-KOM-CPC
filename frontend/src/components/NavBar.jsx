import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => (
  <Flex bg='blue.500' color='white' px={4} py={2} align='center'>
    <Box p='2'>Logo</Box>
    <Spacer />
    <Box>
      <Link as={RouterLink} to='/' px='3'>
        Home
      </Link>
      <Link as={RouterLink} to='/volunteer' px='3'>
        Volunteer
      </Link>
      <Link as={RouterLink} to='/programs' px='3'>
        Programs
      </Link>
      <Link as={RouterLink} to='/events' px='3'>
        Events
      </Link>
      <Link as={RouterLink} to='/newsletter' px='3'>
        Newsletter
      </Link>
      <Link as={RouterLink} to='/about-us' px='3'>
        About Us
      </Link>
      <Link as={RouterLink} to='/contact-us' px='3'>
        Contact Us
      </Link>
    </Box>
  </Flex>
);

export default Navbar;
