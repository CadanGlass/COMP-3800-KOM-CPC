import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import DonateButton from './buttons/DonateButton';
import ContactUsButton from './buttons/ContactUsButton';
import KOM_logo from '../assets/KOM_Logo.png';

const NAV_ITEMS = [
  { label: 'Volunteer', path: '/volunteer' },
  { label: 'Programs', path: '/programs' },
  { label: 'Shield Your Sip', path: '/shield-your-sip' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'How Can I Help?', path: '/how-can-i-help' },
  { label: 'About', path: '/about-us' },
  { label: 'Resources', path: '/resources' },
];

const NavItem = ({ label, path }) => (
  <NavLink
    to={path}
    style={({ isActive }) => ({
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'yellow.400' : 'inherit',
      background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      border: isActive ? '2px solid yellow.400' : 'none',
      textDecoration: isActive ? 'underline' : 'none',
      position: 'relative',
      transition: 'all 0.3s ease',
    })}
    className="nav-item"
  >
    {label}
  </NavLink>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue('gray.800', '#1A202C')}
        color={useColorModeValue('gray.100', 'gray.200')}
        px={4}
        w="100%"
      >
        <Flex
          h={16}
          alignItems={'center'}
          justify={{ base: 'center', xl: 'space-between' }}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ base: 'flex', xl: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack
            spacing={4}
            flex={1}
            justify={{ base: 'center', xl: 'start' }}
          >
            <NavLink
              to="/"
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                pr: 2,
                borderRadius: '0.375rem',
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? 'yellow.400' : 'inherit',
                background: isActive
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'transparent',
                border: isActive ? '2px solid yellow.400' : 'none',
                textDecoration: isActive ? 'underline' : 'none',
                position: 'relative',
                transition: 'all 0.3s ease',
              })}
              className="nav-item"
            >
              <Avatar size={'md'} src={KOM_logo} />
              <Text fontSize="md" fontWeight="bold" ml={2}>
                Kerrisdale Oakridge Marpole Community Policing Centre
              </Text>
            </NavLink>
          </HStack>

          <HStack
            spacing={{ base: 2, xl: 4, '2xl': 6 }}
            display={{ base: 'none', xl: 'flex' }}
          >
            {NAV_ITEMS.map((navItem) => (
              <NavItem key={navItem.path} {...navItem} />
            ))}
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              aria-label="Toggle dark mode"
              isRound={true}
              size="sm"
            />
            {ContactUsButton()}
            {DonateButton()}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ base: 'block', xl: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <NavItem key={navItem.path} {...navItem} />
              ))}
              <HStack flexWrap="wrap" spacing={4}>
                {ContactUsButton()}
                {DonateButton()}
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
    </>
  );
}
