import Input from "app/components/elements/input";
import Typography from "app/components/elements/typography";
import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Button from "../../elements/button";
import style from "./auth.module.scss";
import { formikInputListener } from "../../../helpers/formikListeners";
import { loginUserAction } from "../../../store/reducers/auth/auth.actions";
import { useAppDispatch, useAppSelector } from "../../../store";

const SignInForm = () => {
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector((state) => state.auth);

    const signingController = useFormik({
        initialValues: { email: "", password: "" },
        validate: (values) => {
            const errors: any = {};
            if (!values.email) {
                errors.email = "required!";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "invalid email!";
            }
            if (!values.password) {
                errors.password = "password is required!";
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(loginUserAction(values));
        },
    });

    return (
        <div className={style.authForm}>
            <div className={style.authForm__heading}>
                <Typography.Heading weight={400} level={1}>
                    Sign in to Eventio.
                </Typography.Heading>
                <Typography lighter level="f18" className={error ? style.authForm__hasError : ""}>
                    {error === "User.InvalidPassword" ? "Oops! That email and password combination is not valid." : error || "Enter your details below."}
                </Typography>
            </div>
            <form onSubmit={signingController.handleSubmit}>
                <Input label="email" {...formikInputListener("email", signingController)} errorTextHidden />
                <Input.Password label="password" {...formikInputListener("password", signingController)} errorTextHidden />
                <Typography lighter className={style.authForm__link}>
                    Don&apos;t have account? <Link to="/register">SIGN UP</Link>
                </Typography>
                <div className={style.authForm__button}>
                    <Button text="sign in" type="submit" loading={loading} />
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
