import { ComponentMeta, ComponentStory } from "@storybook/react";
import SomethingWentWrong from "./somethingWentWrong";

export default {
    title: "Molecules/Errors/SomethingWentWrong",
    component: SomethingWentWrong,
} as ComponentMeta<typeof SomethingWentWrong>;

const Template: ComponentStory<typeof SomethingWentWrong> = () => <SomethingWentWrong />;

export const somethingWentWrong = Template.bind({});
