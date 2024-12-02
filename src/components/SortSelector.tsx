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

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find((s) => s.value === sortOrder);

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
            Sort By: {currentSortOrder?.label || "Relevance"}
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
          {sortOrders.map((order) => (
            <MenuItem
              cursor={"pointer"}
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuContent>
      </VStack>
    </MenuRoot>
  );
};

export default SortSelector;
