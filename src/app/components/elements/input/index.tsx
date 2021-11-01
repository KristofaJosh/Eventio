import React, { ChangeEvent, FC, InputHTMLAttributes, useEffect, useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import style from "./input.module.scss";
import { IconEyeOpen } from "../../../assets/icons";

type InputBaseType = FC<InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; errorTextHidden?: boolean }>;
// eslint-disable-next-line no-unused-vars
interface InputDateInterface extends ReactDatePickerProps {
    label: string;
    error?: string;
    errorTextHidden?: boolean;
    value: string;
    onChange: any;
    name: any;
    type?: "time" | "date";
    id?: string;
    className?: any;
}
type InputDateType = FC<InputDateInterface>;
type InputType = InputBaseType & { Password: InputBaseType; Date: InputDateType };
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

const DateInput: InputDateType = ({ error, errorTextHidden, label, value, type = "date", onChange, name, id, className, ...props }) => {
    const [startDate, setStartDate] = useState(null);

    const handleChange = (date: Date) => {
        setStartDate(date as any);
        if (onChange) onChange({ target: { name, value: date } });
    };
    useEffect(() => {
        if (value) setStartDate(value as any);
    }, [value]);

    const renderProps = type === "time" ? { showTimeSelect: true, showTimeSelectOnly: true, timeIntervals: 1, timeCaption: "Time", dateFormat: "h:mm aa" } : {};

    return (
        <div className={`${style.input__wrapper} ${className ?? ""}`}>
            <label htmlFor={id || name} style={{ zIndex: 1 }} className={`${style.input__label} ${startDate ? style.input__input__hasValue : ""}`}>
                {label}
            </label>
            <DatePicker
                id={id || name}
                className={`${style.input__wrapper__inputContainer} ${style.input__input} ${error ? style.input__input__hasError : ""}`}
                selected={startDate}
                onChange={handleChange}
                {...renderProps}
                {...props}
            />
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
Input.Date = DateInput;

export default Input;
