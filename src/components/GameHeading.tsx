import { GameQuery } from "@/App";
import { sortOrders } from "@/services/constants";
import { Box, Heading, Text } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let heading;
  if (gameQuery.search) heading = `Searching for ${gameQuery.search}`;

  const currentSortOrder = sortOrders.find(
    (s) => s.value === gameQuery.sortOrder
  );

  return (
    <Box marginBottom={5} lineHeight={3}>
      <Heading lineHeight={1} fontWeight={"bold"} fontSize={56} as={"h1"}>
        {heading ? heading : "New and Trending"}
      </Heading>
      <Text fontSize={18} as={"p"} padding={1}>
        Based on player counts and{" "}
        {!currentSortOrder ? " Relevance" : currentSortOrder.label}
      </Text>
    </Box>
  );
};

export default GameHeading;
