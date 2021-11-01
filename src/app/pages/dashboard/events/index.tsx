/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from "react";
import EventNav, { eventNavType } from "app/components/molecules/eventNav";
import CreateEventForm from "app/components/organisms/createEvent";
import EventGrid from "../../../components/molecules/eventDetail/eventGrid";
import api from "../../../../utils/apis";
import style from "./event.module.scss";
import EventList from "../../../components/molecules/eventDetail/eventList";
import { resolveEventResponse, resolveEventResponseType } from "../../../helpers/resolveEventResponse";
import SomethingWentWrong from "../../../components/molecules/error/somethingWentWrong";
import { IconSpinner } from "../../../assets/icons";
import { eventResponseType } from "../types";

const sortView = (view: eventNavType) => (el: resolveEventResponseType) => {
    if (view === "all events") {
        return el;
    }
    if (view === "future events") {
        return el.future;
    }
    // past event
    return !el.future;
};

const DashboardEvents = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [view, setView] = useState("");
    const [eventView, setEventView] = useState<eventNavType>("all events");
    const [events, setEvents] = useState<resolveEventResponseType[]>([]);

    const toggleEvent = ({ data }: { data: eventResponseType }) => {
        setEvents(
            events.reduce((res: any, cur) => {
                if (data.id === cur.id) {
                    res.push(resolveEventResponse.Single(data));
                } else {
                    res.push(cur);
                }
                return res;
            }, []),
        );
    };

    useEffect(() => {
        api.events
            .all()
            .then((response) => {
                setEvents(resolveEventResponse(response.data));
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError(error.response?.data?.error);
            });
    }, []);

    if (loading) {
        return (
            <div className={style.events__loader}>
                <IconSpinner style={{ width: 150, height: 150 }} />
            </div>
        );
    }

    if (error) {
        return (
            <div className={style.events__loader}>
                <SomethingWentWrong />
            </div>
        );
    }

    if (!loading && events.length) {
        return (
            <>
                <div className={style.events__nav}>
                    <EventNav onEventClick={(res) => setEventView(res)} onViewClick={(res) => setView(res)} />
                </div>
                <div className={`${style.events__content} ${view === "list" ? style.events__content_list : style.events__content_grid}`}>
                    {events.filter(sortView(eventView)).map((el) => {
                        if (view === "list") {
                            return <EventList key={el.id} toggleEvent={toggleEvent} view={eventView} event={el} />;
                        }
                        return <EventGrid key={el.id} toggleEvent={toggleEvent} view={eventView} event={el} />;
                    })}
                    <CreateEventForm />
                </div>
            </>
        );
    }

    if (!loading && !events.length) {
        return <div>There is nothing here</div>;
    }

    return null;
};

export default DashboardEvents;
