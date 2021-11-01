/* eslint-disable react/jsx-indent-props */
import React, { useState } from "react";
import { IconGrid, IconList } from "../../../assets/icons";
import style from "./eventnav.module.scss";
import Typography from "../../elements/typography";
import caretDown from "../../../assets/icons/angledownBlack.svg";

const navs = ["all events", "future events", "past events"];

export type eventNavType = "all events" | "future events" | "past events";

// eslint-disable-next-line no-unused-vars
const EventNav = React.memo(({ onEventClick, onViewClick }: { onEventClick: (res: eventNavType) => void; onViewClick: (res: "grid" | "list") => void }) => {
    const [active, setActive] = useState("all events");
    const [view, setView] = useState("grid");

    const handleClick = (e: any) => {
        const evt = e.target.id;
        if (evt) {
            setActive(evt);
            onEventClick(evt);
        }
    };

    const handleViewClick = (e: any) => {
        const evt = e.target.id;
        if (evt) {
            setView(evt);
            onViewClick(evt);
        }
    };

    return (
        <nav className={style.eventNav}>
            <ul className={`${style.eventNav__navs} ${style.eventNav__list}`} onClick={handleClick} role="presentation">
                {navs.map((text, i) => (
                    <li key={i.toString()} className={`${active === text ? style.eventNav__navs_isActive : ""}`}>
                        <span id={text}>{text}</span>
                    </li>
                ))}
            </ul>
            <div className={style.eventNav__select}>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <Typography lighter>SHOW:</Typography>
                <select
                    style={{
                        background: `url(${caretDown}) no-repeat`,
                        backgroundPosition: "calc(100% - 10px) 50%",
                        paddingRight: "25px",
                    }}
                    onClick={handleClick}
                >
                    {navs.map((text) => (
                        <option id={text} value="" key={text} className={`${active === text ? style.eventNav__navs_isActive : ""}`}>
                            {text}
                        </option>
                    ))}
                </select>
            </div>
            <div role="presentation" className={style.eventNav__navs}>
                <div onClick={handleViewClick} id="grid" role="presentation">
                    <IconGrid className={`${view === "grid" ? style.eventNav__navs_isActive : ""}`} />
                </div>
                <div onClick={handleViewClick} id="list" role="presentation">
                    <IconList className={`${view === "list" ? style.eventNav__navs_isActive : ""}`} />
                </div>
            </div>
        </nav>
    );
});

export default EventNav;
