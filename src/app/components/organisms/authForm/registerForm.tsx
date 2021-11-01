import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import style from "./auth.module.scss";
import Typography from "../../elements/typography";
import Input from "../../elements/input";
import Button from "../../elements/button";
import api from "../../../../utils/apis";
import { formikInputListener } from "../../../helpers/formikListeners";

const RegisterForm = () => {
    const history = useHistory();
    const [error, setErr] = useState("");
    const registerController = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validate: (values) => {
            const errors: any = {};
            if (!values.firstName) {
                errors.firstName = "First name required";
            }
            if (!values.lastName) {
                errors.lastName = "Last name required";
            }
            if (!values.email) {
                errors.email = "Email required!";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email!";
            }
            if (!values.password) {
                errors.password = "Password is required!";
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Passwords do not match";
            }
            return errors;
        },
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true);
            try {
                const response = await api.users.register(values);
                if ([201, 200].includes(response.status)) {
                    history.push("/login");
                }
                // console.log(response);
            } catch (e: any) {
                const errMessage = e.response.data.error;
                setErr(errMessage.split(".").join(" "));
            }
            setSubmitting(false);
        },
    });
    return (
        <div className={style.authForm}>
            <div className={style.authForm__heading}>
                <Typography.Heading weight={400} level={1}>
                    Get started absolutely free.
                </Typography.Heading>
                <Typography lighter level="f18" className={`${error ? style.authForm__hasError : ""}`}>
                    {error || "Enter your details below."}
                </Typography>
            </div>
            <form onSubmit={registerController.handleSubmit} className={style.authForm__form}>
                <Input label="first name" {...formikInputListener("firstName", registerController)} />
                <Input label="last name" {...formikInputListener("lastName", registerController)} />
                <Input label="email" {...formikInputListener("email", registerController)} />
                <Input.Password label="password" {...formikInputListener("password", registerController)} />
                <Input.Password label="repeat password" {...formikInputListener("confirmPassword", registerController)} />
                <Typography lighter className={style.authForm__link}>
                    Already have an account? <Link to="/login">SIGN IN</Link>
                </Typography>
                <div className={style.authForm__button}>
                    <Button text="sign up" type="submit" onClick={() => setErr("")} loading={registerController.isSubmitting} />
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
