import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import KOM_logo from '../assets/KOM_Logo.png';

const NAV_ITEMS = [
  {
    label: 'Volunteer',
    path: 'volunteer',
  },
  {
    label: 'Programs',
    path: 'programs',
  },
  {
    label: 'Events',
    path: 'events',
  },
  {
    label: 'Newsletter',
    path: 'newsletter',
  },
  {
    label: 'About Us',
    path: 'about-us',
  },
  {
    label: 'Contact Us',
    path: 'contact-us',
  },
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.path}
  >
    {children.label}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack alignItems={'center'}>
            <Link
              display='flex'
              alignItems='center'
              p={2}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
              href='/'
            >
              <Avatar size={'md'} src={KOM_logo} />
              <Text fontSize='lg' fontWeight='bold' ml={2}>
                KOM CPC
              </Text>
            </Link>
          </HStack>

          <HStack spacing={6} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', lg: 'flex' }}
            >
              {NAV_ITEMS.map((navItem) => (
                <NavLink key={navItem.path}>{navItem}</NavLink>
              ))}
            </HStack>
            <Button
              as={Button}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'red.600'}
              href={'#'}
              // TODO: ADD LINK TO VOLUNTEER PAGE
              _hover={{
                bg: 'red.400',
              }}
            >
              Volunteer Now
            </Button>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <NavLink key={navItem.path}>{navItem}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
