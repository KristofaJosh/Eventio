import Typography from "app/components/elements/typography";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { EventCardType } from "./type";
import { IconUser } from "../../../assets/icons";
import style from "./eventdetail.module.scss";
import Button from "../../elements/button";
import { useAppSelector } from "../../../store";
import { handleEventActions } from "../../../helpers/handleEventActions";

type EventGridType = EventCardType & { detail?: boolean };

const EventGrid = ({ toggleEvent, event, detail }: EventGridType) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const auth = useAppSelector((state) => state.auth);
    const history = useHistory();

    return (
        <div className={`${style.eventDetail} ${style.eventDetail__grid}`}>
            <Typography className={style.eventDetail__date} level="f14">
                {event.createdAt}
            </Typography>
            <div className={style.eventDetail__grid__heading}>
                <div>
                    <Typography level="f22" className="text-truncate_2">
                        {event.title}
                    </Typography>
                </div>
                <Typography level="f14" lighter>
                    {event.owner.firstName} {event.owner.lastName}
                </Typography>
            </div>
            <div className={style.eventDetail__description}>
                <Typography className={!detail ? "text-truncate_2" : ""}>{event.description}</Typography>
            </div>
            <div className={style.eventDetail__grid__footer}>
                <div className={style.eventDetail__grid__footer__views}>
                    <IconUser />
                    <Typography level="f14" lighter>
                        {event.capacity}
                    </Typography>
                </div>
                <Button size="small" loading={btnLoading} {...handleEventActions(event, auth, history, toggleEvent, setBtnLoading)} />
            </div>
        </div>
    );
};

export default EventGrid;
