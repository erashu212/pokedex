import * as React from "react";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

const useFetch = <T extends object = {}>(
  url: string,
  options?: FetchOptions
): FetchResult<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url, {
          method: options?.method || "GET",
          headers: options?.headers || {},
          body: options?.body,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError((error as unknown as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
