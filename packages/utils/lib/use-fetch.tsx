import * as React from "react";
import { getHttpClient } from "./http-client-service";

interface HttpResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface HttpOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

const useFetch = <T extends object = {}>(
  url: string,
  options?: HttpOptions
): HttpResult<T> => {
  const axiosInstance = getHttpClient("");

  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axiosInstance({
          method: options?.method || "GET",
          url,
          headers: options?.headers || {},
          data: options?.body,
        });

        setData(response.data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosInstance, url, options]);

  return { data, loading, error };
};

export default useFetch;
