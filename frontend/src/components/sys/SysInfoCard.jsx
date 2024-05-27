import {
  Stack,
  useBreakpointValue,
  VStack,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { DefaultCard, DefaultBlocksRenderer } from '../DefaultComponents';
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
        {subtextData.Title}
      </Heading>
      <Box spacing={4} textAlign="center">
        <Text color={descriptionColor} paddingBottom={4}>
          {subtextData.Description}
        </Text>
      </Box>
    </VStack>
  );
};

export default function SysInfoCard({
  data,
  iconName = QuestionIcon,
  spacing = 4,
}) {
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
    <DefaultCard>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={useBreakpointValue({ base: 8, md: 12, '2xl': 32 })}
        pt={8}
        pb={4}
      >
        {data.map((item) => {
          return (
            <Stack
              direction="column"
              key={item.id}
              spacing={{ base: 2, md: 4 }}
              flex={1}
            >
              <VStack align="center" spacing={spacing}>
                {icon}
                <Heading
                  as="h5"
                  size="md"
                  textAlign="center"
                  color={titleColor}
                >
                  {item.Title}
                </Heading>
                <Box spacing={4} textAlign="center">
                  <DefaultBlocksRenderer content={item.Description} />
                </Box>
              </VStack>
            </Stack>
          );
        })}
      </Stack>
    </DefaultCard>
  );
}
