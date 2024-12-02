import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

const useData = <T>(
  endpoint: string,
  queryKey: any[],
  queryConfig?: object,
  requestConfig?: AxiosRequestConfig
) => {
  const { getAll } = new APIClient<T>(endpoint);

  const { data, error, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: () => getAll(requestConfig),
    ...queryConfig,
  });

  return { data, error, isLoading };
};

export default useData;
