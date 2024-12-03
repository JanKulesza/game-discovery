import useGame from "@/hooks/useGame";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return <div>{game?.description_raw}</div>;
};

export default GameDetailPage;
