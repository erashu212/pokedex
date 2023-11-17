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
declare const useFetch: <T extends object = {}>(url: string, options?: HttpOptions) => HttpResult<T>;
export default useFetch;
//# sourceMappingURL=use-fetch.d.ts.map