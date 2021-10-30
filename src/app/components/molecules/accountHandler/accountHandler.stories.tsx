import { ComponentMeta, ComponentStory } from "@storybook/react";
import AccountHandler from ".";

export default {
    title: "Molecules/AccountHandler",
    component: AccountHandler,
} as ComponentMeta<typeof AccountHandler>;

const Template: ComponentStory<typeof AccountHandler> = (args) => <AccountHandler {...args} />;

export const Account = Template.bind({});
Account.args = {
    name: "great monday",
};
