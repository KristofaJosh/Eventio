import React from "react";

export type EventCardType = {
    date: string;
    heading: string;
    author: string;
    description: string;
    action: React.ReactNode;
    views: string;
};
