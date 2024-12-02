import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuItem,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <VStack>
        <MenuTrigger asChild>
          <Button
            bg={{ _dark: "#202020", _light: "#f4f4f5" }}
            color={{ _dark: "white", _light: "black" }}
            variant="outline"
            size="md"
          >
            Sort By
            <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent
          borderRadius={"1em"}
          bg={{ _dark: "#202020" }}
          w="fit-content"
          position={"absolute"}
          top={12}
        >
          <MenuItem value="Relevance">Relevance</MenuItem>
          <MenuItem value="">Date added</MenuItem>
          <MenuItem value="">Name</MenuItem>
          <MenuItem value="">Release Date</MenuItem>
          <MenuItem value="">Popularity</MenuItem>
          <MenuItem value="">Average rating</MenuItem>
        </MenuContent>
      </VStack>
    </MenuRoot>
  );
};

export default SortSelector;
