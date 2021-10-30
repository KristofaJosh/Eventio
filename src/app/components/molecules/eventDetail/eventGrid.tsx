import Typography from "app/components/elements/typography";
import React from "react";
import { EventCardType } from "./type";
import { IconUser } from "../../../assets/icons";
import style from "./eventdetail.module.scss";

const EventGrid = ({ date, heading, author, description, views, action }: EventCardType) => {
    return (
        <div className={`${style.eventDetail} ${style.eventDetail__grid}`}>
            <Typography className={style.eventDetail__date} level="f14">
                {date}
            </Typography>
            <div className={style.eventDetail__grid__heading}>
                <div>
                    <Typography level="f22" className="text-truncate_2">
                        {heading}
                    </Typography>
                </div>
                <Typography level="f14" lighter>
                    {author}
                </Typography>
            </div>
            <div className={style.eventDetail__description}>
                <Typography className="text-truncate_2">{description}</Typography>
            </div>
            <div className={style.eventDetail__grid__footer}>
                <div className={style.eventDetail__grid__footer__views}>
                    <IconUser />
                    <Typography level="f14" lighter>
                        {views}
                    </Typography>
                </div>
                {action}
            </div>
        </div>
    );
};

export default EventGrid;
