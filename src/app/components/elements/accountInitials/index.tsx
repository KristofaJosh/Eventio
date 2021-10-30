import React from "react";
import style from "./accountInitials.module.scss";

const AccountInitials = ({ name, small, className }: { name: string; small?: boolean; className?: string }) => {
    const [f, l] = name ? name.split(" ") : ["?", ""];
    return (
        <div className={`${style.initials} ${small ? style.initials__isSmall : ""} ${className ?? ""}`}>
            <p>{`${f[0]} ${(l && l[0]) ?? ""}`.trim()}</p>
        </div>
    );
};

export default AccountInitials;
