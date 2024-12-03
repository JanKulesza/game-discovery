import genres from "@/data/genres";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenre = () =>
  useData<Genre>("/genres", ["genres"], {
    initialData: genres,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useGenre;
