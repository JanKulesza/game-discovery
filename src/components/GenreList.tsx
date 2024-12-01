import useGenre from "@/hooks/useGenre";
import { Avatar } from "@/components/ui/avatar";
import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genreId: number) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Heading color="white" fontWeight="bold" fontSize={30} margin={5}>
        Genres
      </Heading>
      <VStack alignItems="flex-start" paddingLeft={5}>
        {isLoading && skeletons.map((s) => <GenreListSkeleton key={s} />)}
        {genres.map((g) => (
          <HStack
            padding={1}
            borderRadius="0.5em"
            key={g.id}
            cursor="pointer"
            transition="0.3s"
            w="100%"
            h="100%"
            bg={{ _hover: "gray.900" }}
            onClick={() => {
              onSelectGenre(g.id);
            }}
          >
            <Avatar size="sm" src={g.image_background} shape="rounded" />
            <Text color="white">{g.name}</Text>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default GenreList;
