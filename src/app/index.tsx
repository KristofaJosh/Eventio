import React from "react";
import Input from "./components/elements/input";
import Button, { DeleteEventButton, RoundButton } from "./components/elements/button";
import { IconAdd, IconCheck } from "./assets/icons";
import Tag from "./components/elements/tag";
import AccountInitials from "./components/elements/accountInitials";

const AppRoot = () => {
    return (
        <div className="App">
            <div style={{ padding: 40 }}>
                {/*<Input label="Email" className="test" name="user" onChange={handleChange} />*/}
                <Input label="Email" className="test" name="user2" />
                <Input label="Email" error={"there's some error"} className="test" name="user" />
                <Button text="sign in" />
                <Button text="hello" loading />
                <Button text="hello" btnType="danger" loading />
                <Button text="hello" disabled loading />
                <Button text="hello" size="small" btnType="danger" loading />
                <Button text="join" size="small" />
                <Button text="edit" size="small" disabled />
                <RoundButton>
                    <IconAdd />
                </RoundButton>
                <RoundButton btnType="primary">
                    <IconCheck />
                </RoundButton>
                <RoundButton>23</RoundButton>
                <Tag>louis andrew</Tag>
                <AccountInitials name="tom watts" />
                <AccountInitials name="tom watts" small />
                <AccountInitials name="chris josh" small />
                <AccountInitials name="" />
                <AccountInitials name="c d" />
                <DeleteEventButton />
            </div>
        </div>
    );
};

export default AppRoot;
