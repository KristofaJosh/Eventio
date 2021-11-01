import { eventResponseType } from "../pages/dashboard/types";

export interface resolveEventResponseType extends eventResponseType {
    future: boolean;
}

const formatDate = (date: string) => {
    const time = new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }).toUpperCase();
    const [, a, b, c] = new Date(date).toDateString().toString().split(" ");
    return `${a} ${b}, ${c} - ${time}`;
};

export const resolveEventResponse = (response: eventResponseType[]): resolveEventResponseType[] => {
    return response.reduce((res: any, cur) => {
        res.push({ ...cur, createdAt: formatDate(cur.createdAt as any), future: new Date(cur.startsAt).getTime() > new Date().getTime(), capacity: `${cur.attendees.length} - ${cur.capacity}` });
        return res;
    }, []);
};

resolveEventResponse.Single = (cur: eventResponseType) => {
    return { ...cur, createdAt: formatDate(cur.createdAt as any), future: new Date(cur.startsAt).getTime() > new Date().getTime(), capacity: `${cur.attendees.length} - ${cur.capacity}` };
};
