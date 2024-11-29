import useData from "./useData";

export interface Game {
  id: number;
  name: string;
}

const useGames = <T>() => useData<Game>("/games");

export default useGames;
