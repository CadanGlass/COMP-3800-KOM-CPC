import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';

const PastNewsletters = ({ newsletters }) => {
  const [showContent, setShowContent] = useState(null);

  const toggleContent = (index) => {
    setShowContent(showContent === index ? null : index);
  };

  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box>
      {newsletters.map((newsletter, index) => (
        <Box
          key={index}
          bg={cardBg}
          p={4}
          rounded="md"
          shadow="md"
          mb={4}
          _hover={{ shadow: 'xl' }}
        >
          <Flex justify="space-between" align="center">
            <Box>
              <Text fontWeight="bold" color={textColor}>
                {newsletter.title}
              </Text>
              <Text color={textColor}>{newsletter.summary}</Text>
            </Box>
            <IconButton
              icon={
                showContent === index ? (
                  <ChevronDownIcon />
                ) : (
                  <ChevronRightIcon />
                )
              }
              aria-label="Toggle Newsletter Content"
              variant="ghost"
              colorScheme="gray"
              onClick={() => toggleContent(index)}
            />
          </Flex>
          <Collapse in={showContent === index} animateOpacity>
            <Box
              mt={4}
              p={4}
              bg={useColorModeValue('gray.50', 'gray.800')}
              rounded="md"
            >
              {/* You can add the detailed content of the newsletter here */}
              <Text color={textColor}>
                Detailed content of {newsletter.title}
              </Text>
            </Box>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default PastNewsletters;
