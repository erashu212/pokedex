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
declare const useFetch: <T extends object = {}>(url: string, options?: FetchOptions) => FetchResult<T>;
export default useFetch;
//# sourceMappingURL=use-fetch.d.ts.map