import { ComponentMeta, ComponentStory } from "@storybook/react";
import AccountHandler from ".";

export default {
    title: "Molecules/AccountHandler",
    component: AccountHandler,
} as ComponentMeta<typeof AccountHandler>;

const Template: ComponentStory<typeof AccountHandler> = () => <AccountHandler />;

export const Account = Template.bind({});
