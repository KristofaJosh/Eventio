import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RoundButton } from "./index";
import { IconAdd, IconCheck } from "../../../assets/icons";

export default {
    title: "Atoms/Button/RoundButton",
    component: RoundButton,
    argTypes: {
        btnType: {
            description: "wrapper color",
            defaultValue: "primary",
            control: { type: "inline-radio" },
        },
    },
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = (args) => <RoundButton {...args} />;

export const RoundButtonWrapper = Template.bind({});

export const RoundButtonWrapperWithCheckIcon = Template.bind({});
RoundButtonWrapperWithCheckIcon.args = {
    children: <IconCheck />,
    btnType: "primary",
};

export const RoundButtonWrapperWithAddIcon = Template.bind({});
RoundButtonWrapperWithAddIcon.args = {
    children: <IconAdd />,
    btnType: "black",
};
