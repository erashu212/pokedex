import axios from "axios";
export const getHttpClient = (baseUrl, config) => {
    const instance = axios.create({
        baseURL: baseUrl,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
        },
        ...config,
    });
    instance.interceptors.request.use((request) => {
        return request;
    }, (error) => {
        return Promise.reject(error);
    });
    instance.interceptors.response.use((response) => {
        return response.data;
    }, (error) => {
        return Promise.reject(error);
    });
    return instance;
};
//# sourceMappingURL=http-client-service.js.map