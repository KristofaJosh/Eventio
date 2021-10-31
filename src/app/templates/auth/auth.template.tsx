import Typography from "app/components/elements/typography";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import style from "./authTemplate.module.scss";

const renderLink = (_formName: any) => {
    const formName = _formName[0];
    if (formName.type.name === "RegisterForm") {
        return (
            <Typography lighter className={style.auth_template__form__link}>
                Already have an account? <Link to="/login">SIGN IN</Link>
            </Typography>
        );
    }
    if (formName.type.name === "SignInForm") {
        return (
            <Typography lighter className={style.auth_template__form__link}>
                Don&apos;t have account? <Link to="/register">SIGN UP</Link>
            </Typography>
        );
    }
    return null;
};

const AuthTemplate: FC = ({ children }) => {
    const component = React.Children.map(children, (child: any) => {
        if (typeof child.type !== "function") {
            return <div>Please use a functional component</div>;
        }
        return child;
    });

    return (
        <div className={style.auth_template}>
            <div className={style.auth_template__side}>
                <img className="logo" src="./logo-white.png" alt="E." />
                <div className={style.auth_template__side__nugget}>
                    <Typography>“Great, kid. Don’t get cocky.”</Typography>
                    <div style={{ background: "var(--green)", height: 2, width: 12, marginTop: 20, marginBottom: 15 }} />
                    <Typography level="f18" lighter>
                        Han Solo
                    </Typography>
                </div>
            </div>
            <div className={style.auth_template__form}>
                <div className={style.auth_template__form__top}>
                    <img className="logo" src="./logo.png" alt="E." />
                    {renderLink(component)}
                </div>
                <div className={style.auth_template__form__content}>{component}</div>
            </div>
        </div>
    );
};

export default AuthTemplate;
