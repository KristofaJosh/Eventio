import React from "react";
import style from "./profiledetails.module.scss";
import Typography from "../../elements/typography";
import AccountInitials from "../../elements/accountInitials";

const ProfileDetail = ({ name, email }: { name: string; email: string }) => {
    return (
        <div className={style.profileDetail}>
            <AccountInitials className={style.profileDetail__image} name={name} />
            <div className={style.profileDetail__texts}>
                <div>
                    <Typography level="f18">{name}</Typography>
                    <Typography level="f14" lighter>
                        {email}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetail;
