import { Box, Stack, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMediaLinks = () => {
  const bg = useColorModeValue("gray.800", "gray.900"); // Adjust based on your color mode
  return (
    <Box bg={bg} p={4} color="white">
      <Stack direction="row" spacing={4} justify="center">
        <Link href="https://www.facebook.com/KOMCPC" isExternal>
          <Icon
            as={FaFacebook}
            w={6}
            h={6}
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
        <Link href="https://twitter.com/komcpc" isExternal>
          <Icon
            as={FaTwitter}
            w={6}
            h={6}
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
        <Link href="https://www.instagram.com/komcpc" isExternal>
          <Icon
            as={FaInstagram}
            w={6}
            h={6}
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
      </Stack>
    </Box>
  );
};

export default SocialMediaLinks;
