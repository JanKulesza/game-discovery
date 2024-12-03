import Developer from "./Developer";
import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  released: string;
  developers: Developer[];
  publishers: Publisher[];
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  ratings_count: number;
  description_raw: string;
}
