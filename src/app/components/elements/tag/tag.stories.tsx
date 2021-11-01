import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tag from "./index";

export default {
    title: "Atoms/Tag",
    component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
//
export const withBackground = Template.bind({});
withBackground.args = {
    children: "Chris josh",
};

export const withoutBackground = Template.bind({});
withoutBackground.args = {
    noBg: true,
    text: "hello",
};
