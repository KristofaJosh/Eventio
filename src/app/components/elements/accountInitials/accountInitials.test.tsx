import React from "react";
import renderer from "react-test-renderer";
import AccountInitials from "./index";

it("renders correctly", () => {
    const tree = renderer.create(<AccountInitials name="James brown" />).toJSON();
    expect(tree).toMatchSnapshot();
});
