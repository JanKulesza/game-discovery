import genres from "@/data/genres";
import useData from "./useData";
import Genre from "@/entities/Genre";

const useGenre = () =>
  useData<Genre>("/genres", ["genres"], {
    initialData: genres,
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useGenre;
