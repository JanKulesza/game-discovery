import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "@/App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGames(gameQuery);
  const skeletons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((acc, el) => acc + el.results.length, 0) || 0;
  console.log("Fetched Games Count:", fetchedGamesCount);
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <div style={{ height: 10 }}></div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        columnGap={5}
        rowGap={5}
      >
        {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Button onClick={() => fetchNextPage()} marginTop={3}>
        Load More
      </Button>
    </InfiniteScroll>
  );
};

export default GameGrid;
