import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  useColorMode,
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
  { label: 'News & Events', path: 'news-events' },
  { label: 'How Can I Help?', path: 'how-can-i-help' },
  { label: 'About', path: 'about-us' },
  { label: 'Resources', path: 'resources' },
];

const NavItem = ({ children, isActive }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    position="relative"
    zIndex={1}
    className={`nav-item ${isActive ? 'active' : ''}`}
    fontSize={{ lg: 'sm', xl: 'md' }}
    fontWeight={'bold'} // Make the links bold
    href={children.path}
  >
    {children.label}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const textColor = useColorModeValue('white', 'white'); // Use white color for the text in both light and dark mode

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
            <Link
              display="flex"
              alignItems="center"
              pr={2}
              rounded={'md'}
              position="relative"
              zIndex={1}
              className={`nav-item ${location.pathname === '/' ? '' : ''}`}
              href="/"
            >
              <Avatar size={'md'} src={KOM_logo} />
              <Text fontSize="md" fontWeight="bold" ml={2} color={textColor}>
                Kerrisdale Oakridge Marpole Community Policing Centre
              </Text>
            </Link>
          </HStack>

          <HStack
            spacing={{ base: 2, xl: 4, '2xl': 6 }}
            display={{ base: 'none', xl: 'flex' }}
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
                <NavItem
                  key={navItem.path}
                  isActive={location.pathname === `/${navItem.path}`}
                >
                  {navItem}
                </NavItem>
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
