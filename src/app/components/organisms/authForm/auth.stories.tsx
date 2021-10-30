import { ComponentMeta, ComponentStory } from "@storybook/react";
import SignInForm from "./index";
import RegisterForm from "./registerForm";

export default {
    title: "Organisms/AuthForms",
    component: SignInForm,
} as ComponentMeta<typeof SignInForm>;

const Template: ComponentStory<typeof SignInForm> = () => <SignInForm />;
const RegisterTemplate: ComponentStory<typeof RegisterForm> = () => <RegisterForm />;

export const SignIn = Template.bind({});
export const Register = RegisterTemplate.bind({});
