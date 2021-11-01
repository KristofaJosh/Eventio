import { eventResponseType } from "../../../pages/dashboard/types";
import { eventNavType } from "../eventNav";

export type EventCardType = {
    view?: eventNavType;
    event: eventResponseType;
    // eslint-disable-next-line no-unused-vars
    toggleEvent: ({ data }: { data: eventResponseType }) => void;
};
