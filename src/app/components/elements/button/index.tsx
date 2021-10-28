import { IconDelete, IconSpinner } from "app/assets/icons";
import React, { ButtonHTMLAttributes, FC } from "react";
import style from "./button.module.scss";

const getBtnStyle = (type?: "primary" | "danger" | "soft") => {
    switch (type) {
        case "danger":
            return style.button__btnDanger;
        case "primary":
            return style.button__btnPrimary;
        case "soft":
            return style.button__btnSoft;
        default:
            return "";
    }
};

const getBtnSize = (size: "small" | "normal") => {
    switch (size) {
        case "normal":
            return style.button__isNormal;
        case "small":
            return style.button__isSmall;
        default:
            return style.button__isNormal;
    }
};

type BtnType = ButtonHTMLAttributes<HTMLButtonElement> & { size?: "small" | "normal"; loading?: boolean; text: string; btnType?: "primary" | "danger" | "soft" };

const Button: FC<BtnType> = ({ type, size = "normal", text, loading, btnType = "primary", disabled, ...props }) => {
    return (
        // eslint-disable-next-line react/button-has-type
        <button aria-disabled={disabled} className={`${style.button} ${getBtnSize(size)} ${getBtnStyle(btnType)} ${loading || disabled ? style.button__busy : ""} ${disabled ? style.button__btnSoft : ""}`} type={type} aria-label={loading ? `${text} loading` : text} {...props}>
            {!disabled && loading ? <IconSpinner className={style.button__loader} /> : text}
        </button>
    );
};

export const RoundButton: FC<ButtonHTMLAttributes<HTMLButtonElement> & { btnType?: "primary" | "danger" | "soft" }> = ({ disabled, btnType, children, ...props }) => {
    return (
        <button type="button" className={`${style.button} ${style.button__isRound} ${getBtnStyle(btnType)}`} aria-disabled={disabled} disabled={disabled} {...props}>
            {children}
        </button>
    );
};

export const DeleteEventButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={`${style.button} ${style.button__deleteEvent}`} type="button" {...props}>
            <IconDelete />
            <p>Delete Event</p>
        </button>
    );
};

export default Button;
