import React, { ChangeEvent, FC, InputHTMLAttributes, useEffect, useState } from "react";
import style from "./input.module.scss";

const Input: FC<InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }> = ({ error, label, value, onChange, name, id, className, ...props }) => {
    const [_value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (onChange) onChange(e);
    };
    useEffect(() => {
        if (value) setValue(value as any);
    }, [value]);

    return (
        <div className={`${style.input__wrapper} ${className ?? ""}`}>
            <label htmlFor={name || id} className={`${style.input__label} ${_value ? style.input__input__hasValue : ""}`}>
                {label}
            </label>
            <input id={name || id} value={_value} onChange={handleChange} className={`${style.input__wrapper__inputContainer} ${style.input__input}`} type="text" {...props} />
            <small className={style.input__hasError} aria-label={error}>
                {error}
            </small>
        </div>
    );
};

export default Input;
