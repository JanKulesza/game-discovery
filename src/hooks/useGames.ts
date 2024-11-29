import APIClient from "@/services/api-client";
import { useState, useEffect } from "react";

export interface Game {
  id: number;
  name: string;
}

const { getAll } = new APIClient<Game>("/games");

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getAll()
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  getAll().then((res) => res.data);

  return { games, error };
};

export default useGames;
