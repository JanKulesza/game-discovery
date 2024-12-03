import platforms from "@/data/platforms";
import useData from "./useData";
import Platform from "../entities/Platform";

const usePlatform = () =>
  useData<Platform>("/platforms/lists/parents", ["platforms"], {
    staleTime: 24 * 60 * 60 * 1000, // 24h,
    initialData: platforms,
  });

export default usePlatform;
