import React from 'react';
import {
  VStack,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';

const SubtextCardWithIcon = ({
  subtextData = {},
  spacing = 4,
  iconName = QuestionIcon,
}) => {
  // Colors and styles based on color mode
  const iconBgColor = useColorModeValue('blue.800', 'yellow.400');
  const iconColor = useColorModeValue('white', 'gray.800');
  const titleColor = useColorModeValue('blue.800', 'yellow.400');
  const descriptionColor = useColorModeValue('gray.700', 'gray.200');
  const boxShadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.2)',
    'rgba(0, 0, 0, 0.7)'
  );

  const icon = (
    <Box
      bg={iconBgColor}
      borderRadius="full"
      p={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxSize={10}
      color={iconColor}
      boxShadow={`0px 4px 6px ${boxShadowColor}`}
      border="2px solid"
      borderColor={iconBgColor}
    >
      <Icon as={iconName} boxSize={6} />
    </Box>
  );

  return (
    <VStack align="center" spacing={spacing}>
      {icon}
      <Heading as="h5" size="md" textAlign="center" color={titleColor}>
        {subtextData.title}
      </Heading>
      <Box spacing={4} textAlign="center">
        {subtextData.description.map((line, index) => (
          <Text key={`line${index}`} color={descriptionColor} paddingBottom={4}>
            {line}
          </Text>
        ))}
      </Box>
    </VStack>
  );
};

export default SubtextCardWithIcon;
