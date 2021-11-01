import React from "react";
import AuthTemplate from "../../../templates/auth/auth.template";
import SignInForm from "../../../components/organisms/authForm";

const LoginPage = () => {
    return (
        <AuthTemplate>
            <SignInForm />
        </AuthTemplate>
    );
};

export default LoginPage;
