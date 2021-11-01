import Typography from "app/components/elements/typography";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { EventCardType } from "./type";
import style from "./eventdetail.module.scss";
import Button from "../../elements/button";
import { useAppSelector } from "../../../store";
import { handleEventActions } from "../../../helpers/handleEventActions";

const EventList = ({ event, toggleEvent, view }: EventCardType) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const auth = useAppSelector((state) => state.auth);
    const history = useHistory();

    return (
        <div className={`${style.eventDetail} ${style.eventDetail__list}`}>
            <Typography level="f22" className={`${style.eventDetail__list__heading} text-truncate`}>
                {event.title}
            </Typography>
            <div className={style.eventDetail__description}>
                <Typography className="text-truncate">{event.description}</Typography>
            </div>
            <Typography className={style.eventDetail__list__author} level="f14" lighter>
                {event.owner.firstName} {event.owner.lastName}
            </Typography>
            <Typography className={style.eventDetail__date} level="f14">
                {event.createdAt}
            </Typography>
            <div className={style.eventDetail__list__footer}>
                <Typography level="f14" lighter>
                    {event.capacity}
                </Typography>
                <div className={style.eventDetail__list__action}>{view === "past events" ? null : <Button size="small" loading={btnLoading} {...handleEventActions(event, auth, history, toggleEvent, setBtnLoading)} />}</div>
            </div>
        </div>
    );
};

export default EventList;
