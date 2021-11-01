import { eventResponseType } from "../../../pages/dashboard/types";

export type EventCardType = {
    event: eventResponseType;
    // eslint-disable-next-line no-unused-vars
    toggleEvent: ({ data }: { data: eventResponseType }) => void;
};
