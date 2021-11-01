/* eslint-disable react/jsx-indent-props */
import React from "react";
import { Link } from "react-router-dom";
import AuthTemplate from "../../../templates/auth/auth.template";
import RegisterForm from "../../../components/organisms/authForm/registerForm";

const RegisterPage = () => {
    return (
        <AuthTemplate
            link={
                <>
                    Already have an account? <Link to="/login">SIGN IN</Link>
                </>
            }
        >
            <RegisterForm />
        </AuthTemplate>
    );
};

export default RegisterPage;
