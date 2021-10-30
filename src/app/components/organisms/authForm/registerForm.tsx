import React from "react";
import style from "./auth.module.scss";
import Typography from "../../elements/typography";
import Input from "../../elements/input";
import Button from "../../elements/button";

const RegisterForm = () => {
    const handleChange = () => {};
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    return (
        <div className={style.authForm}>
            <div className={style.authForm__heading}>
                <Typography.Heading weight={400} level={1}>
                    Get started absolutely free.
                </Typography.Heading>
                <Typography lighter level="f18" className={style.authForm__subtext}>
                    Enter your details below.
                </Typography>
            </div>
            <form onSubmit={handleSubmit} className={style.authForm__form}>
                <Input label="first name" name="firstName" onChange={handleChange} />
                <Input label="last name" name="lastName" onChange={handleChange} />
                <Input label="email" name="email" onChange={handleChange} />
                <Input.Password label="password" name="password" onChange={handleChange} />
                <Input.Password label="repeat password" name="repeatPassword" onChange={handleChange} />
                <Typography lighter className={style.authForm__link}>
                    Already have an account? <span>SIGN IN</span>
                </Typography>
                <div className={style.authForm__button}>
                    <Button text="sign up" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
