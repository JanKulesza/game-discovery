import { Genre } from "@/entities/Genre";
import { Platform } from "@/entities/Platform";

const useLookUp = <T extends Genre | Platform>(
  id: number,
  data: T[]
): T | null => {
  const searchedData = data.find((d) => d.id === id);
  if (!searchedData) return null;
  return searchedData;
};

export default useLookUp;
