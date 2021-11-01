import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoginPage from "./index";

export default {
    title: "Pages/Login",
    component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage />;

export const Login = Template.bind({});
