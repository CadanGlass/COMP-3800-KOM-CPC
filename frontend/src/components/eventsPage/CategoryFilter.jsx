import { Stack, Button } from "@chakra-ui/react";

const CategoryFilter = ({
  borderColor,
  textColor,
  hoverBg,
  stackDirection,
}) => {
  const categories = [
    "All",
    "Speed Control",
    "Neighbourhood Watch",
    "Workshops",
    "Education",
  ];
  return (
    <Stack direction={stackDirection} spacing={4} overflowX="auto">
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          borderColor={borderColor}
          color={textColor}
          _hover={{ bg: hoverBg }}
        >
          {category}
        </Button>
      ))}
    </Stack>
  );
};

export default CategoryFilter;
