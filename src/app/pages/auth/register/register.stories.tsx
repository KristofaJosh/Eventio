import { ComponentMeta, ComponentStory } from "@storybook/react";
import RegisterForm from "./registerPage";

export default {
    title: "Pages/Register",
    component: RegisterForm,
} as ComponentMeta<typeof RegisterForm>;

const Template: ComponentStory<typeof RegisterForm> = () => <RegisterForm />;

export const Register = Template.bind({});
