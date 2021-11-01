import React from "react";
import AuthTemplate from "../../../templates/auth/auth.template";
import RegisterForm from "../../../components/organisms/authForm/registerForm";

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    );
};

export default RegisterPage;
