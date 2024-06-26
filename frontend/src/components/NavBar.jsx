import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Stack,
  Text,
  useColorMode,
  Image,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';
import DonateButton from './buttons/DonateButton';
import ContactUsButton from './buttons/ContactUsButton';

import KOM_logo from '../assets/KOM_Logo.png';

const NAV_ITEMS = [
  { label: 'Volunteer', path: 'volunteer' },
  { label: 'Programs', path: 'programs' },
  { label: 'Shield Your Sip', path: 'shield-your-sip' },
  { label: 'Events & News', path: 'news-events' },
  { label: 'How Can I Help?', path: 'how-can-i-help' },
  { label: 'About', path: 'about-us' },
  { label: 'Resources', path: 'resources' },
];

const NavItem = ({ children, isActive }) => {
  const underlineColor = '#0ea5e9';
  const activeColor = '#0ea5e9';

  return (
    <Link
      px={4}
      py={2}
      rounded={'md'}
      position="relative"
      zIndex={1}
      className={`nav-item ${isActive ? 'active' : ''}`}
      fontSize={{ base: 'md', '3xl': 'lg', '5xl': 'xl' }}
      fontWeight={'extrabold'}
      href={children.path}
      color={isActive ? activeColor : 'white'}
      _after={{
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        bottom: 0,
        left: 0,
        bg: underlineColor,
        transform: 'scaleX(0)',
        transformOrigin: 'center',
        transition: 'transform 0.3s ease',
      }}
      _hover={{
        color: activeColor,
        _after: {
          transform: 'scaleX(1)',
        },
      }}
      whiteSpace="nowrap"
    >
      {children.label}
    </Link>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  return (
    <Box
      bg={useColorModeValue('gray.800', '#1A202C')}
      color={useColorModeValue('gray.100', 'gray.200')}
      px={6}
      w="100%"
      position="fixed"
    >
      <Flex h={'80px'} alignItems={'center'} justify={'space-between'}>
        <Box
          display={{ base: 'flex', md: 'none' }}
          flex={1}
          justifyContent="flex-start"
        >
          <Link
            display="flex"
            alignItems="center"
            rounded={'md'}
            position="relative"
            zIndex={1}
            className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
            href="/"
          >
            <Image
              boxSize="80px"
              objectFit="contain"
              src={KOM_logo}
              alt="KOM CPC Logo"
            />
          </Link>
        </Box>

        <Box
          display={{ base: 'flex', md: 'none' }}
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          zIndex={1}
        >
          <Text fontSize="xl" fontWeight="extrabold" color="white">
            KOM CPC
          </Text>
        </Box>

        <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Link
            display="flex"
            alignItems="center"
            rounded={'md'}
            position="relative"
            zIndex={1}
            className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
            href="/"
          >
            <Image
              boxSize="80px"
              objectFit="contain"
              src={KOM_logo}
              alt="KOM CPC Logo"
            />
            <Text fontSize="xl" fontWeight="extrabold" color="white">
              KOM CPC
            </Text>
          </Link>
        </Box>

        <Flex alignItems={'center'}>
          <HStack
            spacing={{ base: 3, '4xl': 6, '5xl': 7 }}
            display={{ base: 'none', '3xl': 'flex' }}
          >
            {NAV_ITEMS.map((navItem) => (
              <NavItem
                key={navItem.path}
                isActive={location.pathname === `/${navItem.path}`}
              >
                {navItem}
              </NavItem>
            ))}
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle dark mode"
              isRound={true}
              size="md"
            />
            <ContactUsButton />
            <DonateButton />
          </HStack>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ base: 'flex', '3xl': 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          display={{ base: 'block', '3xl': 'none' }}
          textAlign="center"
        >
          <Stack as={'nav'} spacing={6}>
            {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.path}>
                <NavItem isActive={location.pathname === `/${navItem.path}`}>
                  {navItem}
                </NavItem>
              </Box>
            ))}
            <HStack flexWrap="wrap" spacing={6} justify="center">
              <ContactUsButton />
              <DonateButton />
              <IconButton
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                aria-label="Toggle dark mode"
                isRound={true}
                size="md"
                alignSelf="center"
              />
            </HStack>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
