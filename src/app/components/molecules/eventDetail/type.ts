import Button from "app/components/elements/button";

type actionBtn = typeof Button;

export type EventCardType = {
    date: string;
    heading: string;
    author: string;
    shortText: string;
    action: actionBtn;
    views: string;
};
