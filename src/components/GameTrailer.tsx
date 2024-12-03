import useTrailer from "@/hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers } = useTrailer(gameId);
  const first = trailers?.results[0];

  return first ? (
    <video
      title={first?.name}
      src={first?.data[480]}
      poster={first?.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
