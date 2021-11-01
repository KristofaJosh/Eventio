import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./index";

export default {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        text: {
            description: "text in button element",
            type: { name: "string", required: true },
            control: {
                type: "text",
            },
        },
        size: {
            description: "size of button",
            options: ["small", "normal"],
            control: { type: "inline-radio" },
        },
        btnType: {
            description: "color of button",
            options: ["primary", "danger", "soft"],
            defaultValue: "primary",
            control: { type: "inline-radio" },
        },
        disabled: {
            description: "disable button",
            defaultValue: false,
            control: { type: "boolean" },
        },
        loading: {
            description: "loading state",
            defaultValue: false,
            control: { type: "boolean" },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Big = Template.bind({});
Big.args = {
    size: "normal",
    text: "Normal",
};

export const Loading = Template.bind({});
Loading.args = {
    size: "normal",
    text: "Normal Button",
    loading: true,
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    text: "Small",
};
