import React, { ChangeEvent, FC, InputHTMLAttributes, useEffect, useState } from "react";
import style from "./input.module.scss";
import { IconEyeOpen } from "../../../assets/icons";

type InputBaseType = FC<InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; errorTextHidden?: boolean }>;
type InputType = InputBaseType & { Password: InputBaseType };
type InputPasswordType = InputBaseType;

const Input: InputType = ({ error, errorTextHidden, label, value, onChange, name, id, className, ...props }) => {
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
            <label htmlFor={id || name} className={`${style.input__label} ${_value ? style.input__input__hasValue : ""}`}>
                {label}
            </label>
            <input id={id || name} value={_value} onChange={handleChange} className={`${style.input__wrapper__inputContainer} ${style.input__input} ${error ? style.input__input__hasError : ""}`} type="text" {...props} />
            <small className={style.input__hasError}>{!errorTextHidden && error}</small>
        </div>
    );
};

const Password: InputPasswordType = ({ label, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    return (
        <div className={style.input__password}>
            <Input type={showPassword ? "text" : "password"} label={label} {...props} />
            <IconEyeOpen role="button" aria-label="show password" className={showPassword ? style.input__password_showing : ""} onClick={handleShowPassword} />
        </div>
    );
};

Input.Password = Password;

export default Input;
