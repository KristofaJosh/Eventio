import { RouteComponentProps } from "react-router-dom";
import { AxiosResponse } from "axios";
import { RootState } from "../store/reducers";
import { checkAttendant } from "./checkAttendant";
import api from "../../utils/apis";
import { eventResponseType } from "../pages/dashboard/types";

export const handleEventActions = (
    event: eventResponseType,
    auth: RootState["auth"],
    history: RouteComponentProps["history"],
    // eslint-disable-next-line no-unused-vars
    toggleEvent: (res: AxiosResponse<any>) => void,
    // eslint-disable-next-line no-unused-vars
    setBtnLoading: (res: boolean) => void,
) => {
    // eslint-disable-next-line no-nested-ternary
    const text = auth.session.id === event.owner.id ? "edit" : checkAttendant(auth, event.attendees) >= 0 ? "leave" : "join";

    const failure = () => {
        setBtnLoading(false);
    };

    return {
        onClick: () => {
            if (text === "join") {
                setBtnLoading(true);
                api.events
                    .join(event.id)
                    .then((res) => {
                        toggleEvent(res);
                        setBtnLoading(false);
                    })
                    .catch(failure);
            }
            if (text === "leave") {
                setBtnLoading(true);
                api.events
                    .leave(event.id)
                    .then((res) => {
                        toggleEvent(res);
                        setBtnLoading(false);
                    })
                    .catch(failure);
            }
            if (text === "edit") history.push("/detail", event);
        },
        text,
        // eslint-disable-next-line no-nested-ternary
        btnType: text === "leave" ? "danger" : text === "edit" ? "soft" : ("primary" as any),
    };
};
