import React from "react";
import Typography from "app/components/elements/typography";
import style from "./accountHandler.module.scss";
import AccountInitials from "../../elements/accountInitials";
import { IconAngleDown } from "../../../assets/icons";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { useAppDispatch } from "../../../store";
import { resetAuthState } from "../../../store/reducers/auth/auth.reducer";

const AccountHandler = ({ name }: { name: string }) => {
    const { setVisible, visible, ref } = useOnClickOutside(false);
    const dispatch = useAppDispatch();

    const handleSelection = (e: React.MouseEvent<HTMLDivElement>) => {
        const el: any = e.target;
        if (el.id === "log-out") {
            dispatch(resetAuthState());
        }
    };

    return (
        <div className={style.accountHandler}>
            <AccountInitials small name={name} className={style.accountHandler__initials} />
            <div className={style.accountHandler__name} ref={ref}>
                <Typography lighter text={name} level="f14" />
                <IconAngleDown tabIndex={0} onKeyDown={(e) => (e?.keyCode === 13 || e?.which === 13 ? setVisible(!visible) : undefined)} onClick={() => setVisible(!visible)} />
                {visible && (
                    <div role="presentation" className={style.accountHandler__options} onClick={handleSelection}>
                        <p id="profile">profile</p>
                        <p id="log-out">log out</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccountHandler;
