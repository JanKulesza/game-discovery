import { Genre } from "./Genre";
import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  released: string;
  developers: { id: number; name: string }[];
  publishers: { id: number; name: string }[];
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  ratings_count: number;
  description_raw: string;
}
