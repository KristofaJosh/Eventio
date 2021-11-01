/* eslint-disable react/jsx-indent-props */
import React from "react";
import { Link } from "react-router-dom";
import AuthTemplate from "../../../templates/auth/auth.template";
import SignInForm from "../../../components/organisms/authForm";

const LoginPage = () => {
    return (
        <AuthTemplate
            link={
                <>
                    Don&apos;t have account? <Link to="/register">SIGN UP</Link>
                </>
            }
        >
            <SignInForm />
        </AuthTemplate>
    );
};

export default LoginPage;
