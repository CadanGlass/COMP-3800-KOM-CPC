import { Box, Stack, Icon, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <Box p={4} color="white">
      <Stack direction="row" spacing={4} justify="center">
        <Link href="https://www.facebook.com/KOMCPC" isExternal>
          <Icon
            as={FaFacebook}
            w={6}
            h={6}
            color="#3b5998" // Facebook blue
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
        <Link href="https://twitter.com/komcpc" isExternal>
          <Icon
            as={FaTwitter}
            w={6}
            h={6}
            color="#1DA1F2" // Twitter blue
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
        <Link href="https://www.instagram.com/komcpc" isExternal>
          <Icon
            as={FaInstagram}
            w={6}
            h={6}
            color="#E1306C" // Instagram pink
            _hover={{ transform: "scale(1.1)" }}
          />
        </Link>
      </Stack>
    </Box>
  );
};

export default SocialMediaLinks;
