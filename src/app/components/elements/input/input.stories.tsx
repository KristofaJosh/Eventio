import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./index";

export default {
    title: "Atoms/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const PasswordTemplate: ComponentStory<typeof Input> = (args) => <Input.Password {...args} />;

export const NormalInput = Template.bind({});
NormalInput.args = { name: "name", label: "name" };

export const NormalInputWithError = Template.bind({});
NormalInputWithError.args = { name: "email", label: "email", error: "uh ohh..." };

export const NormalInputWithErrorHidden = Template.bind({});
NormalInputWithErrorHidden.args = { name: "lName", label: "last name", errorTextHidden: true, error: "there's an error" };

export const PasswordInput = PasswordTemplate.bind({});
PasswordInput.args = { name: "password", label: "password" };

export const PasswordInputWithError = PasswordTemplate.bind({});
PasswordInputWithError.args = { name: "password", label: "password", error: "there's some error" };
