"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
const getHttpClient = (baseUrl, config) => {
    const instance = axios_1.default.create({
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
exports.getHttpClient = getHttpClient;
//# sourceMappingURL=http-client-service.js.map