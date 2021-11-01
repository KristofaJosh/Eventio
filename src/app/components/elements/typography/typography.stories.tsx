import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "./index";

const { Heading } = Typography;

export default {
    title: "Atoms/Typography",
    component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;
const HeadingTemplate: ComponentStory<typeof Heading> = (args) => <Typography.Heading {...args} />;
//
export const Text = Template.bind({});
Text.args = {
    text: "remove event",
};
export const TextHeadings = HeadingTemplate.bind({});
TextHeadings.args = {
    text: "remove event",
    level: 2,
    weight: "normal",
};
