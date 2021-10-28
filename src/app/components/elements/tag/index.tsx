import React, { FC } from "react";
import style from "./tag.module.scss";

const Tag: FC = ({ children }) => {
    return <div className={style.tag}>{children}</div>;
};

export default Tag;
