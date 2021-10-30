import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProfileDetail from "./index";

export default {
    title: "Molecules/ProfileDetail",
    component: ProfileDetail,
    argTypes: {
        action: {
            description: "button element",
            control: { type: null },
        },
    },
} as ComponentMeta<typeof ProfileDetail>;

const Template: ComponentStory<typeof ProfileDetail> = (args) => <ProfileDetail {...args} />;

export const AccountDetail = Template.bind({});
AccountDetail.args = {
    name: "Chris Josh",
    email: "christopherjoshua25@hotmail.com",
};
