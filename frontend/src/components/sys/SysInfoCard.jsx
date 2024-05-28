import {
  Stack,
  useBreakpointValue,
  VStack,
  HStack,
  Heading,
  Box,
  useColorModeValue,
  Link,
  Image,
  AspectRatio,
  Tooltip,
} from '@chakra-ui/react';
import { DefaultCard, DefaultBlocksRenderer } from '../DefaultComponents';
import { QuestionIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';

const baseURL = 'http://localhost:1337';

export default function SysInfoCard({
  data,
  iconName = QuestionIcon,
  spacing = 4,
}) {
  const iconColor = useColorModeValue('white', 'gray.800');
  const titleColor = useColorModeValue('blue.800', 'yellow.400');
  const boxShadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.2)',
    'rgba(0, 0, 0, 0.7)'
  );

  const icon = (
    <Box
      bg={titleColor}
      borderRadius="full"
      p={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxSize={10}
      color={iconColor}
      boxShadow={`0px 4px 6px ${boxShadowColor}`}
      border="2px solid"
      borderColor={titleColor}
    >
      <Icon as={iconName} boxSize={6} />
    </Box>
  );

  const Logos = ({ Logos }) => {
    return Logos.map((logo) => (
      <Link
        key={logo.id}
        href={logo.Url}
        target="_blank"
        rel="noopener noreferrer"
        bg={useColorModeValue('transparent', 'gray.200')}
        borderRadius="xl"
      >
        <Tooltip label={logo.Name} aria-label={logo.Name}>
          <AspectRatio ratio={1} w="100px" h="100px">
            <Image
              src={`${baseURL}${logo.Logo.data.attributes.url}`}
              alt={logo.Name}
            />
          </AspectRatio>
        </Tooltip>
      </Link>
    ));
  };

  return (
    <DefaultCard>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={useBreakpointValue({ base: 16, md: 12, '2xl': 32 })}
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
                <VStack spacing={4} textAlign="center">
                  <DefaultBlocksRenderer content={item.Description} />
                  {item.Logos && (
                    <HStack wrap={'wrap'} spacing={4} justify={'center'}>
                      <Logos Logos={item.Logos} />
                    </HStack>
                  )}
                </VStack>
              </VStack>
            </Stack>
          );
        })}
      </Stack>
    </DefaultCard>
  );
}
