import React from "react";
import Typography from "app/components/elements/typography";
import style from "./accountHandler.module.scss";
import AccountInitials from "../../elements/accountInitials";
import { IconAngleDown } from "../../../assets/icons";

const AccountHandler = () => {
    return (
        <div className={style.accountHandler}>
            <AccountInitials small name="" />
            <div className={style.accountHandler__name}>
                <Typography lighter text="name" level="f14" />
                <IconAngleDown />
            </div>
        </div>
    );
};

export default AccountHandler;
