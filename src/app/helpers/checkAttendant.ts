import { RootState } from "../store/reducers";
import { eventUserType } from "../pages/dashboard/types";

export const checkAttendant = (auth: RootState["auth"], attendants: eventUserType[]) => {
    return attendants.findIndex((el) => el.id === auth.session.id);
};
