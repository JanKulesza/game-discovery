import axios from "axios";

interface FetchGamesResponse<T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ea4de890898c4ca390902e9513d08a0e",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (controller: AbortController) => {
    return apiClient.get<FetchGamesResponse<T>>(this.endpoint, {
      signal: controller.signal,
    });
  };
}

export default APIClient;
