import { ComponentMeta, ComponentStory } from "@storybook/react";
import AccountInitials from "./index";

export default {
    title: "Atoms/Avatar",
    component: AccountInitials,
    argTypes: {
        name: {
            description: "name of account",
        },
        small: {
            description: "size of avatar",
            defaultValue: false,
            control: { type: "boolean" },
        },
    },
} as ComponentMeta<typeof AccountInitials>;

const Template: ComponentStory<typeof AccountInitials> = (args) => <AccountInitials {...args} />;
//
export const Normal = Template.bind({});
Normal.args = {
    name: "Chris Josh",
};

export const SmallWithoutName = Template.bind({});
SmallWithoutName.args = {
    name: "",
    small: true,
};

export const SmallWithName = Template.bind({});
SmallWithName.args = {
    name: "John Wick",
    small: true,
};
