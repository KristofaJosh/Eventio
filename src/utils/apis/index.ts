import eventioRequest from "./request";

export type loginType = { email: string; password: string };
const authentication = {
    login: (data: loginType) => eventioRequest({ url: "/auth/native", method: "post", data }),
    refreshToken: (refreshToken: string) => eventioRequest({ url: "/auth/native", method: "post", data: { refreshToken } }),
};

export type registerType = { firstName: string; lastName: string; email: string; password: string };
const users = {
    register: (data: registerType) => eventioRequest({ url: "/users", method: "post", data }),
};

const api = { authentication, users };

export default api;
