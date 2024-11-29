import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";

const GameGrid = () => {
  const { data, error } = useGames();

  return (
    <SimpleGrid
      columns={{ lg: 4, sm: 1, md: 2 }}
      padding={"10px"}
      columnGap={5}
      rowGap={5}
    >
      {data.map((game) => (
        <GameCard game={game} />
      ))}
      ;
    </SimpleGrid>
  );
};

export default GameGrid;
