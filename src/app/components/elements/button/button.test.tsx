import React from "react";
import renderer from "react-test-renderer";
import Button, { RoundButton } from ".";

it("Button renders correctly", () => {
    const tree = renderer.create(<Button text="click me" />).toJSON();
    const danger = renderer.create(<Button btnType="danger" text="click me" />).toJSON();
    const soft = renderer.create(<Button btnType="soft" text="click me" />).toJSON();
    const smallBtn = renderer.create(<Button size="small" text="click me" />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(danger).toMatchSnapshot();
    expect(soft).toMatchSnapshot();
    expect(smallBtn).toMatchSnapshot();
});

it("Round Button renders correctly", () => {
    const tree = renderer.create(<RoundButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
