import React from 'react';
import {
  VStack,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';

const SubtextCardWithIcon = ({ subtextData = {}, spacing = 4 }) => {
  // Set icon color and background color based on theme
  const iconColor = useColorModeValue('blue.800', 'yellow.400');
  const iconBgColor = useColorModeValue('yellow.200', 'blue.900');
  const iconShadow = useColorModeValue(
    '0 0 10px rgba(0, 0, 0, 0.2)',
    '0 0 10px rgba(0, 0, 0, 0.5)'
  );

  return (
    <VStack align="center" spacing={spacing}>
      <Box
        boxSize={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={iconBgColor}
        borderRadius="full"
        boxShadow={iconShadow}
      >
        <QuestionIcon boxSize={6} color={iconColor} />
      </Box>
      <Heading as="h5" size="md" textAlign="center">
        {subtextData.title}
      </Heading>
      <Box spacing={4}>
        {subtextData.description.map((line, index) => (
          <Text
            color={'gray.500'}
            key={`line${index}`}
            textAlign="center"
            paddingBottom={4}
          >
            {line}
          </Text>
        ))}
      </Box>
    </VStack>
  );
};

export default SubtextCardWithIcon;
