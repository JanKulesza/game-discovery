import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import useGame from "@/hooks/useGame";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box paddingX={50}>
      <Heading marginY={16} fontWeight={"bold"} fontSize={56} as={"h1"}>
        {game.name}
      </Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </Box>
  );
};

export default GameDetailPage;
