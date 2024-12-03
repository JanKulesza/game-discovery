import { Game } from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <Text>{game?.metacritic}</Text>
      </DefinitionItem>
      <DefinitionItem term="Genre">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Released date">
        <Text>{game.released}</Text>
      </DefinitionItem>
      <DefinitionItem term="Developer">
        {game.developers?.map((d) => (
          <Text key={d.id}>{d.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publisher">
        {game.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
