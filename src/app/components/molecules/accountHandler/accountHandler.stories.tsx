import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AccountHandler from ".";
import store from "../../../store";

export default {
    title: "Molecules/AccountHandler",
    component: AccountHandler,
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={["/"]}>
                <Story />
            </MemoryRouter>
        ),
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
} as ComponentMeta<typeof AccountHandler>;

const Template: ComponentStory<typeof AccountHandler> = (args) => <AccountHandler {...args} />;

export const Account = Template.bind({});
Account.args = {
    name: "great monday",
};
