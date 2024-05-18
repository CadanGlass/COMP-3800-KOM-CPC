import React from 'react';
import { HStack, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = () => {
  const iconSize = '48px'; // Increase the icon size

  return (
    <HStack spacing={8}>
      <IconButton
        as="a"
        href="https://www.facebook.com/KOMCPC"
        aria-label="Facebook"
        icon={<FaFacebook size={iconSize} />}
        variant="ghost"
        color="yellow.400"
        _hover={{ color: 'yellow.300', transform: 'scale(1.2)' }}
        size="lg"
        boxSize={14} // Increase the button size
      />
      <IconButton
        as="a"
        href="https://twitter.com/komcpc"
        aria-label="Twitter"
        icon={<FaTwitter size={iconSize} />}
        variant="ghost"
        color="yellow.400"
        _hover={{ color: 'yellow.300', transform: 'scale(1.2)' }}
        size="lg"
        boxSize={14} // Increase the button size
      />
      <IconButton
        as="a"
        href="https://www.instagram.com/komcpc"
        aria-label="Instagram"
        icon={<FaInstagram size={iconSize} />}
        variant="ghost"
        color="yellow.400"
        _hover={{ color: 'yellow.300', transform: 'scale(1.2)' }}
        size="lg"
        boxSize={14} // Increase the button size
      />
    </HStack>
  );
};

export default SocialMediaLinks;
