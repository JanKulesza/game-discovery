import data from "@/data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenre = () => ({ data: data, isLoading: false, error: null });
// const useGenre = () => useData<Genre>("/genres");

export default useGenre;
