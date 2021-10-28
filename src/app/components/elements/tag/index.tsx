import React, { FC } from "react";
import style from "./tag.module.scss";

const Tag: FC<{ noBack?: boolean }> = ({ children, noBack }) => {
    return (
        <div className={`${style.tag} ${noBack ? style.tag__noBack : ""}`}>
            <p>{children}</p>
        </div>
    );
};

export default Tag;
