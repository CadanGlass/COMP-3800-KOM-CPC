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

const NavItem = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    position="relative"
    zIndex={1}
    _hover={styles.navItem._hover}
    _after={styles.navItem._after}
    _before={{ transition: 'all 0.5s' }}
    transition="all 0.5s"
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
        bg={useColorModeValue('gray.800', '#1A202C')}
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
              position="relative"
              zIndex={1}
              _hover={styles.navItem._hover}
              _after={styles.navItem._after}
              _before={{ transition: 'all 0.5s' }}
              transition="all 0.5s"
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
            display={{ base: 'none', lg: 'flex' }}
          >
            {NAV_ITEMS.map((navItem) => (
              <NavItem key={navItem.path}>{navItem}</NavItem>
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
          <Box pb={4} display={{ base: 'block', lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <NavItem key={navItem.path}>{navItem}</NavItem>
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

const styles = {
  navItem: {
    position: 'relative',
    zIndex: 1,
    _hover: {
      textDecoration: 'none',
      color: 'black',
      _after: {
        opacity: 1,
        visibility: 'visible',
        height: '100%',
      },
    },
    _after: {
      transition: 'all 0.5s',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      margin: 'auto',
      width: '100%',
      height: '1px',
      content: '"."',
      color: 'transparent',
      background: 'gray.300',
      visibility: 'none',
      opacity: 0,
      zIndex: -1,
    },
  },
};
