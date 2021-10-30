import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventGrid from "./eventGrid";
import EventList from "./eventList";
import Button from "../../elements/button";

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

export const Grid = GridTemplate.bind({});
Grid.args = {
    heading: "How to get angry",
    author: "Tom Watts",
    action: <Button text="edit" size="small" btnType="soft" />,
    views: "9 of 31",
    description: "I will show you how to get angry in a second I will show you how to get angry in a second I will show you how to get angry in a second I will show you how to get angry in a second ",
    date: "April 4, 2017 – 2:17 PM",
};
export const List = ListTemplate.bind({});
List.args = {
    heading: "How to get angry",
    author: "Tom Watts",
    action: <Button text="edit" size="small" btnType="soft" />,
    views: "9 of 31",
    description: "I will show you how to get angry in a second I will show you how to get angry in a second I will show you how to get angry in a second I will show you how to get angry in a second ",
    date: "April 4, 2017 – 2:17 PM",
};
