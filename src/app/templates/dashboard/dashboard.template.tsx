import React, { FC } from "react";
import style from "./dashboard.module.scss";
import logo from "../../assets/images/logo.png";
import AccountHandler from "../../components/molecules/accountHandler";
import { useAppSelector } from "../../store";

const DashboardTemplate: FC<{ goBack?: boolean }> = ({ children, goBack }) => {
    const { session } = useAppSelector((state) => state.auth);

    return (
        <div className={style.dashboard}>
            <div className={style.dashboard__header}>
                <img src={logo} className="logo" alt="E." />
                {goBack && <div>back</div>}
                <AccountHandler name={`${session.firstName} ${session.lastName}`} />
            </div>
            <div className={style.dashboard__content}>{children}</div>
        </div>
    );
};

export default DashboardTemplate;
