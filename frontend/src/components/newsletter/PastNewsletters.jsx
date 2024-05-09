import {
  Box,
  Flex,
  VStack,
  Text,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const PastNewsletters = ({ newsletters }) => {
  return (
    <VStack spacing={4} mt={8}>
      <Text fontSize="2xl" fontWeight="bold">
        Past Newsletters
      </Text>
      {newsletters.map((newsletter, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px">
          <Text>{newsletter.title}</Text>
          <Text fontSize="sm">{newsletter.summary}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default PastNewsletters;

// `newsletters` should be an array of objects with `title` and `summary`.
