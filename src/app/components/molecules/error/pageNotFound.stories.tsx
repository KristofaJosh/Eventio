import { ComponentMeta, ComponentStory } from "@storybook/react";
import PageNotFound from "./pageNotFound";

export default {
    title: "Molecules/Errors/PageNotFound",
    component: PageNotFound,
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = () => <PageNotFound />;
//
export const pageNotFound = Template.bind({});
