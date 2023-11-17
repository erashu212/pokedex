import * as React from "react";
import { getHttpClient } from "./http-client-service";
const useFetch = (url, options) => {
    const axiosInstance = getHttpClient("");
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance({
                    method: options?.method || "GET",
                    url,
                    headers: options?.headers || {},
                    data: options?.body,
                });
                setData(response.data);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [axiosInstance, url, options]);
    return { data, loading, error };
};
export default useFetch;
//# sourceMappingURL=use-fetch.js.map