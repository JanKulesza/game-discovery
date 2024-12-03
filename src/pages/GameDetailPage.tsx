import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameScreenShots from "@/components/GameScreenShots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Grid
      paddingX={50}
      templateAreas={{ base: `"main aside"`, smDown: `"main" "aside"` }}
    >
      <GridItem>
        <Heading marginY={16} fontWeight={"bold"} fontSize={56} as={"h1"}>
          {game.name}
        </Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem paddingLeft={30}>
        <GameTrailer gameId={game.id} />
        <GameScreenShots gameId={game.id} />
      </GridItem>
    </Grid>
  );
};

export default GameDetailPage;
