import React, { FC } from "react";
import style from "./tag.module.scss";

const Tag: FC<{ noBg?: boolean; text?: string }> = ({ children, noBg, text }) => {
    return (
        <div className={`${style.tag} ${noBg ? style.tag__noBack : ""}`}>
            <p>{text || children}</p>
        </div>
    );
};

export default Tag;
