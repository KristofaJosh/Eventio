import Input from "app/components/elements/input";
import Typography from "app/components/elements/typography";
import React from "react";
import Button from "../../elements/button";
import style from "./auth.module.scss";

const SignInForm = () => {
    const handleChange = () => {};
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    return (
        <div className={style.authForm}>
            <div className={style.authForm__heading}>
                <Typography.Heading weight={400} level={1}>
                    Sign in to Eventio.
                </Typography.Heading>
                <Typography lighter level="f18">
                    Enter your details below.
                </Typography>
            </div>
            <form onSubmit={handleSubmit} className={style.authForm__form}>
                <Input label="email" name="email" onChange={handleChange} />
                <Input.Password label="password" name="password" onChange={handleChange} />
                <Typography lighter className={style.authForm__link}>
                    Don&apos;t have account? <span>SIGN UP</span>
                </Typography>
                <div className={style.authForm__button}>
                    <Button text="sign in" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
