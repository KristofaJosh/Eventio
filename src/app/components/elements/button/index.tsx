import { IconDelete, IconSpinner } from "app/assets/icons";
import React, { ButtonHTMLAttributes, FC } from "react";
import style from "./button.module.scss";

type btnType = "primary" | "danger" | "soft" | "black";

const getBtnStyle = (type?: btnType) => {
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

interface BtnInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "small" | "normal";
    loading?: boolean;
    text: string;
    btnType?: btnType;
}

const Button = ({ type, size = "normal", text, loading, btnType = "primary", disabled, className, ...props }: BtnInterface) => {
    return (
        // eslint-disable-next-line react/button-has-type
        <button aria-disabled={disabled} className={`${style.button} ${getBtnSize(size)} ${getBtnStyle(btnType)} ${loading || disabled ? style.button__busy : ""} ${disabled ? style.button__btnSoft : ""} ${className ?? ""}`} type={type} aria-label={loading ? `${text} loading` : text} {...props}>
            {!disabled && loading ? <IconSpinner className={style.button__loader} /> : text}
        </button>
    );
};

export const RoundButton: FC<ButtonHTMLAttributes<HTMLButtonElement> & { btnType?: btnType }> = ({ disabled, className, btnType = "black", children, ...props }) => {
    return (
        <button type="button" className={`${style.button} ${style.button__isRound} ${getBtnStyle(btnType)} ${className ?? ""}`} aria-disabled={disabled} disabled={disabled} {...props}>
            {children}
        </button>
    );
};

export const DeleteEventButton = (props: ButtonHTMLAttributes<HTMLButtonElement> & { text?: string }) => {
    return (
        <button className={`${style.button} ${style.button__deleteEvent} ${props.className ?? ""}`} type="button" {...props}>
            <IconDelete />
            <p>{props.text || "Delete Event"}</p>
        </button>
    );
};

export default Button;
