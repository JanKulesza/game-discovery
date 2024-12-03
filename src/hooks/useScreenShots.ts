import ScreenShot from "@/entities/ScreenShot";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenShot = (gameId: number) => {
  const { getAll } = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshot", gameId],
    queryFn: getAll,
  });
};

export default useScreenShot;
