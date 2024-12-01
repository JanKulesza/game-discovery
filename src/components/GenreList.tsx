import useGenre from "@/hooks/useGenre";
import { Avatar } from "@/components/ui/avatar";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId: number | null;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data: genres, error, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

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
              _hover: { _dark: "#202020", _light: "#f4f4f5" },
              base:
                selectedGenreId === g.id
                  ? { _dark: "#202020", _light: "#f4f4f5" }
                  : "",
            }}
            onClick={() => {
              onSelectGenre(g.id);
            }}
          >
            <Avatar size="sm" src={g.image_background} shape="rounded" />
            <Text
              fontWeight={selectedGenreId === g.id ? "bold" : ""}
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
