import React from "react";
import Input from "./components/elements/input";
import Button, { DeleteEventButton, RoundButton } from "./components/elements/button";
import { IconAdd, IconCheck } from "./assets/icons";
import Tag from "./components/elements/tag";
import AccountInitials from "./components/elements/accountInitials";
import Typography from "./components/elements/typography";

const AppRoot = () => {
    return (
        <div className="App">
            <div style={{ padding: 40 }}>
                {/*<Input label="Email" className="test" name="user" onChange={handleChange} />*/}
                <form action="">
                    <Input label="Email" className="test" name="email" />
                    <Input.Password label="Password" className="test" name="password" />
                    <Input label="Erro input" error={"there's some error"} className="test" name="user" />
                    <Button text="sign in" />
                </form>
                <Button text="welcome" loading />
                <Button text="hello" btnType="danger" loading />
                <Button text="hello" disabled loading />
                <Button text="hello" size="small" btnType="danger" loading />
                <Button text="join" size="small" />
                <Button text="edit" size="small" disabled />
                <RoundButton>
                    <IconAdd aria-label="add" />
                </RoundButton>
                <RoundButton btnType="primary">
                    <IconCheck aria-label="check" />
                </RoundButton>

                <RoundButton>23</RoundButton>
                <Tag>louis andrew</Tag>
                <Tag>louis andrew Chrissy</Tag>
                <Tag noBack>louis andrew</Tag>
                <AccountInitials name="tom watts" />
                <AccountInitials name="tom watts" small />
                <AccountInitials name="chris josh" small />
                <AccountInitials name="tom watts" small />
                <AccountInitials name="" />
                <AccountInitials name="c d" />
                <DeleteEventButton />
                <div>
                    <Typography level="f12">Final decission is here</Typography>
                    <Typography level="f14">Final decission is here</Typography>
                    <Typography level="f16" weight="bolder">
                        Final decission is here
                    </Typography>
                    <Typography level="f18">Final decission is here</Typography>
                    <Typography level="f28">Final decission is here</Typography>
                    <Typography.Heading level={1}>Final decission is here</Typography.Heading>
                    <Typography.Heading level={2}>Final decission is here</Typography.Heading>
                    <Typography.Heading level={3}>Final decission is here</Typography.Heading>
                    <Typography.Heading level={4}>Final decission is here</Typography.Heading>
                    <Typography.Heading level={5}>Final decission is here</Typography.Heading>
                </div>
            </div>
        </div>
    );
};

export default AppRoot;
