import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root
      borderRadius="20px"
      bg={{ _dark: "#202020" }}
      border="none"
      overflow="hidden"
    >
      <Image src={game.background_image} />
      <Card.Header fontWeight="bold" fontSize="1.75rem">
        {game.name}
      </Card.Header>
    </Card.Root>
  );
};

export default GameCard;
