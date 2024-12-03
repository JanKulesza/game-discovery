import { sortOrders } from "@/services/constants";
import useGameQueryStore from "@/strore";
import { Box, Heading, Text } from "@chakra-ui/react";

const GameHeading = () => {
  const search = useGameQueryStore((s) => s.gameQuery.search);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  let heading;
  if (search) heading = `Searching for ${search}`;

  const currentSortOrder = sortOrders.find((s) => s.value === sortOrder);

  return (
    <Box marginBottom={5} lineHeight={3}>
      <Heading lineHeight={1} fontWeight={"bold"} fontSize={56} as={"h1"}>
        {heading ? heading : "New and Trending"}
      </Heading>
      <Text fontSize={18} as={"p"} padding={1}>
        Based on player counts and{" "}
        {!currentSortOrder
          ? " relevance"
          : currentSortOrder.label.toLowerCase()}
      </Text>
    </Box>
  );
};

export default GameHeading;
