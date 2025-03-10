interface GlobalAppConfig {
    baseApiUrl: string;
    requestTimeout: number;
}

const globalAppConfig: GlobalAppConfig = {
    baseApiUrl: import.meta.env.VITE_BASE_API_URL ?? "",
    requestTimeout: import.meta.env.VITE_REQUEST_TIMEOUT ? parseInt(import.meta.env.VITE_REQUEST_TIMEOUT) : 60000,
}

export default globalAppConfig;