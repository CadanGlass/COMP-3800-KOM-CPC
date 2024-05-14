import { Box, Stack, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMediaLinks = () => {
  const iconBg = useColorModeValue("white", "gray.700"); // Background color for icons
  const iconHoverBg = useColorModeValue("gray.200", "gray.600"); // Hover background color
  const boxShadow = useColorModeValue(
    "0 4px 12px rgba(0, 0, 0, 0.1)",
    "0 4px 12px rgba(0, 0, 0, 0.5)"
  ); // Box shadow

  return (
    <Box p={4}>
      <Stack direction="row" spacing={4} justify="center">
        <Link href="https://www.facebook.com/KOMCPC" isExternal>
          <Box
            w={10}
            h={10}
            bg={iconBg}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ bg: iconHoverBg, transform: "scale(1.1)" }}
            transition="all 0.2s ease-in-out"
            boxShadow={boxShadow}
          >
            <Icon as={FaFacebook} w={5} h={5} color="#3b5998" />
          </Box>
        </Link>
        <Link href="https://twitter.com/komcpc" isExternal>
          <Box
            w={10}
            h={10}
            bg={iconBg}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ bg: iconHoverBg, transform: "scale(1.1)" }}
            transition="all 0.2s ease-in-out"
            boxShadow={boxShadow}
          >
            <Icon as={FaTwitter} w={5} h={5} color="#1DA1F2" />
          </Box>
        </Link>
        <Link href="https://www.instagram.com/komcpc" isExternal>
          <Box
            w={10}
            h={10}
            bg={iconBg}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{ bg: iconHoverBg, transform: "scale(1.1)" }}
            transition="all 0.2s ease-in-out"
            boxShadow={boxShadow}
          >
            <Icon as={FaInstagram} w={5} h={5} color="#E1306C" />
          </Box>
        </Link>
      </Stack>
    </Box>
  );
};

export default SocialMediaLinks;
