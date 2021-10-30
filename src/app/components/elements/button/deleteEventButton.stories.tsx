import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DeleteEventButton } from "./index";

export default {
    title: "Atoms/Button/DeleteEventButton",
    component: DeleteEventButton,
} as ComponentMeta<typeof DeleteEventButton>;

const Template: ComponentStory<typeof DeleteEventButton> = (args) => <DeleteEventButton {...args} />;
//
export const Delete = Template.bind({});
export const DeleteTextChanged = Template.bind({});
DeleteTextChanged.args = {
    text: "remove event",
};
