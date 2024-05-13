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
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import VolunteerNowButton from './VolunteerNowButton';

import KOM_logo from '../assets/KOM_Logo.png';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Volunteer', path: 'volunteer' },
  { label: 'Programs', path: 'programs' },
  { label: 'Events', path: 'events' },
  { label: 'Newsletter', path: 'newsletter' },
  { label: 'About Us', path: 'about-us' },
  { label: 'Contact Us', path: 'contact-us' },
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
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue('gray.800', 'gray.900')}
        color={useColorModeValue('gray.100', 'gray.200')}
        px={4}
        w="100%"
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ base: 'flex', lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={4} alignItems={'center'}>
            <Link
              display="flex"
              alignItems="center"
              p={2}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
              href="/"
            >
              <Avatar size={'md'} src={KOM_logo} />
              <Text fontSize="lg" fontWeight="bold" ml={2}>
                KOM CPC
              </Text>
            </Link>
          </HStack>

          <HStack
            spacing={6}
            alignItems={'center'}
            display={{ base: 'none', lg: 'flex' }}
          >
            {NAV_ITEMS.map((navItem) => (
              <NavLink key={navItem.path}>{navItem}</NavLink>
            ))}
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle dark mode"
              isRound={true}
            />
            {VolunteerNowButton()}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ base: 'block', lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <NavLink key={navItem.path}>{navItem}</NavLink>
              ))}
              <IconButton
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                aria-label="Toggle dark mode"
                isRound={true}
                size="lg"
                alignSelf="center"
              />
              {VolunteerNowButton()}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
