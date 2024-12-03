import ExpandableText from "@/components/ExpandableText";
import useGame from "@/hooks/useGame";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return <ExpandableText>{game.description_raw}</ExpandableText>;
};

export default GameDetailPage;
