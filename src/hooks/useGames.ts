import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

const useGames = <T>() => useData<Game>("/games");

export default useGames;
