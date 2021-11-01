import { eventResponseType } from "../../../pages/dashboard/types";
import { resolveEventResponseType } from "../../../helpers/resolveEventResponse";

export type EventCardType = {
    event: resolveEventResponseType;
    // eslint-disable-next-line no-unused-vars
    toggleEvent: ({ data }: { data: eventResponseType }) => void;
};
