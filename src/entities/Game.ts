import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  ratings_count: number;
  description_raw: string;
}
