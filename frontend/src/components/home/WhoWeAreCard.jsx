import { DefaultCard } from "../DefaultComponents";
import SubtextCardWithIcon from "../SubtextCardWithIcon";
import {
  Box,
  Stack,
  Spacer,
  useBreakpointValue,
  Heading,
  Text,
  VStack,
  AspectRatio,
} from "@chakra-ui/react";

const WhoWeAreCard = ({ data }) => {
  const stackSpacing = useBreakpointValue({ base: 8, md: 12, xl: 32 });
  const subPoints = data.subPoints;

  return (
    <DefaultCard
      backgroundColor="none"
      internalPaddingX={useBreakpointValue({ base: 4, md: 24, xl: 48 })}
    >
      <VStack spacing={8}>
        <Heading as="h3" size="lg" textAlign={"center"}>
          {data.title}
        </Heading>
        <Text fontSize="lg" textAlign={"center"}>
          {data.intro}
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={stackSpacing}>
          {subPoints.map((subtextData, index) => {
            return (
              <Stack
                direction="column"
                key={`subtext${index}`}
                spacing={{ base: 2, md: 4 }}
                flex={1}
              >
                <Box bg="gray.200" h={2} />
                <Box pb={{ base: 0, md: 4 }} />
                <SubtextCardWithIcon
                  subtextData={subtextData}
                  spacing={{ base: 4, md: 8 }}
                />
                <Spacer />
                <Box bg="gray.200" h={2} />
              </Stack>
            );
          })}
        </Stack>
        <AspectRatio ratio={{ base: 4 / 3, md: 21 / 9 }} minW={"100%"}>
          <iframe
            src={data.mapUrl}
            width="100%"
            height="480"
            title="Border Map"
          />
        </AspectRatio>
      </VStack>
    </DefaultCard>
  );
};

export default WhoWeAreCard;
