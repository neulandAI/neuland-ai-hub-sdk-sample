import axios from "axios";
import https from "https";

import { getAuthToken, removeAuthToken } from "@/lib/auth";
import Configs from "./configs";

const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    httpsAgent: new https.Agent({ rejectUnauthorized: true }),
});

Axios.interceptors.request.use(
    (configs) => {
        const { service_token, access_token } = getAuthToken();

        if (access_token) {
            configs.headers.Authorization = `Bearer ${access_token}`;
        }

        if (service_token) {
            configs.headers["x-service-token"] = service_token;
        }

        if (!configs.headers["Content-Type"]) {
            configs.headers["Content-Type"] = "application/json";
        }

        if (!configs.headers.Accept) {
            configs.headers.Accept = "application/json";
        }

        return configs;
    },
    (error) => {
        return Promise.reject(error);
    }
);

if (Configs.isLocalMode) {
    Axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                removeAuthToken();
                window.location.href = "/auth/sign-in";
            } else {
                return Promise.reject(error);
            }
        }
    );
}

export default Axios;
