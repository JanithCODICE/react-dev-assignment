import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import globalAppConfig from "../global-app-config";

type ApiResponse<T = any> = {
    isException: boolean;
    response?: AxiosResponse<T>;
    error?: any;
};

class ApiClient {
    public static readonly instance: AxiosInstance = axios.create();
    private static readonly axioDefaults: AxiosRequestConfig = {
        baseURL: globalAppConfig.baseApiUrl,
        timeout: globalAppConfig.requestTimeout,
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
    };

    private static async axiosReq<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {

        try {
            const newConfig: AxiosRequestConfig = {
                ...this.axioDefaults,
                headers: {
                    ...this.axioDefaults.headers,
                    ...config.headers,
                },
                ...config,
            };

            const resp = await this.instance(newConfig);
            return { isException: false, response: resp };
        } catch (err: any) {
            return { isException: true, error: err }
        }
    }

    static async post<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
        return this.axiosReq<T>({ ...config, method: "post" });
    }

    static async patch<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
        return this.axiosReq<T>({ ...config, method: "patch" });
    }

    static async get<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
        return this.axiosReq<T>({ ...config, method: "get" });
    }

    static async delete<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
        return this.axiosReq<T>({ ...config, method: "delete" });
    }

    public static isTokenExpired(): boolean {
        const sessionObj = this.getAPITokens("refresh");
        if (sessionObj) {
            const now = Date.now();
            return now >= sessionObj.accessExpiresIn;
        }
        return false;
    }

    public static async refreshToken(): Promise<boolean> {
        const sessionObj = this.getAPITokens("refresh");
        const config: AxiosRequestConfig = {
            method: "post",
            url: "/auth/refresh-token",
            headers: {
                ...this.axioDefaults.headers,
                Authorization: "Bearer " + sessionObj.refresh_token,
            }
        };
        const resp = await axios(config);
        if (resp.status === 200) {
            this.setNewToken(resp.data);
            return true;
        }
        return false;
    }

    static setNewToken(sessionObj: any): void {
        return sessionStorage.setItem("USER_SESSION_KEY", JSON.stringify(sessionObj));
    }

    static getAPITokens(tokenType: "access" | "refresh"): any {
        const userData = JSON.parse(sessionStorage.getItem("USER_SESSION_KEY") ?? "{}");
        if (userData?.session) {
            if (tokenType === "access" && userData.session.accessToken) {
                return userData.session.accessToken;
            } else if (tokenType === "refresh" && userData.session.refreshToken) {
                return userData.session;
            }
        }
        return null;
    }
}

ApiClient.instance.interceptors.request.use(async (req) => {
    if (ApiClient.isTokenExpired()) {
        await ApiClient.refreshToken();
    }
    const access_token = ApiClient.getAPITokens("access");
    if (access_token) {
        req.headers["Authorization"] = "Bearer " + access_token;
    }
    return req;
});

export default ApiClient;
