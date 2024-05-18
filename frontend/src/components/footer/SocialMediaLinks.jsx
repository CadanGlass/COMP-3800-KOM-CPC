import React from 'react';
import { HStack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = () => {
  const iconColor = useColorModeValue('blue.500', 'yellow.400'); // Blue in light mode, yellow in dark mode
  const iconSize = '48px'; // Increased icon size

  return (
    <HStack spacing={8}>
      <IconButton
        as="a"
        href="https://www.facebook.com/KOMCPC"
        aria-label="Facebook"
        icon={<FaFacebook size={iconSize} />}
        variant="ghost"
        color={iconColor}
        _hover={{
          color: useColorModeValue('blue.300', 'yellow.300'),
          transform: 'scale(1.2)',
        }}
        size="lg"
        boxSize={16} // Increased button size
        background="none"
        boxShadow="none"
        border="none"
      />
      <IconButton
        as="a"
        href="https://twitter.com/komcpc"
        aria-label="Twitter"
        icon={<FaTwitter size={iconSize} />}
        variant="ghost"
        color={iconColor}
        _hover={{
          color: useColorModeValue('blue.300', 'yellow.300'),
          transform: 'scale(1.2)',
        }}
        size="lg"
        boxSize={16} // Increased button size
        background="none"
        boxShadow="none"
        border="none"
      />
      <IconButton
        as="a"
        href="https://www.instagram.com/komcpc"
        aria-label="Instagram"
        icon={<FaInstagram size={iconSize} />}
        variant="ghost"
        color={iconColor}
        _hover={{
          color: useColorModeValue('blue.300', 'yellow.300'),
          transform: 'scale(1.2)',
        }}
        size="lg"
        boxSize={16} // Increased button size
        background="none"
        boxShadow="none"
        border="none"
      />
    </HStack>
  );
};

export default SocialMediaLinks;
