import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenreId: number | null;
  selectedPlatformId: number | null;
}

const GameGrid = ({ selectedGenreId, selectedPlatformId }: Props) => {
  const { data, error, isLoading } = useGames(
    selectedGenreId,
    selectedPlatformId
  );
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        columnGap={5}
        rowGap={5}
      >
        {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        ;
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
