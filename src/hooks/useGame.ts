import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";

const { get } = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => get(slug),
  });

export default useGame;
