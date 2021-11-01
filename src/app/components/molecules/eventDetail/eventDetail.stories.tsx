import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventGrid from "./eventGrid";
import EventList from "./eventList";

export default {
    title: "Molecules/EventDetailCard",
    component: EventGrid,
    argTypes: {
        action: {
            description: "button element",
            control: { type: null },
        },
    },
} as ComponentMeta<typeof EventGrid>;

const GridTemplate: ComponentStory<typeof EventGrid> = (args) => <EventGrid {...args} />;
const ListTemplate: ComponentStory<typeof EventList> = (args) => <EventList {...args} />;

const sampleResponse = {
    id: "58493db9691ecc0d3da51bfd",
    title: "Awesome event",
    description: "A bunch of people doing awesome stuff",
    startsAt: "2016-12-08T10:46:33.901Z",
    capacity: 50,
    owner: {
        id: "58493e0b691ecc0d3da51bfe",
        firstName: "Robert",
        lastName: "Rossmann",
        email: "robert.rossmann@strv.com",
        createdAt: "2016-12-08T10:46:33.901Z",
        updatedAt: "2016-12-08T10:46:33.901Z",
    },
    attendees: [
        {
            id: "58493e0b691ecc0d3da51bfe",
            firstName: "Robert",
            lastName: "Rossmann",
            email: "robert.rossmann@strv.com",
            createdAt: "2016-12-08T10:46:33.901Z",
            updatedAt: "2016-12-08T10:46:33.901Z",
        },
    ],
    future: true,
    createdAt: "2016-12-08T10:46:33.901Z",
    updatedAt: "2016-12-08T10:46:33.901Z",
};

export const Grid = GridTemplate.bind({});
Grid.args = {
    event: sampleResponse,
};
export const List = ListTemplate.bind({});
List.args = {
    event: sampleResponse,
};
