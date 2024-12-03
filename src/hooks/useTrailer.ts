import { Trailer } from "@/entities/Trailer";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useTrailer = (gameId: number) => {
  const { getAll } = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: getAll,
  });
};

export default useTrailer;
