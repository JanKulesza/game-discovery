import useScreenShot from "@/hooks/useScreenShots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data } = useScreenShot(gameId);

  return (
    <SimpleGrid gap={2} columns={{ lgDown: 1, base: 2 }}>
      {data?.results.map((s) => (
        <Image
          borderRadius={"16px"}
          _hover={{
            transform: "scale(1.03)",
          }}
          transition={"0.3s"}
          src={s.image}
          key={s.id}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
