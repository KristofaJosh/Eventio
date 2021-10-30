import Typography from "app/components/elements/typography";
import React from "react";
import { EventCardType } from "./type";
import style from "./eventdetail.module.scss";

const EventList = ({ date, heading, author, description, views, action }: EventCardType) => {
    return (
        <div className={`${style.eventDetail} ${style.eventDetail__list}`}>
            <Typography level="f22" className={`${style.eventDetail__list__heading} text-truncate`}>
                {heading}
            </Typography>
            <div className={style.eventDetail__description}>
                <Typography className="text-truncate">{description}</Typography>
            </div>
            <Typography className={style.eventDetail__list__author} level="f14" lighter>
                {author}
            </Typography>
            <Typography className={style.eventDetail__date} level="f14">
                {date}
            </Typography>
            <div className={style.eventDetail__list__footer}>
                <Typography level="f14" lighter>
                    {views}
                </Typography>
                <div className={style.eventDetail__list__action}>{action}</div>
            </div>
        </div>
    );
};

export default EventList;
