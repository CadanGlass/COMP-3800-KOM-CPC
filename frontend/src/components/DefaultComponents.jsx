import {
  Box,
  VStack,
  useBreakpointValue,
  Container,
  useColorModeValue,
  Text,
  Heading,
} from "@chakra-ui/react";


export const DefaultPage = ({
  children,
  stackSpacing = 8,
  padding = useBreakpointValue({ base: 4, lg: 16 }),
}) => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Container maxW="1700px" py={4} px={padding} bg={bg} color={color}>
      <VStack spacing={stackSpacing} width={"100%"}>
        {children}
      </VStack>
    </Container>
  );
};

export const DefaultVStack = ({ children, spacing = 4 }) => {
  return (
    <VStack spacing={spacing} align="center">
      {children}
    </VStack>
  );
};

export const DefaultCard = ({
  children,
  internalPaddingX = useBreakpointValue({ base: 4, md: 8, xl: 16 }),
  internalPaddingY = 6,
  borderRadius = "xl",
}) => {
  const backgroundColor = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("black", "white");
  const boxShadow = useColorModeValue(
    "0px 4px 12px rgba(0, 0, 0, 0.15)", // Stronger shadow for light mode
    "0px 4px 12px rgba(0, 0, 0, 0.5)" // Stronger shadow for dark mode
  );

  return (
    <Box
      px={internalPaddingX}
      py={internalPaddingY}
      backgroundColor={backgroundColor}
      color={color}
      width={"100%"}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
    >
      {children}
    </Box>
  );
};
