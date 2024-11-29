import { Game } from "@/hooks/useGames";
import { Card, Image, Text, VStack } from "@chakra-ui/react";
import PlatformsIconList from "./PlatformIconList";
import RatingCount from "./RatingsCount";
import RatingsCount from "./RatingsCount";
import getCroppedImage from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root
      h="fit-content"
      borderRadius="20px"
      bg={{ _dark: "#202020" }}
      border="none"
      overflow="hidden"
    >
      <Image src={getCroppedImage(game.background_image)} />

      <Card.Header
        lineHeight={1}
        marginBottom={8}
        fontWeight="bold"
        fontSize="1.75rem"
      >
        <PlatformsIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
        {game.name}
        <RatingsCount ratingsCount={game.ratings_count} />
      </Card.Header>
    </Card.Root>
  );
};

export default GameCard;
