import useGenre from "@/hooks/useGenre";
import { Avatar } from "@/components/ui/avatar";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
import { skeletons } from "@/services/constants";
import useGameQueryStore from "@/strore";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenre();

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <Heading color="white" fontWeight="bold" fontSize={30} margin={5}>
        Genres
      </Heading>
      <VStack alignItems="flex-start" paddingLeft={5}>
        {isLoading && skeletons.map((s) => <GenreListSkeleton key={s} />)}
        {genres?.data.results?.map((g) => (
          <HStack
            padding={1}
            borderRadius="0.5em"
            key={g.id}
            cursor="pointer"
            transition="0.3s"
            w="100%"
            h="100%"
            bg={{
              _hover: { _dark: "teal.700", _light: "teal.200" },
              base:
                genreId === g.id
                  ? { _dark: "teal.700", _light: "teal.200" }
                  : "",
            }}
            onClick={() => {
              setGenreId(g.id);
            }}
          >
            <Avatar size="sm" src={g.image_background} shape="rounded" />
            <Text
              fontWeight={genreId === g.id ? "bold" : ""}
              color={{ _dark: "white", _light: "black" }}
            >
              {g.name}
            </Text>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default GenreList;
