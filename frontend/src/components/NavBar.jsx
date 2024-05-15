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
import DonateButton from './buttons/DonateButton';
import ContactUsButton from './buttons/ContactUsButton';

import KOM_logo from '../assets/KOM_Logo.png';

const NAV_ITEMS = [
  { label: 'Volunteer', path: 'volunteer' },
  { label: 'Programs', path: 'programs' },
  { label: 'Shield Your Sip', path: 'shield-your-sip' },
  { label: 'News & Events', path: 'news-events' },
  { label: 'About Us', path: 'about-us' },
  { label: 'Resources', path: 'resources' },
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.300',
      color: 'black',
    }}
    href={children.path}
    fontSize={{ lg: 'sm', xl: 'md' }}
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
        <Flex
          h={16}
          alignItems={'center'}
          justify={{ base: 'center', lg: 'space-between' }}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ base: 'flex', lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack
            spacing={4}
            flex={1}
            justify={{ base: 'center', lg: 'start' }}
          >
            <Link
              display="flex"
              alignItems="center"
              pr={2}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: 'gray.300',
                color: 'gray.700',
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
            spacing={{ base: 2, xl: 6 }}
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
              size="sm"
            />
            {DonateButton()}
            {ContactUsButton()}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ base: 'block', lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <NavLink key={navItem.path}>{navItem}</NavLink>
              ))}
              <HStack flexWrap="wrap" spacing={4}>
                {DonateButton()}
                {ContactUsButton()}
                <IconButton
                  icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  onClick={toggleColorMode}
                  aria-label="Toggle dark mode"
                  isRound={true}
                  size="md"
                  alignSelf="center"
                />
              </HStack>
              {/* {VolunteerNowButton()} */}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
