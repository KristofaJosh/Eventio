import Typography from "app/components/elements/typography";
import React from "react";
import { EventCardType } from "./type";
import { IconUser } from "../../../assets/icons";
import style from "./eventdetail.module.scss";

const EventGrid = ({ date, heading, author, shortText, views, action }: EventCardType) => {
    return (
        <div className={style.eventDetail}>
            <Typography level="f14" lighter>
                {date}
            </Typography>
            <div>
                <Typography level="f22" lighter>
                    {heading}
                </Typography>
                <Typography level="f14" lighter>
                    {author}
                </Typography>
            </div>
            <div>
                <Typography>{shortText}</Typography>
            </div>
            <div>
                <div>
                    <IconUser />
                    <Typography level="f14" lighter>
                        {views}
                    </Typography>
                </div>
                <div>{action}</div>
            </div>
        </div>
    );
};

export default EventGrid;
