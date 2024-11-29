import APIClient from "@/services/api-client";
import { useState, useEffect } from "react";

const useData = <T>(endpoint: string) => {
  const [data, setdata] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const { getAll } = new APIClient<T>(endpoint);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    getAll(controller)
      .then((res) => {
        setdata(res.data.results);
        setLoading(false);
      })
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
