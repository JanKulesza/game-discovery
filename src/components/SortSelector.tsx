import { sortOrders } from "@/services/constants";
import useGameQueryStore from "@/strore";
import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuItem,
  VStack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

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
          position={"fixed"}
          marginTop={12}
        >
          {sortOrders.map((order) => (
            <MenuItem
              cursor={"pointer"}
              onClick={() => setSortOrder(order.value)}
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
