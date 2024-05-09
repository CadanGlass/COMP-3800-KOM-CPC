import { Flex, IconButton, Input } from "@chakra-ui/react";
import { SearchIcon, ChevronRightIcon } from "@chakra-ui/icons";

const SearchBar = ({ borderColor }) => {
  return (
    <Flex justify="space-between" align="center">
      <IconButton
        icon={<SearchIcon />}
        aria-label="Search Events"
        variant="ghost"
        colorScheme="gray"
      />
      <Input placeholder="Search Events" borderColor={borderColor} />
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Open Menu"
        variant="ghost"
        colorScheme="gray"
      />
    </Flex>
  );
};

export default SearchBar;
