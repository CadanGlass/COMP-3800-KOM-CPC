import {
  Box,
  Stack,
  Icon,
  Link,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMediaLinks = () => {
  const bg = useColorModeValue("gray.800", "gray.900");
  return (
    <Box bg={bg} p={4} color="white">
      <Stack direction="row" spacing={4} justify="center">
        <Tooltip label="Follow us on Facebook" hasArrow>
          <Link href="https://www.facebook.com/KOMCPC" isExternal>
            <Icon
              as={FaFacebook}
              w={8}
              h={8}
              p={2}
              borderRadius="full"
              bg={useColorModeValue("blue.500", "blue.300")}
              _hover={{
                transform: "scale(1.2)",
                bg: "blue.600",
                boxShadow: "0 0 8px white",
              }}
            />
          </Link>
        </Tooltip>
        <Tooltip label="Follow us on Twitter" hasArrow>
          <Link href="https://twitter.com/komcpc" isExternal>
            <Icon
              as={FaTwitter}
              w={8}
              h={8}
              p={2}
              borderRadius="full"
              bg={useColorModeValue("cyan.500", "cyan.300")}
              _hover={{
                transform: "scale(1.2)",
                bg: "cyan.600",
                boxShadow: "0 0 8px white",
              }}
            />
          </Link>
        </Tooltip>
        <Tooltip label="Follow us on Instagram" hasArrow>
          <Link href="https://www.instagram.com/komcpc" isExternal>
            <Icon
              as={FaInstagram}
              w={8}
              h={8}
              p={2}
              borderRadius="full"
              bg={useColorModeValue("pink.500", "pink.300")}
              _hover={{
                transform: "scale(1.2)",
                bg: "pink.600",
                boxShadow: "0 0 8px white",
              }}
            />
          </Link>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default SocialMediaLinks;
