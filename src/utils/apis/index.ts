import eventioRequest from "./request";

export type loginType = { email: string; password: string };
export const authUrl = "/auth/native";
const authentication = {
    login: (data: loginType) => eventioRequest({ url: authUrl, method: "post", data }),
    // refreshToken: (refreshToken: string) => eventioRequest({ url: authUrl, method: "post", data: { refreshToken } }),
};

export type registerType = { firstName: string; lastName: string; email: string; password: string };
export const usersUrl = "/users";
const users = {
    register: (data: registerType) => eventioRequest({ url: usersUrl, method: "post", data }),
};

export type createEventType = { title: string; description: string; startsAt: Date | string; capacity: number };
export type updateEventType = { title?: string; description?: string; startsAt?: Date | string; capacity?: number };
export const eventsUrl = "/events";
const events = {
    all: () => eventioRequest({ url: eventsUrl, method: "get" }),
    get: (id: string) => eventioRequest({ url: `${eventsUrl}/${id}`, method: "get" }),
    create: (data: createEventType) => eventioRequest({ url: eventsUrl, method: "post", data }),
    update: (id: string, data: updateEventType) => eventioRequest({ url: `${eventsUrl}/${id}`, method: "patch", data }),
    del: (id: string) => eventioRequest({ url: `${eventsUrl}/${id}`, method: "delete" }),
    join: (id: string) => eventioRequest({ url: `${eventsUrl}/${id}/attendees/me`, method: "post" }),
    leave: (id: string) => eventioRequest({ url: `${eventsUrl}/${id}/attendees/me`, method: "delete" }),
};

const api = { authentication, users, events };

export default api;
