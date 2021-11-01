import { ComponentMeta, ComponentStory } from "@storybook/react";
import EventNav from "./index";

export default {
    title: "Molecules/EventNav",
    component: EventNav,
    argTypes: {
        action: {
            description: "button element",
            control: { type: null },
        },
    },
} as ComponentMeta<typeof EventNav>;

const Template: ComponentStory<typeof EventNav> = (args) => <EventNav {...args} />;

export const Nav = Template.bind({});
Nav.args = {
    onViewClick: () => {},
    onEventClick: () => {},
};
