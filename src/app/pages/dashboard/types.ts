export type eventUserType = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date | string;
    updatedAt: Date | string;
};

export type eventResponseType = {
    id: string;
    title: string;
    description: string;
    startsAt: Date | string;
    capacity: number;
    owner: eventUserType;
    attendees: Array<eventUserType>;
    createdAt: Date | string;
    updatedAt: Date | string;
};
