import useTrailer from "@/hooks/useTrailer";
import { AspectRatio } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers } = useTrailer(gameId);
  const first = trailers?.results[0];

  return first ? (
    <AspectRatio
      h={480}
      marginBottom={5}
      borderRadius={"1em"}
      overflow={"hidden"}
    >
      <video
        title={first?.name}
        src={first?.data[480]}
        poster={first?.preview}
        controls
      />
    </AspectRatio>
  ) : null;
};

export default GameTrailer;
